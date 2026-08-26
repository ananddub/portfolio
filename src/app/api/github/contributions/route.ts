import { NextResponse } from "next/server";

const LEVEL_MAP: Record<string, number> = {
   NONE: 0,
   FIRST_QUARTILE: 1,
   SECOND_QUARTILE: 2,
   THIRD_QUARTILE: 3,
   FOURTH_QUARTILE: 4,
};

export async function GET(request: Request) {
   const { searchParams } = new URL(request.url);
   const username = searchParams.get("username") || "ananddub";
   const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;

   // 1. Try Official GitHub GraphQL API if token is provided
   if (token) {
      try {
         const query = `
            query($username: String!) {
               user(login: $username) {
                  contributionsCollection {
                     contributionCalendar {
                        totalContributions
                        weeks {
                           contributionDays {
                              contributionCount
                              date
                              contributionLevel
                              color
                           }
                        }
                     }
                  }
               }
            }
         `;

         const gqlResponse = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
               Authorization: `Bearer ${token}`,
               "Content-Type": "application/json",
               "User-Agent": "ananddub-portfolio",
            },
            body: JSON.stringify({ query, variables: { username } }),
            next: { revalidate: 3600 },
         });

         if (gqlResponse.ok) {
            const gqlData = await gqlResponse.json();
            const calendar =
               gqlData?.data?.user?.contributionsCollection
                  ?.contributionCalendar;

            if (calendar) {
               const contributions: {
                  date: string;
                  count: number;
                  level: number;
               }[] = [];

               for (const week of calendar.weeks || []) {
                  for (const day of week.contributionDays || []) {
                     contributions.push({
                        date: day.date,
                        count: day.contributionCount,
                        level: LEVEL_MAP[day.contributionLevel] ?? 0,
                     });
                  }
               }

               return NextResponse.json(
                  {
                     total: { lastYear: calendar.totalContributions },
                     contributions,
                     source: "official_github_graphql_api",
                  },
                  {
                     headers: {
                        "Cache-Control":
                           "public, s-maxage=3600, stale-while-revalidate=86400",
                     },
                  },
               );
            }
         }
      } catch (err) {
         console.error("Official GitHub GraphQL API error, using fallback:", err);
      }
   }

   // 2. High-Availability Fallback
   try {
      const response = await fetch(
         `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
         {
            next: { revalidate: 3600 },
            headers: {
               "User-Agent": "Mozilla/5.0",
               Accept: "application/json",
            },
         },
      );

      if (!response.ok) {
         throw new Error(`Upstream API returned ${response.status}`);
      }

      const data = await response.json();
      return NextResponse.json(
         { ...data, source: "github_contributions_pipeline" },
         {
            headers: {
               "Cache-Control":
                  "public, s-maxage=3600, stale-while-revalidate=86400",
            },
         },
      );
   } catch (error) {
      console.error("Error fetching GitHub contributions:", error);
      return NextResponse.json(
         { error: "Failed to fetch GitHub contributions" },
         { status: 500 },
      );
   }
}
