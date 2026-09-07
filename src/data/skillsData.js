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
      proficiency: 65,
      description:
         "Building native Android apps using core SDK components, platform APIs, and application configuration.",
      knowledge: [
         "Activities & lifecycle",
         "Intents & navigation",
         "Manifest & permissions",
         "Resources & configuration",
      ],
      documentation: {
         label: "View Documentation",
         url: "https://app.notion.com/p/Android-SDK-3d27fb020b3d80a3a119c79e7a8487dd?source=copy_link",
      },
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
      id: "jetpack-compose",
      name: "Jetpack Compose",
      icon: "jetpackcompose",
      category: "Android",
      proficiency: 55,
      description:
         "Building modern Android interfaces with Compose's declarative and component-driven UI approach.",
      knowledge: [
         "Composable functions",
         "Layouts & modifiers",
         "Basic state & recomposition",
         "LazyColumn & LazyRow",
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
         {
            id: "cookbook",
            name: "CookBook",
            icon: "chef",
            link: "#cookbook",
         },
      ],
   },
   {
      id: "activities-lifecycle",
      name: "Activities & Lifecycle",
      icon: "layers",
      category: "Android",
      proficiency: 68,
      description:
         "Understanding Android activity lifecycles to build predictable screens and handle common app state changes.",
      knowledge: [
         "Activity lifecycle callbacks",
         "Activity states & transitions",
         "Configuration changes",
         "Basic state restoration",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "intents",
      name: "Intents",
      icon: "send",
      category: "Android",
      proficiency: 68,
      description:
         "Using Android intents to navigate between screens, pass data, and interact with platform components.",
      knowledge: [
         "Explicit intents",
         "Implicit intents",
         "Intent extras & bundles",
         "Activity results",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "navigation",
      name: "Navigation",
      icon: "compass",
      category: "Android",
      proficiency: 72,
      description:
         "Implementing reliable in-app navigation with structured screen flows, back stack handling, and navigation patterns.",
      knowledge: [
         "Navigation graph",
         "Screen-to-screen navigation",
         "Back stack management",
         "Bottom navigation integration",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "coroutines",
      name: "Coroutines",
      icon: "refresh",
      category: "Android",
      proficiency: 85,
      description:
         "Using Kotlin Coroutines to perform asynchronous work without blocking the Android main thread.",
      knowledge: [
         "Suspend functions",
         "Coroutine scopes",
         "Dispatchers",
         "Basic structured concurrency",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "flow",
      name: "Flow",
      icon: "waves",
      category: "Android",
      proficiency: 82,
      description:
         "Working with reactive data streams to manage asynchronous state and events across Android application layers.",
      knowledge: [
         "StateFlow & SharedFlow",
         "Flow operators",
         "Collecting in Compose",
         "Combining & transforming flows",
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
         "Designing consistent Android interfaces using Material 3 components, theming, typography, and modern UI patterns.",
      knowledge: [
         "Material components",
         "Theming & color schemes",
         "Typography",
         "Dynamic color",
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
      proficiency: 92,
      description:
         "Designing maintainable Android applications with clear separation of UI, state, and business logic using MVVM.",
      knowledge: [
         "ViewModel & UI state",
         "StateFlow & reactive state",
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
         "Managing screen-level UI state and logic with lifecycle-aware ViewModels for maintainable Android applications.",
      knowledge: [
         "Lifecycle awareness",
         "UI state management",
         "StateFlow",
         "SavedStateHandle",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [
         {
            id: "nodebook",
            name: "NodeBook",
            icon: "notebook",
            link: "#nodebook",
         },
         {
            id: "cookbook",
            name: "CookBook",
            icon: "chef",
            link: "#cookbook",
         },
      ],
   },
   {
      id: "state-management",
      name: "State Management",
      icon: "shuffle",
      category: "Architecture",
      proficiency: 78,
      description:
         "Managing predictable UI state and state-driven interactions across Android application layers.",
      knowledge: [
         "Single source of truth",
         "Unidirectional data flow",
         "StateFlow & Compose State",
         "Side-effect handling",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [
         {
            id: "nodebook",
            name: "NodeBook",
            icon: "notebook",
            link: "#nodebook",
         },
         {
            id: "cookbook",
            name: "CookBook",
            icon: "chef",
            link: "#cookbook",
         },
      ],
   },
   {
      id: "state-hoisting",
      name: "State Hoisting",
      icon: "arrowup",
      category: "Architecture",
      proficiency: 75,
      description:
         "Designing reusable Compose components by lifting state to the appropriate owner and exposing clear state and event contracts.",
      knowledge: [
         "Stateless composables",
         "State & event callbacks",
         "Single source of truth",
         "State ownership & reusability",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [
         {
            id: "nodebook",
            name: "NodeBook",
            icon: "notebook",
            link: "#nodebook",
         },
         {
            id: "cookbook",
            name: "CookBook",
            icon: "chef",
            link: "#cookbook",
         },
      ],
   },
   {
      id: "dependency-injection",
      name: "Dependency Injection",
      icon: "plugzap",
      category: "Architecture",
      proficiency: 75,
      description:
         "Structuring Android applications by providing dependencies externally for cleaner, modular, and testable code.",
      knowledge: [
         "Constructor injection",
         "Dependency scopes & lifecycles",
         "Modules & providers",
         "Testability benefits",
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
         "Implementing dependency injection in Android applications using Hilt for cleaner and more maintainable architecture.",
      knowledge: [
         "Hilt modules",
         "Constructor & field injection",
         "Scopes & component lifecycles",
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
      proficiency: 92,
      description:
         "Designing a clean data layer that coordinates data sources and exposes consistent data access to the application.",
      knowledge: [
         "Single source of truth",
         "Local & remote data sources",
         "Caching & synchronization",
         "Testable data layer",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [
         {
            id: "nodebook",
            name: "NodeBook",
            icon: "notebook",
            link: "#nodebook",
         },
         {
            id: "cookbook",
            name: "CookBook",
            icon: "chef",
            link: "#cookbook",
         },
      ],
   },

   // ================= DATA =================
   {
      id: "room",
      name: "Room",
      icon: "database",
      category: "Data",
      proficiency: 73,
      description:
         "Persisting structured application data locally with Room while working with entities, DAOs, queries, and reactive data.",
      knowledge: [
         "Entities & DAOs",
         "Room queries",
         "Database relationships",
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
      proficiency: 82,
      description:
         "Working with relational data in SQLite through schema design, efficient queries, indexing, and transaction management.",
      knowledge: [
         "Schema design",
         "SQL queries & joins",
         "Indexing & query optimization",
         "Transactions",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   /*
   {
      id: "firebase",
      name: "Firebase",
      icon: "firebase",
      category: "Data",
      proficiency: 55,
      description:
         "Using Firebase services to add backend capabilities such as authentication and cloud data storage to Android applications.",
      knowledge: [
         "Firebase Authentication",
         "Cloud Firestore",
         "Cloud Storage",
         "Basic Firebase integration",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   */

   /*
   {
      id: "firestore",
      name: "Firestore",
      icon: "firestore",
      category: "Data",
      proficiency: 55,
      description:
         "Working with Firestore to store, query, and synchronize application data using a cloud-based NoSQL document model.",
      knowledge: [
         "Collections & documents",
         "Basic queries",
         "Document operations",
         "Realtime listeners",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   */

   // ================= LANGUAGE =================

   {
      id: "kotlin",
      name: "Kotlin",
      icon: "kotlin",
      category: "Language",
      proficiency: 95,
      description:
         "Writing production-ready Kotlin for Android with strong command of modern language features, object-oriented design, and asynchronous programming.",
      knowledge: [
         "Null safety & type system",
         "OOP & advanced classes",
         "Collections & higher-order functions",
         "Extension functions",
         "Coroutines",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [
         {
            id: "nodebook",
            name: "NodeBook",
            icon: "notebook",
            link: "#nodebook",
         },
         {
            id: "cookbook",
            name: "CookBook",
            icon: "chef",
            link: "#cookbook",
         },
      ],
   },
   {
      id: "python",
      name: "Python",
      icon: "python",
      category: "Language",
      proficiency: 82,
      description:
         "Writing practical Python for scripting, automation, data processing, and AI/ML experimentation.",
      knowledge: [
         "Data structures & algorithms",
         "Object-oriented programming",
         "NumPy & Pandas",
         "Scripting & automation",
         "Basic ML workflows",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   /*
   {
      id: "cpp",
      name: "C++",
      icon: "cplusplus",
      category: "Language",
      proficiency: 82,
      description:
         "Writing efficient C++ for data structures, algorithms, problem solving, and performance-oriented programming.",
      knowledge: [
         "STL & standard containers",
         "Pointers & memory management",
         "OOP",
         "Algorithms & complexity",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   */

   /*
   {
      id: "c",
      name: "C",
      icon: "clang",
      category: "Language",
      proficiency: 82,
      description:
         "Working with C to understand low-level programming, memory management, and core systems concepts.",
      knowledge: [
         "Pointers & memory",
         "Structs & data types",
         "Dynamic memory allocation",
         "Compilation & linking",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   */

   {
      id: "sql",
      name: "SQL",
      icon: "database",
      category: "Language",
      proficiency: 82,
      description:
         "Writing efficient SQL to query, analyze, and manage relational data across structured databases.",
      knowledge: [
         "Joins & subqueries",
         "Aggregations & grouping",
         "Schema design & relationships",
         "Indexes & query optimization",
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
      proficiency: 55,
      description:
         "Consuming REST APIs in Android applications to fetch, send, and manage data over HTTP.",
      knowledge: [
         "HTTP methods",
         "Request & response handling",
         "Status codes",
         "JSON data exchange",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },

   /*
   {
      id: "retrofit",
      name: "Retrofit",
      icon: "network",
      category: "Networking",
      proficiency: 55,
      description:
         "Using Retrofit in Android to connect applications with REST APIs and handle network responses.",
      knowledge: [
         "API service interfaces",
         "HTTP requests & responses",
         "JSON converters",
         "Basic error handling",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   */

   {
      id: "json",
      name: "JSON",
      icon: "braces",
      category: "Networking",
      proficiency: 55,
      description:
         "Working with JSON data to exchange and map structured information between Android applications and APIs.",
      knowledge: [
         "JSON objects & arrays",
         "Nested data structures",
         "Serialization & deserialization",
         "Data model mapping",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },

   /*
   {
      id: "http",
      name: "HTTP",
      icon: "globe",
      category: "Networking",
      proficiency: 55,
      description:
         "Understanding the HTTP protocol used for communication between Android applications and web APIs.",
      knowledge: [
         "Request/response cycle",
         "HTTP methods",
         "Headers & status codes",
         "Caching basics",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   */

   /*
   {
      id: "okhttp",
      name: "OkHttp",
      icon: "plug",
      category: "Networking",
      proficiency: 50,
      description:
         "Using OkHttp as an HTTP client for network communication in Android applications.",
      knowledge: [
         "Basic HTTP requests",
         "Interceptors",
         "Request & response handling",
         "Basic logging",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   */

   // ================= TESTING =================

   {
      id: "junit",
      name: "JUnit",
      icon: "junit",
      category: "Testing",
      proficiency: 55,
      description:
         "Writing unit tests in Kotlin to verify application logic and expected behavior.",
      knowledge: [
         "Test lifecycle",
         "Assertions",
         "Test cases",
         "Basic test organization",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },

   /*
   {
      id: "androidx-test",
      name: "AndroidX Test",
      icon: "testtube",
      category: "Testing",
      proficiency: 55,
      description:
         "Using AndroidX testing libraries to write and run tests for Android application components.",
      knowledge: [
         "Local & instrumented tests",
         "Test rules",
         "Test runners",
         "Context-aware testing",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   */

   /*
   {
      id: "espresso",
      name: "Espresso",
      icon: "coffee",
      category: "Testing",
      proficiency: 45,
      description:
         "Writing basic Android UI tests to verify user interactions and screen behavior.",
      knowledge: [
         "View matchers",
         "View actions",
         "UI assertions",
         "Basic test synchronization",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   */

   /*
   {
      id: "compose-ui-testing",
      name: "Compose UI Testing",
      icon: "testtube2",
      category: "Testing",
      proficiency: 45,
      description:
         "Writing basic UI tests to verify Jetpack Compose interactions and expected screen behavior.",
      knowledge: [
         "Compose test rules",
         "Semantic tree & matchers",
         "UI interactions",
         "Basic state assertions",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   */

   // ================= TOOLS =================

   {
      id: "android-studio",
      name: "Android Studio",
      icon: "androidstudio",
      category: "Tools",
      proficiency: 95,
      description:
         "Using Android Studio to build, debug, profile, and manage Android applications efficiently.",
      knowledge: [
         "Project & module configuration",
         "Debugging & Logcat",
         "Gradle & build configuration",
         "Profiler & performance tools",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   {
      id: "git",
      name: "Git",
      icon: "git",
      category: "Tools",
      proficiency: 90,
      description:
         "Using Git to manage code changes, collaborate on projects, and maintain a reliable development history.",
      knowledge: [
         "Branching & merging",
         "Rebasing",
         "Conflict resolution",
         "Commit & history management",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [
         {
            id: "nodebook",
            name: "NodeBook",
            icon: "notebook",
            link: "#nodebook",
         },
         {
            id: "cookbook",
            name: "CookBook",
            icon: "chef",
            link: "#cookbook",
         },
      ],
   },
   {
      id: "github",
      name: "GitHub",
      icon: "github",
      category: "Tools",
      proficiency: 90,
      description:
         "Using GitHub to host projects, collaborate with others, manage code changes, and maintain development workflows.",
      knowledge: [
         "Repositories & branching",
         "Pull requests",
         "Issues & project management",
         "Code review workflow",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [
         {
            id: "nodebook",
            name: "NodeBook",
            icon: "notebook",
            link: "#nodebook",
         },
         {
            id: "cookbook",
            name: "CookBook",
            icon: "chef",
            link: "#cookbook",
         },
      ],
   },

   /*
   {
      id: "gradle",
      name: "Gradle",
      icon: "gradle",
      category: "Tools",
      proficiency: 65,
      description:
         "Managing Android project builds, dependencies, and configurations using Gradle.",
      knowledge: [
         "Dependencies & repositories",
         "Gradle build scripts",
         "Build variants",
         "Basic build configuration",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   */

   /*
   {
      id: "adb",
      name: "ADB",
      icon: "terminal",
      category: "Tools",
      proficiency: 55,
      description:
         "Using ADB to communicate with Android devices and emulators for development and debugging.",
      knowledge: [
         "Device & emulator commands",
         "App install & uninstall",
         "Log inspection",
         "Basic shell commands",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   */


   {
      id: "android-emulator",
      name: "Android Emulator",
      icon: "smartphone",
      category: "Tools",
      proficiency: 90,
      description:
         "Using Android Emulator to develop, test, and debug apps across different Android devices and API levels.",
      knowledge: [
         "AVD configuration",
         "API level & device testing",
         "App debugging",
         "Device configuration & controls",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },

   /*
   {
      id: "github-actions",
      name: "GitHub Actions",
      icon: "githubactions",
      category: "Tools",
      proficiency: 65,
      description:
         "Automating build, test, and development workflows with GitHub Actions.",
      knowledge: [
         "Workflow configuration",
         "Build automation",
         "Basic CI pipelines",
         "Secrets & environment variables",
      ],
      documentation: { label: "View Documentation", url: "" },
      projects: [],
   },
   */
  
];

// ================= UTILS =================

export function getProficiencyInfo(value) {
   if (value >= 90) return { label: "Proficient", color: "#c084fc", dot: "🟣" };
   if (value >= 75)
      return { label: "Intermediate", color: "#38bdf8", dot: "🔵" };
   if (value >= 50) return { label: "Foundation", color: "#2dd4bf", dot: "🟢" };
   return { label: "Exploring", color: "#9ca3af", dot: "⚪" };
}
