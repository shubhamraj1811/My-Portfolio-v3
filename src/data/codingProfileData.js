// ── LeetCode stats (mock — replace with real data once API/backend is connected) ──
export const leetcodeData = {
   totalSolved: 150,
   totalLabel: "150+",
   easy: { solved: 78, total: 150 },
   medium: { solved: 62, total: 150 },
   hard: { solved: 10, total: 150 },
   daysChallenge: "100 Days",
   dsaLevel: "Beginner → Medium",
   profileUrl: "https://leetcode.com/u/shubhcoded/",
};

// ── GitHub stats (mock — replace with real data via secure backend, never expose tokens client-side) ──
export const githubData = {
   repositories: 12,
   contributionsThisYear: 340,
   profileUrl: "https://github.com/shubhamraj1811",
};

// ── Contribution calendar (mock generator — swap for real GitHub contribution API response) ──
export const AVAILABLE_YEARS = [2026, 2025, 2024];

function seededRandom(seed) {
   const x = Math.sin(seed) * 10000;
   return x - Math.floor(x);
}

// Generates a mock year of daily contribution counts, deterministic per year (not random each render)
export function getContributionData(year) {
   const start = new Date(`${year}-01-01`);
   const end = new Date(`${year}-12-31`);
   const days = [];
   let seed = year * 13;

   for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      seed += 1;
      const rand = seededRandom(seed);
      // Weighted toward lower activity, occasional bursts — roughly resembles real contribution patterns
      let count = 0;
      if (rand > 0.55) count = Math.floor(seededRandom(seed * 2) * 3) + 1;
      if (rand > 0.85) count = Math.floor(seededRandom(seed * 3) * 6) + 4;
      if (rand > 0.96) count = Math.floor(seededRandom(seed * 4) * 10) + 8;

      days.push({ date: new Date(d).toISOString().split("T")[0], count });
   }

   return days;
}

export function getContributionLevel(count) {
   if (count === 0) return 0;
   if (count <= 2) return 1;
   if (count <= 5) return 2;
   if (count <= 9) return 3;
   return 4;
}
