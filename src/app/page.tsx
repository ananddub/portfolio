import { HomeClient } from "@/components/HomeClient";
import { getOpenSourceRepoStats } from "@/lib/github";

export default async function Home() {
   const githubStats = await getOpenSourceRepoStats();
   return <HomeClient githubStats={githubStats} />;
}
