export const CATEGORIES = [
   "All",
   "Android",
   "Architecture",
   "Data",
   "Language",
   "Networking",
   "Testing",
   "Tools",
];

export const SKILLS = [
   // ================= ANDROID =================
   {
      id: "android-sdk",
      name: "Android SDK",
      icon: "android",
      category: "Android",
      proficiency: 85,
      description:
         "Core Android development toolkit used to build, debug and ship native apps.",
      knowledge: [
         "App lifecycle",
         "Manifest & permissions",
         "Background services",
         "UI toolkit basics",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [
         {
            id: "nodebook",
            name: "NodeBook",
            icon: "notebook",
            link: "#nodebook",
         }
      ],
   },
   {
      id: "jetpack-compose",
      name: "Jetpack Compose",
      icon: "jetpackcompose",
      category: "Android",
      proficiency: 80,
      description:
         "Modern declarative UI toolkit used to build native Android UI.",
      knowledge: [
         "Composable functions",
         "State management",
         "LazyColumn",
         "Material 3",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [
         {
            id: "nodebook",
            name: "NodeBook",
            icon: "notebook",
            link: "#nodebook",
         },
         { id: "cookbook", name: "CookBook", icon: "chef", link: "#cookbook" },
      ],
   },
   {
      id: "activities-lifecycle",
      name: "Activities & Lifecycle",
      icon: "layers",
      category: "Android",
      proficiency: 82,
      description:
         "Managing Android screen components and their lifecycle states correctly.",
      knowledge: [
         "Activity lifecycle callbacks",
         "Configuration changes",
         "Fragment lifecycle",
         "Process death handling",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "intents",
      name: "Intents",
      icon: "send",
      category: "Android",
      proficiency: 78,
      description:
         "Messaging objects used to request actions or communicate between app components.",
      knowledge: [
         "Explicit intents",
         "Implicit intents",
         "Intent extras & bundles",
         "Result launchers",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "navigation",
      name: "Navigation",
      icon: "compass",
      category: "Android",
      proficiency: 76,
      description:
         "Handling in-app screen navigation and back stack management.",
      knowledge: [
         "Navigation graph",
         "Deep linking",
         "Safe args",
         "Bottom nav integration",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "coroutines",
      name: "Coroutines",
      icon: "refresh",
      category: "Android",
      proficiency: 75,
      description:
         "Kotlin's lightweight approach to asynchronous, non-blocking programming.",
      knowledge: [
         "Suspend functions",
         "Dispatchers",
         "Structured concurrency",
         "Exception handling",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "flow",
      name: "Flow",
      icon: "waves",
      category: "Android",
      proficiency: 72,
      description:
         "Reactive, asynchronous data streams built on top of coroutines.",
      knowledge: [
         "StateFlow",
         "SharedFlow",
         "Flow operators",
         "Collecting in Compose",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "material3",
      name: "Material 3",
      icon: "material3",
      category: "Android",
      proficiency: 78,
      description:
         "Google's latest design system used to build consistent, modern UI.",
      knowledge: [
         "Dynamic color",
         "Theming",
         "Typography scale",
         "Component library",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },

   // ================= ARCHITECTURE =================
   {
      id: "mvvm",
      name: "MVVM",
      icon: "boxes",
      category: "Architecture",
      proficiency: 82,
      description:
         "Architecture pattern used to structure Android apps with clear separation of concerns.",
      knowledge: [
         "ViewModel",
         "LiveData/StateFlow",
         "Repository pattern",
         "Unidirectional data flow",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [
         {
            id: "nodebook",
            name: "NodeBook",
            icon: "notebook",
            link: "#nodebook",
         },
      ],
   },
   {
      id: "viewmodel",
      name: "ViewModel",
      icon: "component",
      category: "Architecture",
      proficiency: 80,
      description:
         "Lifecycle-aware component that holds and manages UI-related data.",
      knowledge: [
         "Lifecycle awareness",
         "SavedStateHandle",
         "Surviving configuration changes",
         "Shared ViewModels",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "state-management",
      name: "State Management",
      icon: "shuffle",
      category: "Architecture",
      proficiency: 78,
      description: "Managing UI state predictably across app components.",
      knowledge: [
         "Single source of truth",
         "Unidirectional data flow",
         "Derived state",
         "Side-effect handling",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "state-hoisting",
      name: "State Hoisting",
      icon: "arrowup",
      category: "Architecture",
      proficiency: 74,
      description:
         "Compose pattern of moving state up to make composables stateless and reusable.",
      knowledge: [
         "Stateless composables",
         "State + event callbacks",
         "Single source of truth",
         "Reusability",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "dependency-injection",
      name: "Dependency Injection",
      icon: "plugzap",
      category: "Architecture",
      proficiency: 70,
      description:
         "Design pattern for supplying dependencies rather than creating them internally.",
      knowledge: [
         "Constructor injection",
         "Scopes & lifecycles",
         "Testability benefits",
         "Modules",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "hilt",
      name: "Hilt",
      icon: "syringe",
      category: "Architecture",
      proficiency: 70,
      description:
         "Dependency injection framework built for Android on top of Dagger.",
      knowledge: [
         "Modules",
         "Scopes",
         "Injection points",
         "ViewModel injection",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "repository-pattern",
      name: "Repository Pattern",
      icon: "archive",
      category: "Architecture",
      proficiency: 76,
      description:
         "Abstraction layer that centralizes data access logic from multiple sources.",
      knowledge: [
         "Single source of truth",
         "Local + remote data merging",
         "Caching strategy",
         "Testable data layer",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },

   // ================= DATA =================
   {
      id: "room",
      name: "Room",
      icon: "database",
      category: "Data",
      proficiency: 80,
      description: "Android's persistence library built on top of SQLite.",
      knowledge: [
         "Entities & DAOs",
         "Migrations",
         "Relations",
         "Flow integration",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [
         {
            id: "nodebook",
            name: "NodeBook",
            icon: "notebook",
            link: "#nodebook",
         },
      ],
   },
   {
      id: "sqlite",
      name: "SQLite",
      icon: "sqlite",
      category: "Data",
      proficiency: 72,
      description: "Lightweight embedded relational database engine.",
      knowledge: [
         "Schema design",
         "Queries",
         "Indexing basics",
         "Transactions",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "firebase",
      name: "Firebase",
      icon: "firebase",
      category: "Data",
      proficiency: 68,
      description:
         "Backend-as-a-service platform used for auth, storage, and hosting.",
      knowledge: [
         "Authentication",
         "Cloud Storage",
         "Realtime Database",
         "Analytics",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "firestore",
      name: "Firestore",
      icon: "firestore",
      category: "Data",
      proficiency: 65,
      description: "Firebase's scalable NoSQL document database for app data.",
      knowledge: [
         "Collections & documents",
         "Queries",
         "Security rules",
         "Realtime listeners",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },

   // ================= LANGUAGE =================

   {
      id: "kotlin",
      name: "Kotlin",
      icon: "kotlin",
      category: "Language",
      proficiency: 90,
      description: "Primary language used for Android development.",
      knowledge: [
         "Null safety",
         "Extension functions",
         "Coroutines",
         "Data classes",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [
         {
            id: "nodebook",
            name: "NodeBook",
            icon: "notebook",
            link: "#nodebook",
         },
         { id: "cookbook", name: "CookBook", icon: "chef", link: "#cookbook" },
      ],
   },
   {
      id: "python",
      name: "Python",
      icon: "python",
      category: "Language",
      proficiency: 75,
      description: "Used for scripting, automation, and AI/ML experimentation.",
      knowledge: [
         "Data structures",
         "NumPy/Pandas basics",
         "Scripting",
         "Intro ML workflows",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "cpp",
      name: "C++",
      icon: "cplusplus",
      category: "Language",
      proficiency: 80,
      description:
         "Used primarily for data structures, algorithms, and competitive programming.",
      knowledge: ["STL", "Pointers & memory", "OOP", "Algorithm design"],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "c",
      name: "C",
      icon: "clang",
      category: "Language",
      proficiency: 65,
      description:
         "Foundational systems language studied for low-level programming concepts.",
      knowledge: [
         "Pointers",
         "Memory management",
         "Structs",
         "Compilation process",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "sql",
      name: "SQL",
      icon: "database",
      category: "Language",
      proficiency: 70,
      description: "Querying and managing relational databases.",
      knowledge: [
         "Joins",
         "Aggregations",
         "Schema design",
         "Query optimization",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },

   // ================= NETWORKING =================

   {
      id: "rest-apis",
      name: "REST APIs",
      icon: "server",
      category: "Networking",
      proficiency: 78,
      description: "Designing and consuming RESTful web services in apps.",
      knowledge: [
         "HTTP methods",
         "Status codes",
         "Endpoint design",
         "Auth headers",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "retrofit",
      name: "Retrofit",
      icon: "network",
      category: "Networking",
      proficiency: 75,
      description:
         "Type-safe HTTP client used to consume REST APIs on Android.",
      knowledge: [
         "Interface-based endpoints",
         "Converters (Gson/Moshi)",
         "Interceptors",
         "Error handling",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "json",
      name: "JSON",
      icon: "braces",
      category: "Networking",
      proficiency: 82,
      description: "Lightweight data-interchange format used across APIs.",
      knowledge: [
         "Serialization",
         "Deserialization",
         "Nested structures",
         "Schema mapping",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "http",
      name: "HTTP",
      icon: "globe",
      category: "Networking",
      proficiency: 76,
      description: "Protocol underlying all web/API communication.",
      knowledge: [
         "Request/response cycle",
         "Headers",
         "Status codes",
         "Caching basics",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "okhttp",
      name: "OkHttp",
      icon: "plug",
      category: "Networking",
      proficiency: 68,
      description: "Efficient HTTP client used under the hood by Retrofit.",
      knowledge: ["Interceptors", "Connection pooling", "Caching", "Logging"],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },

   // ================= TESTING =================

   {
      id: "junit",
      name: "JUnit",
      icon: "junit",
      category: "Testing",
      proficiency: 65,
      description: "Standard framework for writing unit tests in Kotlin/Java.",
      knowledge: [
         "Test lifecycle",
         "Assertions",
         "Mocking basics",
         "Test suites",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "androidx-test",
      name: "AndroidX Test",
      icon: "testtube",
      category: "Testing",
      proficiency: 60,
      description:
         "Android's official testing libraries for instrumented and local tests.",
      knowledge: [
         "Instrumented tests",
         "Test rules",
         "Context-aware testing",
         "Test runners",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "espresso",
      name: "Espresso",
      icon: "coffee",
      category: "Testing",
      proficiency: 58,
      description:
         "UI testing framework for automating Android UI interactions.",
      knowledge: [
         "View matchers",
         "View actions",
         "Idling resources",
         "UI assertions",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "compose-ui-testing",
      name: "Compose UI Testing",
      icon: "testtube2",
      category: "Testing",
      proficiency: 55,
      description:
         "Testing framework for verifying Jetpack Compose UI behavior.",
      knowledge: [
         "Semantic tree matchers",
         "Compose test rule",
         "Interaction testing",
         "State assertions",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },

   // ================= TOOLS =================

   {
      id: "android-studio",
      name: "Android Studio",
      icon: "androidstudio",
      category: "Tools",
      proficiency: 90,
      description: "Primary IDE for Android app development and debugging.",
      knowledge: [
         "Layout editor",
         "Logcat & debugging",
         "Gradle build system",
         "Profiler tools",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "git",
      name: "Git",
      icon: "git",
      category: "Tools",
      proficiency: 85,
      description:
         "Version control system for tracking and managing code changes.",
      knowledge: [
         "Branching",
         "Merging & rebasing",
         "Conflict resolution",
         "Commit hygiene",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "github",
      name: "GitHub",
      icon: "github",
      category: "Tools",
      proficiency: 85,
      description: "Hosting and collaboration platform for Git repositories.",
      knowledge: [
         "Pull requests",
         "Issues",
         "Project boards",
         "Code review workflow",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "gradle",
      name: "Gradle",
      icon: "gradle",
      category: "Tools",
      proficiency: 70,
      description:
         "Build automation tool used to compile and package Android apps.",
      knowledge: [
         "Build variants",
         "Dependencies",
         "Gradle scripts",
         "Build performance basics",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "adb",
      name: "ADB",
      icon: "terminal",
      category: "Tools",
      proficiency: 65,
      description:
         "Command-line bridge used to communicate with Android devices/emulators.",
      knowledge: [
         "Device shell access",
         "Log inspection",
         "App install/uninstall",
         "Port forwarding",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "android-emulator",
      name: "Android Emulator",
      icon: "smartphone",
      category: "Tools",
      proficiency: 80,
      description:
         "Virtual device used to test apps across configurations without physical hardware.",
      knowledge: [
         "AVD configuration",
         "API level testing",
         "Performance snapshots",
         "Sensor simulation",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "github-actions",
      name: "GitHub Actions",
      icon: "githubactions",
      category: "Tools",
      proficiency: 60,
      description: "CI/CD automation directly integrated within GitHub.",
      knowledge: [
         "Workflows",
         "Build automation",
         "Basic CI pipelines",
         "Secrets management",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
];

// ================= UTILS =================

export function getProficiencyInfo(value) {
   if (value >= 90) return { label: "Proficient", color: "#c084fc", dot: "🟣" };
   if (value >= 75)
      return { label: "Intermediate", color: "#38bdf8", dot: "🔵" };
   if (value >= 50) return { label: "Foundation", color: "#2dd4bf", dot: "🟢" };
   return { label: "Exploring", color: "#9ca3af", dot: "⚪" };
}
