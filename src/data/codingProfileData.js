export const GITHUB_USERNAME = "shubhamraj1811";
export const LEETCODE_USERNAME = "shubhcoded";
export const LEETCODE_PROFILE_URL = `https://leetcode.com/u/${LEETCODE_USERNAME}/`;
export const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`;

// Manually maintained REAL stats — used ONLY as a fallback if the live third-party
// LeetCode API is unreachable. Update these yourself to match your actual profile
// whenever you solve more problems. Leave as null until you fill them in.
export const MANUAL_LEETCODE_STATS = {
   totalSolved: 107, // e.g. 150
   totalQuestions: 4047,
   easy: 60,
   medium: 34,
   hard: 13,
};

// These two are genuine personal achievements, not live API stats — kept as static content.
export const KNOWN_ACHIEVEMENTS = {
   daysChallenge: "100 Days",
   dsaLevel: "Beginner → Medium",
};

const LEETCODE_STATS_API = `https://leetcode-stats-api.herokuapp.com/${LEETCODE_USERNAME}`;
const GITHUB_API = `https://api.github.com/users/${GITHUB_USERNAME}`;
const githubContribApi = (year) =>
   `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}${year ? `?y=${year}` : ""}`;

// Returns real LeetCode stats, or the manually maintained real fallback, or null.
export async function fetchLeetCodeStats() {
   try {
      const res = await fetch(LEETCODE_STATS_API);
      if (!res.ok) throw new Error("LeetCode API request failed");
      const data = await res.json();
      if (data.status !== "success")
         throw new Error("LeetCode API returned an error");
      return {
         totalSolved: data.totalSolved,
         totalQuestions: data.totalQuestions,
         easy: data.easySolved,
         medium: data.mediumSolved,
         hard: data.hardSolved,
         source: "live",
      };
   } catch {
      if (MANUAL_LEETCODE_STATS.totalSolved != null) {
         return { ...MANUAL_LEETCODE_STATS, source: "manual" };
      }
      return null;
   }
}

// Returns { repositories } from your real public GitHub profile, or null.
export async function fetchGithubProfile() {
   try {
      const res = await fetch(GITHUB_API);
      if (!res.ok) throw new Error("GitHub profile request failed");
      const data = await res.json();
      return { repositories: data.public_repos };
   } catch {
      return null;
   }
}

// Returns real contribution days for a given year (or the most recent period if
// no year is passed), plus the list of years GitHub actually has data for.
// Current-year data always stops at today — there is no generation past real dates.
export async function fetchGithubContributions(year) {
   try {
      const res = await fetch(githubContribApi(year));
      if (!res.ok) throw new Error("GitHub contributions request failed");
      const data = await res.json();

      const todayStr = new Date().toISOString().split("T")[0];
      const days = (data.contributions || []).filter((d) => d.date <= todayStr);

      const availableYears = Object.keys(data.total || {})
         .filter((k) => /^\d{4}$/.test(k))
         .map(Number)
         .sort((a, b) => b - a);

      const total = year
         ? (data.total?.[year] ?? days.reduce((sum, d) => sum + d.count, 0))
         : days.reduce((sum, d) => sum + d.count, 0);

      return { days, total, availableYears };
   } catch {
      return null;
   }
}

export function getContributionLevel(count) {
   if (count === 0) return 0;
   if (count <= 2) return 1;
   if (count <= 5) return 2;
   if (count <= 9) return 3;
   return 4;
}