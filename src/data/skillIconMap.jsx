import {
    SiAndroid, SiAndroidstudio, SiJetpackcompose, SiKotlin,
    SiCplusplus, SiPython, SiSqlite, SiFirebase,
    SiGit, SiGithub, SiGithubactions,
} from 'react-icons/si'
import {
    Layers, Compass, RefreshCw, Waves, Boxes,
    Syringe, Shuffle, Database,
} from 'lucide-react'

// each entry returns a styled icon element
export const skillIconMap = {
    android: <SiAndroid className="text-green-400" />,
    androidstudio: <SiAndroidstudio className="text-sky-400" />,
    jetpackcompose: <SiJetpackcompose className="text-teal-400" />,
    kotlin: <SiKotlin className="text-purple-400" />,
    cplusplus: <SiCplusplus className="text-blue-400" />,
    python: <SiPython className="text-yellow-400" />,
    sqlite: <SiSqlite className="text-blue-300" />,
    firebase: <SiFirebase className="text-amber-400" />,
    git: <SiGit className="text-orange-500" />,
    github: <SiGithub className="text-theme-primary" />,
    githubactions: <SiGithubactions className="text-sky-400" />,

    layers: <Layers className="text-pink-400" />,
    compass: <Compass className="text-teal-400" />,
    refresh: <RefreshCw className="text-purple-400" />,
    waves: <Waves className="text-sky-400" />,
    boxes: <Boxes className="text-pink-400" />,
    syringe: <Syringe className="text-teal-400" />,
    shuffle: <Shuffle className="text-purple-400" />,
    database: <Database className="text-blue-400" />,
}

export function SkillIcon({ iconKey, size = 24 }) {
    const icon = skillIconMap[iconKey]
    if (!icon) return null
    return <span style={{ fontSize: size, display: 'inline-flex' }}>{icon}</span>
}