// ===== IMPORT PROJECT IMAGES =====
import nodebook1 from "../assets/Projects/1.png";
import nodebook2 from "../assets/Projects/2.png";
import nodebook3 from "../assets/Projects/3.png";

export const PROJECTS = [
   // ===== PROJECT 01 - NODEBOOK =====
   {
      id: "nodebook",
      title: "NodeBook — Notes App",
      tagline:
         "A modern Android notes app built for fast capture, smart organization and effortless note management.",
      category: "Android",

      // === IMAGES ===
      images: [
         { src: nodebook1, alt: "NodeBook — all notes screen" },
         { src: nodebook2, alt: "NodeBook — note editor screen" },
         { src: nodebook3, alt: "NodeBook — search screen" },
      ],

      // ==== Key Features ====
      features: [
         { icon: "filetext", text: "Create & organize notes" },
         { icon: "cloudoff", text: "Reliable offline persistence" },
         { icon: "search", text: "Fast search & filtering" },
         { icon: "layoutgrid", text: "Responsive Jetpack Compose UI" },
         { icon: "sparkles", text: "Clean, intuitive interface" },
         { icon: "sun", text: "Seamless light & dark mode" },
      ],

      // ==== Architecture ====
      architecture: {
         flow: [
            "Jetpack Compose UI",
            "ViewModel",
            "Repository",
            "Room Database",
         ],
         technologies: ["Jetpack Compose", "MVVM", "Room", "Kotlin Coroutines"],
      },

      metrics: [
         "5+ core features",
         "Offline-first storage",
         "MVVM architecture",
         "Jetpack Compose UI",
      ],

      technologies: ["Kotlin", "Jetpack Compose", "Room", "MVVM", "Coroutines"],
      githubUrl: "https://github.com/shubhamraj1811/NodeBook",
      liveUrl: "",
      apkUrl: "",
      metadata: {
         role: "Android Developer",
         type: "Personal Project",
         duration: "2 Months",
         status: "Completed",
         platform: "Android",
      },
   },

   // ===== PROJECT 02 - COOKBOOK =====

   // {
   //    id: "cookbook",
   //    title: "CookBook — Recipe Finder App",
   //    tagline:
   //       "A recipe discovery app that helps users find, save, and follow recipes with ease.",
   //    category: "Android",
   //    images: [
   //       { src: "", alt: "CookBook — home screen" },
   //       { src: "", alt: "CookBook — recipe detail screen" },
   //    ],
   //    features: [
   //       { icon: "search", text: "Recipe search & discovery" },
   //       { icon: "bookmark", text: "Save favorite recipes" },
   //       { icon: "listchecks", text: "Step-by-step instructions" },
   //       { icon: "layoutgrid", text: "Responsive Compose UI" },
   //    ],
   //    architecture: {
   //       flow: [
   //          "UI (Compose)",
   //          "ViewModel",
   //          "Repository",
   //          "Remote API / Room Cache",
   //       ],
   //       technologies: ["Jetpack Compose", "MVVM", "Retrofit", "Room"],
   //    },
   //    metrics: [],
   //    technologies: ["Kotlin", "Jetpack Compose", "Retrofit", "Room", "MVVM"],
   //    githubUrl: "",
   //    liveUrl: "",
   //    apkUrl: "",
   //    metadata: {
   //       role: "Android Developer",
   //       type: "Personal Project",
   //       duration: "1.5 Months",
   //       status: "Completed",
   //       platform: "Android",
   //    },
   // },
];
