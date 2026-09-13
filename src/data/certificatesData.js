import git from "../assets/Certificates/git.jpg";
import leetcode from "../assets/Certificates/leetcode.jpg"
import google from "../assets/Certificates/google.png"

export const ITEMS = [
   // === Google Hackathon
   {
      type: "achievement",
      id: "hackathon-gds",
      title: "Solutions Challenge Hackathon",
      organization: "Google Developer Groups",
      year: "2025",
      description:
         "Led and developed an AI-powered study companion, applying problem-solving and development skills to a real-world challenge in a competitive hackathon environment.",
      icon: "trophy",
      metric: "Team Lead & Developer",
      proofImage: google,
      proofUrl: "",
      skills: [
         "AI-Powered Development",
         "Problem Solving",
         "Team Leadership",
         "Rapid Prototyping",
      ],
      featured: true,
   },

   // === GIT
   {
      type: "certificate",
      id: "git-github",
      title: "Git",
      organization: "GeeksforGeeks",
      year: "2025",
      description:
         "Demonstrates practical proficiency in Git and GitHub, covering version control, branching, collaboration, and modern software development workflows.",
      icon: "git",
      image: git,
      duration: "1 Month",
      skills: [
         "Git",
         "GitHub",
         "Version Control",
         "Branching & Merging",
         "Collaborative Workflows",
      ],
      credentialId: "",
      featured: false,
   },

   // === LEETCODE
   {
      type: "achievement",
      id: "leetcode-150",
      title: "150+ Problems Solved",
      organization: "LeetCode",
      year: "2026",
      description:
         "Solved 150+ LeetCode problems through consistent DSA practice, strengthening algorithmic thinking across arrays, trees, graphs, and dynamic programming.",
      icon: "code",
      metric: "150+",
      proofImage: leetcode,
      proofUrl: "",
      skills: ["DSA", "Problem Solving"],
      featured: false,
   },

   // {
   //    type: "certificate",
   //    id: "android-basics",
   //    title: "Android Development Basics",
   //    organization: "Coursera",
   //    year: "2024",
   //    description:
   //       "Foundational certification covering Android app fundamentals, UI components, and app lifecycle management.",
   //    icon: "android",
   //    image: "",
   //    duration: "4 Weeks",
   //    skills: ["Android", "Kotlin"],
   //    credentialId: "",
   //    featured: false,
   // },

   // {
   //    type: "certificate",
   //    id: "android-basics-4",
   //    title: "Android Development Basics",
   //    organization: "Coursera",
   //    year: "2024",
   //    description:
   //       "Foundational certification covering Android app fundamentals, UI components, and app lifecycle management.",
   //    icon: "android",
   //    image: "",
   //    duration: "4 Weeks",
   //    skills: ["Android", "Kotlin"],
   //    credentialId: "",
   //    featured: false,
   // },

   // {
   //    type: "certificate",
   //    id: "android-basics-3",
   //    title: "Android Development Basics",
   //    organization: "Coursera",
   //    year: "2024",
   //    description:
   //       "Foundational certification covering Android app fundamentals, UI components, and app lifecycle management.",
   //    icon: "android",
   //    image: "",
   //    duration: "4 Weeks",
   //    skills: ["Android", "Kotlin"],
   //    credentialId: "",
   //    featured: false,
   // },

   // {
   //    type: "certificate",
   //    id: "android-basics-2",
   //    title: "Android Development Basics",
   //    organization: "Coursera",
   //    year: "2024",
   //    description:
   //       "Foundational certification covering Android app fundamentals, UI components, and app lifecycle management.",
   //    icon: "android",
   //    image: "",
   //    duration: "4 Weeks",
   //    skills: ["Android", "Kotlin"],
   //    credentialId: "",
   //    featured: false,
   // },

   // {
   //    type: "certificate",
   //    id: "android-basics-1",
   //    title: "Android Development Basics",
   //    organization: "Coursera",
   //    year: "2024",
   //    description:
   //       "Foundational certification covering Android app fundamentals, UI components, and app lifecycle management.",
   //    icon: "android",
   //    image: "",
   //    duration: "4 Weeks",
   //    skills: ["Android", "Kotlin"],
   //    credentialId: "",
   //    featured: false,
   // },

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
