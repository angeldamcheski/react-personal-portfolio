export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">Personal Portfolio</h3>
            <p className="text-gray-400 mb-4 text-justify">
              This is my personal portfolio website, designed and built from scratch using React and Tailwind CSS. It’s a single-page application that showcases who I am, what I do, and the projects I've worked on. The design is responsive, smooth, and modern, with a mobile-friendly navigation experience.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "TailwindCSS"].map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246, 0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://github.com/angeldamcheski/react-personal-portfolio"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                Details ➡️
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">QuizBot</h3>
            <p className="text-gray-400 mb-4 text-justify">
              Helped develop modern, responsive views for QuizBot, an AI-powered
              quiz assistant that summarizes study material and generates
              questions using language models. Built the front-end using
              React.js, Axios, and Bootstrap, focusing on clean design and
              user-friendly interactions.{" "}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Axios", "Bootstrap"].map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246, 0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://github.com/QuizBott/QuizBot-Frontend"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                Details ➡️
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">
              Secure File Sharing Using Access Control
            </h3>
            <p className="text-gray-400 mb-4 text-justify">
              Secure File Sharing Using Access Control is a web application
              developed with Java Spring, PostgreSQL, Thymeleaf, and Amazon S3.
              It allows users to securely share their files, choosing who has
              access to them. The application features a layered architecture
              with a web layer, service layer, and repository layer.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Java Spring", "PostgreSQL", "Thymeleaf", "AmazonS3"].map(
                (tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246, 0.2)] transition"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://github.com/angeldamcheski/Secure-File-Sharing-Using-Access-Control"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                Details ➡️
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246, 0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">Blog Web Application</h3>
            <p className="text-gray-400 mb-4 text-justify">
              I have successfully completed a web application project that
              provides secure user registration and two-factor authentication
              (2FA) for safe login. The application ensures full password
              privacy and integrity, along with features for verified login
              using 2FA and user logout. It is built with Node.js using
              Express.js for the back-end and MongoDB for secure storage of user
              data.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["ExpressJS", "MongoDB", "Pug View Engine"].map(
                (tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246, 0.2)] transition"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://github.com/angeldamcheski/Information-Security"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                Details ➡️
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
