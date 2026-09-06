export const TIMELINE = [
    // === CLASS 10 ===
   {
      id: "class10",
      category: "Academic",
      title: "Class 10th",
      meta: ["CBSE", "KV School", "2020"],
      details: [{ label: "Percentage", value: "90%" }],
   },
   // === CLASS 12 ===
   {
      id: "class12",
      category: "Academic",
      title: "Class 12th",
      meta: ["BSEB", "COC", "2020 — 2022"],
      details: [{ label: "Percentage", value: "78%" }],
   },
   // === B.TECH ===
   {
      id: "btech",
      category: "Academic",
      title: "B.Tech — Computer Science (AI)",
      meta: ["GEC Lakhisarai", "2023 — 2027"],
      details: [{ label: "CGPA", value: "7.99" }],
      coursework: ["DSA", "DBMS", "OOP", "OS", "CN"],
      semesterBreakdown: [
         { sem: "Sem 1", cgpa: 7.54 },
         { sem: "Sem 2", cgpa: 7.29 },
         { sem: "Sem 3", cgpa: 8.46 },
         { sem: "Sem 4", cgpa: 7.96 },
         { sem: "Sem 5", cgpa: 8.41 },
      ],
   },
   // === HACKATHON ===
   {
      id: "hackathon",
      category: "Journey",
      title: "Google Developer Solutions Hackathon",
      meta: ["Building, collaboration and problem solving"],
      details: [
         { label: "Team", value: "Shubham Raj, Prince Raj, Aman Kumar" },
         { label: "Project", value: "Details coming soon" },
      ],
   },
   // === WEB DEVELOPMENT ===
   {
      id: "webdev",
      category: "Learning",
      title: "Exploring Web Development & React",
      meta: [],
      details: [{ label: "Description", value: "Details coming soon" }],
      techStack: ["React", "JavaScript", "Tailwind CSS"],
   },
   // === ANDROID DEVELOPMENT ===
   {
      id: "android",
      category: "Current Focus",
      title: "Android Development",
      meta: [],
      details: [{ label: "Focus", value: "Building native Android apps" }],
      techStack: ["Kotlin", "Jetpack Compose"],
      current: true,
   },
];

export const ACADEMIC_PROFILE = {
   // === B.TECH ===
   degree: "B.Tech — Computer Science (AI)",
   institution: "GEC Lakhisarai",
   duration: "2023 — 2027",
   cgpa: 7.99,
   coursework: [
      {
         id: "dsa",
         name: "DSA",
         proficiency: 80,
         topics: ["Arrays", "Trees", "Graphs", "Dynamic Programming"],
      },
      {
         id: "dbms",
         name: "DBMS",
         proficiency: 75,
         topics: ["ER Model", "Normalization", "SQL", "Transactions"],
      },
      {
         id: "oop",
         name: "OOP",
         proficiency: 85,
         topics: ["Encapsulation", "Inheritance", "Polymorphism"],
      },
      {
         id: "os",
         name: "OS",
         proficiency: 70,
         topics: ["Processes", "Scheduling", "Memory Management"],
      },
      {
         id: "cn",
         name: "CN",
         proficiency: 65,
         topics: ["OSI Model", "TCP/IP", "Routing"],
      },
   ],
};

export const SEMESTER_MARKS = [
   { sem: "S1", cgpa: 7.54 },
   { sem: "S2", cgpa: 7.29 },
   { sem: "S3", cgpa: 8.46 },
   { sem: "S4", cgpa: 7.96 },
   { sem: "S5", cgpa: 8.41 },
   { sem: "S6", cgpa: null },
   { sem: "S7", cgpa: null },
   { sem: "S8", cgpa: null },
];

// === CATEGORY STYLE ===
export const CATEGORY_STYLE = {
   Academic: { color: "#2dd4bf", icon: "graduationcap" },
   Journey: { color: "#c084fc", icon: "trophy" },
   Learning: { color: "#38bdf8", icon: "code" },
   "Current Focus": { color: "#ec4899", icon: "rocket" },
};