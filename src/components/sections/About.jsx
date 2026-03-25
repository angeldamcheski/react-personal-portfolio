export const About = () => {
  const frontendSkills = ["React", "HTML", "TailwindCSS", "SCSS", "Bootstrap"];
  const backendSkills = [
    "Java Spring",
    "Django",
    "Laravel",
    ".NET",
    "Node.js",
    "PostgreSQL",
  ];

  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "SystemiX",
      date: "Feb 2026 – Apr 2026",
      description:
        "Worked on several real-world applicable projects, including a high-performance file manager capable of efficiently handling large numbers of files and folders with smooth navigation, search, and organization features.",
    },
    {
      role: "Frontend Developer Intern",
      company: "GrabIT",
      date: "Jul 2025 – Sep 2025",
      description:
        "Designed and implemented intuitive UI/UX for a property listings web app, ensuring a modern, responsive, and user-friendly experience.",
    },
  ];
  const educationCourses = [
    "Data Structures",
    "Object Oriented Programming",
    "Web Programming",
    "Databases",
    "Backend",
    "Frontend",
    "Data Science",
    "Operating Systems",
    "Networks",
    "Security",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 light:text-stone-800 light:bg-neutral-200"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        {/* About Card */}
        <div className="rounded-xl p-8 border-white/10 border transition-all bg-white/5 duration-300 light:border-black/10">
          <p className="text-gray-300 mb-6 text-justify light:text-stone-800">
            I’m a web developer who loves building cool and useful web apps. I
            work mainly with{" "}
            <code className="px-1 py-0.5 rounded font-mono text-sm bg-stone-800 text-stone-200 light:bg-stone-300 light:text-stone-700">
              Java Spring
            </code>{" "}
            on the back end and{" "}
            <code className="px-1 py-0.5 rounded font-mono text-sm bg-stone-800 text-stone-200 light:bg-stone-300 light:text-stone-700">
              ReactJS
            </code>{" "}
            on the front end, and I’ve built a bunch of projects that I’m really
            proud of. I’m all about writing clean code, learning new things, and
            working with great teams.
          </p>
          <p className="text-gray-300 mb-6 text-justify light:text-stone-800">
            Tech is always changing, and that’s what keeps me excited—I enjoy
            diving into new challenges and growing a little more every day.
            Whether I’m solving a tricky bug or building something from scratch,
            I genuinely enjoy the process. For me, coding is more than a
            job—it’s something I’m passionate about.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Frontend", data: frontendSkills },
              { title: "Backend", data: backendSkills },
            ].map((section, i) => (
              <div
                key={i}
                className="rounded-xl p-6 hover:translate-y-1 transition-all border border-white/10 light:border-black/10"
              >
                <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {section.data.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border border-white/10 bg-white/5 transition-all light:border-black/10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                🏫 Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white light:text-stone-900">
                    B.S in Software Development
                  </h4>
                  <p className="text-blue-500 text-sm">
                    Faculty of Computer Science and Software Engineering
                  </p>
                  <p className="text-gray-400 light:text-gray-600 text-xs mt-1">
                    2021 — 2026
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 light:border-black/5">
                  <p className="text-norml font-medium mb-3 text-gray-300 light:text-stone-700">
                    Relevant Coursework:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {educationCourses.map((course) => (
                      <span
                        key={course}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs hover:bg-blue-500/30 transition"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="p-6 rounded-2xl border bg-white/5 border-white/10 light:border-black/10 transition-all duration-300">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              💼 Work Experience
            </h3>

            {/* Timeline Container */}
            <div className="relative border-l-2 border-blue-500/20 ml-3 space-y-8 light:border-blue-500/30">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 group">
                  {/* DOT*/}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full light:bg-white bg-stone-900 border-1 border-blue-500 light:border-blue-500 group-hover:scale-120 transition-transform duration-300 z-10 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />

                  {/* CONTENT CARD */}
                  <div className="flex flex-col gap-1 p-4 light:hover:bg-white/25 light:border-stone-500/20 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300">
                    {/* Top Row: Role and Date */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                      <h4 className="font-bold text-blue-600">
                        {exp.role}
                        <span className="text-white/80 light:text-gray-800 font-normal">
                          {" "}
                          @ {exp.company}
                        </span>
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                      {exp.date}
                    </span>
                    <p className="text-white/50 text-sm light:text-gray-600 leading-relaxed mt-2">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
