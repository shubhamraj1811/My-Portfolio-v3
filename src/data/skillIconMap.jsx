// ================ ICONS =================
import {
    SiAndroid, SiAndroidstudio, SiJetpackcompose, SiKotlin,
    SiCplusplus, SiPython, SiSqlite, SiFirebase,
    SiGit, SiGithub, SiGithubactions, SiGradle, SiJunit5,
} from 'react-icons/si'
import {
    Layers, Compass, RefreshCw, Waves, Boxes, Palette,
    Syringe, Shuffle, Database, Send, Component, ArrowUp,
    PlugZap, Archive, Server, Network, Braces, Globe, Plug,
    TestTube, TestTube2, Coffee, Terminal, Smartphone,
    NotebookText, ChefHat, FileCode, Flame,
} from 'lucide-react'


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
}

export function SkillIcon({ iconKey, size = 24 }) {
    const icon = skillIconMap[iconKey]
    if (!icon) return null
    return <span style={{ fontSize: size, display: 'inline-flex' }}>{icon}</span>
}