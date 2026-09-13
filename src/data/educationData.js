export const TIMELINE = [
   // === EDUCATION ===

   {
      // === CLASS 10 ===
      id: "class10",
      category: "Academic",
      title: "Class 10th",
      meta: ["CBSE", "N.P.C. School"],
      duration: "2020",
      description:
         "Built a strong academic foundation, graduating with 90% under the CBSE curriculum.",
      details: [{ label: "Percentage", value: "90%" }],
   },

   // === CLASS 12 ===
   {
      id: "class12",
      category: "Academic",
      title: "Class 12th",
      meta: ["BSEB", "College of Commerce, Arts & Science"],
      duration: "2020 — 2022",
      description:
         "Completed higher secondary education with 82%, strengthening the academic foundation for engineering.",
      details: [{ label: "Percentage", value: "82%" }],
   },

   // === B.TECH ===
   {
      id: "btech",
      category: "Academic",
      title: "B.Tech — Computer Science & Engineering (AI)",
      meta: ["Government Engineering College, Lakhisarai"],
      duration: "2023 — 2027",
      description:
         "Pursuing Computer Science with a specialization in Artificial Intelligence, maintaining a 7.99 CGPA while building strong foundations in software engineering and problem solving.",
      details: [{ label: "CGPA", value: "7.99" }],
      coursework: [
         "Data Structures & Algorithms",
         "Database Management Systems",
         "Object-Oriented Programming",
         "Operating Systems",
         "Computer Networks",
         "Machine Learning",
      ],
      semesterBreakdown: [
         { sem: "Sem 1", cgpa: 7.54 },
         { sem: "Sem 2", cgpa: 7.29 },
         { sem: "Sem 3", cgpa: 8.46 },
         { sem: "Sem 4", cgpa: 7.96 },
         { sem: "Sem 5", cgpa: 8.41 },
      ],
   },

   // === HACKATHON ===
   // === GOOGLE DEVELOPER SOLUTIONS HACKATHON ===

   {
      id: "hackathon",
      category: "Journey",
      title: "Google Developer Solutions Hackathon",
      meta: ["Hack2Skill", "Google Developers Groups"],
      duration: "Hackathon",
      description:
         "Built an AI-powered study companion as a team, applying problem-solving and development skills to a real-world challenge.",
      details: [
         {
            label: "Role",
            value: "Team Lead & Developer",
         },
         {
            label: "Project",
            value: "AI-Powered Study Companion",
         },
      ],
   },

   // === NIELIT INTERNSHIP ===

   {
      id: "nielit-internship",
      category: "Journey",
      title: "AI/ML Internship — NIELIT Patna",
      meta: ["NIELIT Patna", "Machine Learning"],
      duration: "June 2025",
      description:
         "Completed a one-month Machine Learning internship, strengthening Python skills and applying ML techniques through guided hands-on projects.",
      details: [
         { label: "Duration", value: "1 Month" },
         { label: "Domain", value: "Machine Learning with Python" },
         { label: "Focus", value: "Python, ML Algorithms & Techniques" },
         {
            label: "Experience",
            value: "Built mini projects under mentor guidance",
         },
      ],
      techStack: ["Python", "NumPy", "Pandas", "Machine Learning"],
   },

   // === ANDROID DEVELOPMENT — CURRENT FOCUS ===
   {
      id: "android",
      category: "Journey",
      title: "Android Development",
      meta: ["Kotlin", "Jetpack Compose"],
      duration: "Present",
      description:
         "Building modern Android applications with Kotlin and Jetpack Compose, while developing practical skills in MVVM, Coroutines, Flow, Room, and Hilt.",
      details: [
         { label: "Focus", value: "Native Android Development" },
         { label: "Architecture", value: "MVVM" },
         {
            label: "Core Stack",
            value: "Kotlin, Jetpack Compose, Coroutines, Flow",
         },
      ],
      techStack: [
         "Kotlin",
         "Jetpack Compose",
         "MVVM",
         "Coroutines",
         "Flow",
         "Room",
         "Hilt",
      ],
      current: true,
   },
];


export const ACADEMIC_PROFILE = {
   // === B.TECH — ACADEMIC SNAPSHOT ===

   degree: "B.Tech — Computer Science & Engineering (AI)",
   institution: "Government Engineering College, Lakhisarai",
   duration: "2023 — 2027",
   cgpa: 7.99,

   coursework: [
      {
         id: "dsa",
         name: "DSA",
         proficiency: 75,
         topics: ["Arrays", "Strings", "Linked Lists", "Trees"],
      },
      {
         id: "dbms",
         name: "DBMS",
         proficiency: 75,
         topics: ["SQL", "ER Model", "Normalization", "Transactions"],
      },
      {
         id: "oop",
         name: "OOP",
         proficiency: 85,
         topics: [
            "Encapsulation",
            "Inheritance",
            "Polymorphism",
            "Abstraction",
         ],
      },
      {
         id: "os",
         name: "OS",
         proficiency: 70,
         topics: [
            "Processes",
            "CPU Scheduling",
            "Memory Management",
            "File Systems",
         ],
      },
      {
         id: "cn",
         name: "CN",
         proficiency: 65,
         topics: ["OSI Model", "TCP/IP", "Routing", "Network Protocols"],
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
