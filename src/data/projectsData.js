export const PROJECTS = [
   // ===== PROJECT 01 - NODEBOOK =====
   {
      id: "nodebook",
      title: "NodeBook — Notes App",
      tagline:
         "A modern Android notes application focused on fast, organized and offline-first note taking.",
      category: "Android",

      // === IMAGES ===
      images: [
         { src: "", alt: "NodeBook — all notes screen" },
         { src: "", alt: "NodeBook — note editor screen" },
         { src: "", alt: "NodeBook — search screen" },
         { src: "", alt: "NodeBook — search screen" },
         { src: "", alt: "NodeBook — search screen" },
         { src: "", alt: "NodeBook — search screen" },
      ],
      features: [
         { icon: "filetext", text: "Create & organize notes" },
         { icon: "cloudoff", text: "Offline persistence" },
         { icon: "search", text: "Search & filtering" },
         { icon: "layoutgrid", text: "Responsive Compose UI" },
         { icon: "sparkles", text: "Clean & minimal UI" },
         { icon: "sun", text: "Light & dark mode" },
      ],
      architecture: {
         flow: ["UI (Compose)", "ViewModel", "Repository", "Room Database"],
         technologies: ["Jetpack Compose", "MVVM", "Room", "Coroutines"],
      },
      metrics: [
         "15+ screens",
         "5 major features",
         "Offline-first",
         "Android application",
      ],
      technologies: ["Kotlin", "Jetpack Compose", "Room", "MVVM", "Coroutines"],
      githubUrl: "https://github.com/abcd",
      liveUrl: "dfsdfs",
      apkUrl: "czxcxz",
      metadata: {
         role: "Android Developer",
         type: "Personal Project",
         duration: "2 Months",
         status: "Completed",
         platform: "Android",
      },
   },

   // ===== PROJECT 02 - COOKBOOK =====
   {
      id: "cookbook",
      title: "CookBook — Recipe Finder App",
      tagline:
         "A recipe discovery app that helps users find, save, and follow recipes with ease.",
      category: "Android",
      images: [
         { src: "", alt: "CookBook — home screen" },
         { src: "", alt: "CookBook — recipe detail screen" },
      ],
      features: [
         { icon: "search", text: "Recipe search & discovery" },
         { icon: "bookmark", text: "Save favorite recipes" },
         { icon: "listchecks", text: "Step-by-step instructions" },
         { icon: "layoutgrid", text: "Responsive Compose UI" },
      ],
      architecture: {
         flow: [
            "UI (Compose)",
            "ViewModel",
            "Repository",
            "Remote API / Room Cache",
         ],
         technologies: ["Jetpack Compose", "MVVM", "Retrofit", "Room"],
      },
      metrics: [],
      technologies: ["Kotlin", "Jetpack Compose", "Retrofit", "Room", "MVVM"],
      githubUrl: "",
      liveUrl: "",
      apkUrl: "",
      metadata: {
         role: "Android Developer",
         type: "Personal Project",
         duration: "1.5 Months",
         status: "Completed",
         platform: "Android",
      },
   },
];