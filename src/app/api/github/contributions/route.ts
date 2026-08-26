import { NextResponse } from "next/server";

export async function GET(request: Request) {
   const { searchParams } = new URL(request.url);
   const username = searchParams.get("username") || "ananddub";

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
      return NextResponse.json(data, {
         headers: {
            "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
         },
      });
   } catch (error) {
      console.error("Error fetching GitHub contributions:", error);
      return NextResponse.json(
         { error: "Failed to fetch GitHub contributions" },
         { status: 500 },
      );
   }
}
