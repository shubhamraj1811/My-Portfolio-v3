import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const leetcodeDevApi = () => ({
   name: "leetcode-dev-api",
   configureServer(server) {
      server.middlewares.use("/api/leetcode", async (req, res) => {
         const url = new URL(req.url, "http://localhost");
         const username = url.searchParams.get("username") || "shubhcoded";

         const query = `
        query getUserStats($username: String!) {
          matchedUser(username: $username) {
            submitStatsGlobal {
              acSubmissionNum { difficulty count }
            }
          }
          allQuestionsCount { difficulty count }
        }
      `;

         try {
            const response = await fetch("https://leetcode.com/graphql", {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
                  Referer: "https://leetcode.com",
               },
               body: JSON.stringify({ query, variables: { username } }),
            });
            const json = await response.json();

            if (!json.data?.matchedUser) {
               res.statusCode = 404;
               res.end(JSON.stringify({ error: "LeetCode user not found" }));
               return;
            }

            const solvedByDifficulty = Object.fromEntries(
               json.data.matchedUser.submitStatsGlobal.acSubmissionNum.map(
                  (d) => [d.difficulty, d.count],
               ),
            );
            const totalByDifficulty = Object.fromEntries(
               json.data.allQuestionsCount.map((d) => [d.difficulty, d.count]),
            );

            res.setHeader("Content-Type", "application/json");
            res.end(
               JSON.stringify({
                  totalSolved: solvedByDifficulty.All || 0,
                  totalQuestions: totalByDifficulty.All || 0,
                  easy: solvedByDifficulty.Easy || 0,
                  medium: solvedByDifficulty.Medium || 0,
                  hard: solvedByDifficulty.Hard || 0,
               }),
            );
         } catch (err) {
            res.statusCode = 500;
            res.end(
               JSON.stringify({ error: "Failed to fetch LeetCode stats" }),
            );
         }
      });
   },
});

export default defineConfig({
   plugins: [react(), tailwindcss(), leetcodeDevApi()],
});
