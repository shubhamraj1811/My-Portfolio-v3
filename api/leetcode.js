export default async function handler(req, res) {
   const username = req.query.username || "shubhcoded";

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
         return res.status(404).json({ error: "LeetCode user not found" });
      }

      const solvedByDifficulty = Object.fromEntries(
         json.data.matchedUser.submitStatsGlobal.acSubmissionNum.map((d) => [
            d.difficulty,
            d.count,
         ]),
      );
      const totalByDifficulty = Object.fromEntries(
         json.data.allQuestionsCount.map((d) => [d.difficulty, d.count]),
      );

      res.setHeader("Cache-Control", "s-maxage=1800, stale-while-revalidate");
      return res.status(200).json({
         totalSolved: solvedByDifficulty.All || 0,
         totalQuestions: totalByDifficulty.All || 0,
         easy: solvedByDifficulty.Easy || 0,
         medium: solvedByDifficulty.Medium || 0,
         hard: solvedByDifficulty.Hard || 0,
      });
   } catch (err) {
      return res.status(500).json({ error: "Failed to fetch LeetCode stats" });
   }
}
