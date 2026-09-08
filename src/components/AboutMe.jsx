import profileImage from "../assets/Profile/profile.jpg";

// Highlights of my journey and achievements
const HIGHLIGHTS = [
   "150+ DSA Problems Solved on LeetCode — strengthening interview-ready problem-solving skills",
   "Building a Productivity-Focused Android App with Kotlin and modern Android architecture",
   "AI/ML Intern at NIELIT Patna — gained hands-on experience developing practical ML solutions",
   "Mentored 20+ B.Tech Students in Git & GitHub, helping them build better development workflows",
];

// Beliefs 
const BELIEFS = [
   { num: "01", title: "Learn. Adapt. Grow." },
   { num: "02", title: "Build With Purpose." },
   { num: "03", title: "Think. Solve. Simplify." },
   { num: "04", title: "Consistency Compounds." },
];

const FOCUS_TAGS = [
   "Advanced Android",
   "Kotlin",
   "Jetpack Compose",
   "Android Architecture",
   "CI/CD & Automation",
   "DSA & Problem Solving",
];

function IconBox({ emoji }) {
   return (
      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-linear-to-br from-teal-400/20 via-purple-500/20 to-pink-500/20 border border-theme text-lg">
         {emoji}
      </div>
   );
}

function AboutMe() {
   return (
      <section id="about" className="min-h-screen px-6 lg:px-16 py-24">
         <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
               {/* increase the size of ABOUT ME */}
               <p className="text-teal-400 font-medium tracking-widest text-3xl mb-3">
                  ABOUT ME
               </p>
               <h2 className="text-xl sm:text-2xl font-bold text-theme-primary mb-4">
                  Get To Know Me
               </h2>
            </div>

            {/* Profile + Story */}
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 mb-6">
               {/* Profile card */}
                <div className="project-card rounded-2xl border border-theme bg-glass backdrop-blur-xl p-6 flex flex-col items-center text-center">
                  <div className="flex items-center gap-2 self-start mb-6">
                     <IconBox emoji="👤" />
                     <span className="text-sm font-semibold tracking-wide text-theme-secondary">
                        PROFILE
                     </span>
                  </div>

                  {/* Profile Photo */}
                       <div className="w-40 h-40 rounded-full bg-linear-to-br from-teal-400 via-purple-500 to-pink-500 p-0.75 mb-4">
                     <div className="w-full h-full rounded-full bg-[#0d0d12] flex items-center justify-center text-theme-muted text-xs">
                        <img
                           src={profileImage}
                           alt="Profile"
                           className="w-full h-full rounded-full object-cover"
                        />
                     </div>
                  </div>

                  {/* Name + Role */}
                  <h3 className="text-xl font-bold text-theme-primary">
                     Shubham Raj
                  </h3>
                  <p className="text-theme-muted mb-4">Android Developer</p>

                  <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-theme text-sm text-theme-secondary">
                     <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                     Open To Opportunities
                  </span>
               </div>

               {/* My Story card */}
               <div className="project-card rounded-2xl border border-theme bg-glass backdrop-blur-xl p-6">
                  <div className="flex items-center gap-2 mb-6">
                     <IconBox emoji="📖" />
                     <span className="text-sm font-semibold tracking-wide text-theme-secondary">
                        MY STORY
                     </span>
                  </div>

                  {/* My Story - Text Box */}
                  <div className="space-y-5 text-theme-secondary leading-relaxed">
                     <p>
                        I’m an aspiring{" "}  
                        <span className="text-white font-medium">
                           Android Developer   
                        </span> {" "}
                        focused on building practical, user-centric applications
                        with Kotlin and modern Android technologies. My journey
                        has evolved from learning the fundamentals of software
                        development to building projects, solving problems, and
                        developing the skills required to contribute effectively
                        in a professional engineering team.
                     </p>

                     <div className="space-y-3 pt-2">
                        <p>
                           🔭 Currently building{" "}
                           <strong className="text-white">
                              Android apps with Kotlin
                           </strong>
                        </p>

                        <p>
                           🌱 Deep-diving into{" "}
                           <strong className="text-white">
                              Jetpack Compose, MVVM & Android Architecture
                           </strong>
                        </p>

                        <p>
                           💻 Solved{" "}
                           <strong className="text-white">
                              100+ problems on LeetCode
                           </strong>{" "}
                           and continuously improving my DSA skills
                        </p>

                        <p>
                           🎯 Preparing for{" "}
                           <strong className="text-white">
                              professional software engineering opportunities
                           </strong>{" "}
                        </p>

                     </div>
                  </div>
               </div>
            </div>

            {/* Key Highlights */}
            <div className="project-card rounded-2xl border border-theme bg-glass backdrop-blur-xl p-6 mb-6">
               <div className="flex items-center gap-2 mb-5">
                  <IconBox emoji="⭐" />
                  <span className="text-sm font-semibold tracking-wide text-theme-secondary">
                     KEY HIGHLIGHTS
                  </span>
               </div>
               <div className="grid sm:grid-cols-2 gap-3">
                  {HIGHLIGHTS.map((h) => (
                     <div
                        key={h}
                        className="flex items-center gap-3 text-theme-secondary"
                     >
                        <span className="text-teal-400 font-bold">✓</span>
                        {h}
                     </div>
                  ))}
               </div>
            </div>

            {/* Mission + Vision */}
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
               <div className="project-card rounded-2xl border border-theme bg-glass backdrop-blur-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                     <IconBox emoji="🎯" />
                     <span className="text-sm font-semibold tracking-wide text-theme-secondary">
                        MY MISSION
                     </span>
                  </div>
                  <p className="text-theme-secondary leading-relaxed">
                     Build reliable, user-focused Android experiences that turn real-world problems into simple, useful solutions.
                  </p>
               </div>

               {/* === My Vision === */}
               <div className="project-card rounded-2xl border border-theme bg-glass backdrop-blur-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                     <IconBox emoji="🔮" />
                     <span className="text-sm font-semibold tracking-wide text-theme-secondary">
                        MY VISION
                     </span>
                  </div>
                  <p className="text-theme-secondary leading-relaxed">
                     Grow into a strong software engineer, building products that people genuinely use, trust, and remember.
                  </p>
               </div>
            </div>

            {/* What I Believe */}
            <div className="project-card rounded-2xl border border-theme bg-glass backdrop-blur-xl p-6 mb-6">
               <div className="flex items-center gap-2 mb-5">
                  <IconBox emoji="💡" />
                  <span className="text-sm font-semibold tracking-wide text-theme-secondary">
                     WHAT I BELIEVE
                  </span>
               </div>
               <div className="grid sm:grid-cols-2 gap-4">
                  {BELIEFS.map((b) => (
                     <div key={b.num} className="flex items-center gap-4">
                        <span className="text-2xl font-bold bg-linear-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                           {b.num}
                        </span>
                        <span className="text-theme-secondary font-medium">
                           {b.title}
                        </span>
                     </div>
                  ))}
               </div>
            </div>

            {/* Currently Focused On */}
            <div className="project-card rounded-2xl border border-theme bg-glass backdrop-blur-xl p-6">
               <div className="flex items-center gap-2 mb-5 justify-center">
                  <IconBox emoji="🚀" />
                  <span className="text-sm font-semibold tracking-wide text-theme-secondary">
                     CURRENTLY FOCUSED ON
                  </span>
               </div>
               <div className="flex flex-wrap justify-center gap-3">
                  {FOCUS_TAGS.map((tag) => (
                     <span
                        key={tag}
                        className="px-5 py-2 rounded-full border border-theme text-sm font-medium text-theme-secondary bg-linear-to-r hover:from-teal-400 hover:via-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent transition-all duration-300"
                     >
                        {tag}
                     </span>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}

export default AboutMe;
