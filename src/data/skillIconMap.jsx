// ================ ICONS =================
import {
   SiAndroid,
   SiAndroidstudio,
   SiJetpackcompose,
   SiKotlin,
   SiCplusplus,
   SiPython,
   SiSqlite,
   SiFirebase,
   SiGit,
   SiGithub,
   SiGithubactions,
   SiGradle,
   SiJunit5,
} from "react-icons/si";
import {
   Layers,
   Compass,
   RefreshCw,
   Waves,
   Boxes,
   Palette,
   Syringe,
   Shuffle,
   Database,
   Send,
   Component,
   ArrowUp,
   PlugZap,
   Archive,
   Server,
   Network,
   Braces,
   Globe,
   Plug,
   TestTube,
   TestTube2,
   Coffee,
   Terminal,
   Smartphone,
   NotebookText,
   ChefHat,
   FileCode,
   Flame,
} from "lucide-react";

import { GraduationCap, Trophy, Code, Rocket } from "lucide-react";

// ========== IMPORT FOR PROJECT ICONS ==========
import {
   FileText,
   CloudOff,
   Search,
   LayoutGrid,
   Sparkles,
   Sun,
   Bookmark,
   ListChecks,
   Play,
   ChevronLeft,
   ChevronRight,
   X,
   User,
   ClipboardList,
   Clock,
   CheckCircle2,
   Smartphone as SmartphoneIcon,
} from "lucide-react";
// Bug Fix
import { SiGithub as SiGithubBrand } from "react-icons/si";

// ================ SKILL ICON MAP =================
export const skillIconMap = {
   // === ANDROID ===
   android: <SiAndroid className="text-green-400" />,
   androidstudio: <SiAndroidstudio className="text-sky-400" />,
   jetpackcompose: <SiJetpackcompose className="text-teal-400" />,
   layers: <Layers className="text-pink-400" />,
   send: <Send className="text-teal-400" />,
   compass: <Compass className="text-teal-400" />,
   refresh: <RefreshCw className="text-purple-400" />,
   waves: <Waves className="text-sky-400" />,
   material3: <Palette className="text-pink-400" />,

   // === ARCHITECTURE ===
   boxes: <Boxes className="text-pink-400" />,
   component: <Component className="text-sky-400" />,
   shuffle: <Shuffle className="text-purple-400" />,
   arrowup: <ArrowUp className="text-teal-400" />,
   plugzap: <PlugZap className="text-purple-400" />,
   syringe: <Syringe className="text-teal-400" />,
   archive: <Archive className="text-pink-400" />,

   // === DATA ===
   database: <Database className="text-blue-400" />,
   sqlite: <SiSqlite className="text-blue-300" />,
   firebase: <SiFirebase className="text-amber-400" />,
   firestore: <Flame className="text-orange-400" />,

   // === LANGUAGES ===
   kotlin: <SiKotlin className="text-purple-400" />,
   python: <SiPython className="text-yellow-400" />,
   cplusplus: <SiCplusplus className="text-blue-400" />,
   clang: <FileCode className="text-sky-300" />,

   // === NETWORKING ===
   server: <Server className="text-teal-400" />,
   network: <Network className="text-purple-400" />,
   braces: <Braces className="text-pink-400" />,
   globe: <Globe className="text-sky-400" />,
   plug: <Plug className="text-purple-400" />,

   // === TESTING ===
   junit: <SiJunit5 className="text-green-400" />,
   testtube: <TestTube className="text-pink-400" />,
   coffee: <Coffee className="text-amber-400" />,
   testtube2: <TestTube2 className="text-teal-400" />,

   // === TOOLS ===
   git: <SiGit className="text-orange-500" />,
   github: <SiGithub className="text-theme-primary" />,
   gradle: <SiGradle className="text-sky-400" />,
   terminal: <Terminal className="text-teal-400" />,
   smartphone: <Smartphone className="text-purple-400" />,
   githubactions: <SiGithubactions className="text-sky-400" />,

   // === PROJECTS ===
   notebook: <NotebookText className="text-sky-400" />,
   chef: <ChefHat className="text-pink-400" />,
};

export function SkillIcon({ iconKey, size = 24 }) {
   const icon = skillIconMap[iconKey];
   if (!icon) return null;
   return (
      <span style={{ fontSize: size, display: "inline-flex" }}>{icon}</span>
   );
}

// ================ CATEGORY ICON MAP =================
export const categoryIconMap = {
   graduationcap: <GraduationCap size={18} />,
   trophy: <Trophy size={18} />,
   code: <Code size={18} />,
   rocket: <Rocket size={18} />,
};

// ================ PROJECT ICON MAP =================
export const projectIconMap = {
   filetext: <FileText size={16} />,
   cloudoff: <CloudOff size={16} />,
   search: <Search size={16} />,
   layoutgrid: <LayoutGrid size={16} />,
   sparkles: <Sparkles size={16} />,
   sun: <Sun size={16} />,
   bookmark: <Bookmark size={16} />,
   listchecks: <ListChecks size={16} />,
};

export const uiIconMap = {
   github: <SiGithubBrand size={18} />,
   play: <Play size={16} />,
   chevronleft: <ChevronLeft size={20} />,
   chevronright: <ChevronRight size={20} />,
   x: <X size={20} />,
   role: <User size={18} />,
   type: <ClipboardList size={18} />,
   duration: <Clock size={18} />,
   status: <CheckCircle2 size={18} />,
   platform: <SmartphoneIcon size={18} />,
};

// Maps a technology's display name (as used in projectsData.js) to an existing icon key above.
// Falls back gracefully — if a name isn't listed, the chip just renders without an icon.
export const TECH_ICON_KEY = {
   Kotlin: "kotlin",
   "Jetpack Compose": "jetpackcompose",
   Room: "database",
   MVVM: "boxes",
   Coroutines: "refresh",
   Retrofit: "network",
   Python: "python",
   "C++": "cplusplus",
   Firebase: "firebase",
   Git: "git",
   GitHub: "github",
};
