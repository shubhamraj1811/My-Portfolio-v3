import git from "../assets/Certificates/git.png";

export const ITEMS = [
   {
      type: "certificate",
      id: "git-github",
      title: "Git & GitHub",
      organization: "GeeksforGeeks",
      year: "2025",
      description:
         "Hands-on certification covering version control fundamentals, branching strategies, and collaborative workflows using Git and GitHub.",
      icon: "git",
      image: git,
      duration: "",
      skills: ["Git", "GitHub", "Version Control"],
      credentialId: "",
      featured: true,
   },
   {
      type: "achievement",
      id: "leetcode-150",
      title: "150+ Problems Solved",
      organization: "LeetCode",
      year: "2026",
      description:
         "Consistent DSA practice and problem-solving development across arrays, trees, graphs, and dynamic programming.",
      icon: "code",
      metric: "150+",
      proofImage: "",
      proofUrl: "",
      skills: ["DSA", "Problem Solving"],
      featured: false,
   },
   {
      type: "achievement",
      id: "hackathon-gds",
      title: "Google Developer Solutions Hackathon",
      organization: "Google Developer Groups",
      year: "2025",
      description:
         "Collaborated in a team to design and build a solution under time pressure, focused on real-world problem solving.",
      icon: "trophy",
      metric: "Top Team",
      proofImage: "",
      proofUrl: "",
      skills: ["Teamwork", "Rapid Prototyping"],
      featured: false,
   },
   {
      type: "certificate",
      id: "android-basics",
      title: "Android Development Basics",
      organization: "Coursera",
      year: "2024",
      description:
         "Foundational certification covering Android app fundamentals, UI components, and app lifecycle management.",
      icon: "android",
      image: "",
      duration: "4 Weeks",
      skills: ["Android", "Kotlin"],
      credentialId: "",
      featured: false,
   },
   {
      type: "certificate",
      id: "android-basics-4",
      title: "Android Development Basics",
      organization: "Coursera",
      year: "2024",
      description:
         "Foundational certification covering Android app fundamentals, UI components, and app lifecycle management.",
      icon: "android",
      image: "",
      duration: "4 Weeks",
      skills: ["Android", "Kotlin"],
      credentialId: "",
      featured: false,
   },
   {
      type: "certificate",
      id: "android-basics-3",
      title: "Android Development Basics",
      organization: "Coursera",
      year: "2024",
      description:
         "Foundational certification covering Android app fundamentals, UI components, and app lifecycle management.",
      icon: "android",
      image: "",
      duration: "4 Weeks",
      skills: ["Android", "Kotlin"],
      credentialId: "",
      featured: false,
   },
   {
      type: "certificate",
      id: "android-basics-2",
      title: "Android Development Basics",
      organization: "Coursera",
      year: "2024",
      description:
         "Foundational certification covering Android app fundamentals, UI components, and app lifecycle management.",
      icon: "android",
      image: "",
      duration: "4 Weeks",
      skills: ["Android", "Kotlin"],
      credentialId: "",
      featured: false,
   },
   {
      type: "certificate",
      id: "android-basics-1",
      title: "Android Development Basics",
      organization: "Coursera",
      year: "2024",
      description:
         "Foundational certification covering Android app fundamentals, UI components, and app lifecycle management.",
      icon: "android",
      image: "",
      duration: "4 Weeks",
      skills: ["Android", "Kotlin"],
      credentialId: "",
      featured: false,
   },
];

export const TYPE_LABELS = {
   certificate: "CERTIFICATE",
   achievement: "ACHIEVEMENT",
};

export const TYPE_COLORS = {
   certificate: {
      text: "text-teal-400",
      border: "border-teal-400/40",
      bg: "bg-teal-500/10",
   },
   achievement: {
      text: "text-purple-400",
      border: "border-purple-400/40",
      bg: "bg-purple-500/10",
   },
};
