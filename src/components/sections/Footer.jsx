export const Footer = () => {
  return (
    <footer className="bg-[rgba(10,10,10, 0.8)] backdrop-blur-lg border-t border-white/10 shadow-lg  light:bg-neutral-200 light:text-stone-800 light:border-black/20 ">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 ">
        <p className="text-sm">
          &copy; {new Date().getFullYear} Angel Damcheski. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/angeldamcheski"
            target="_blank"
            className="text-gray-300 hover:text-white transition-colors light:text-stone-800 light:hover:text-stone-600"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/angeldamcheski/"
            className="text-gray-300 hover:text-white transition-colors light:text-stone-800 light:hover:text-stone-600"
          >
            LinkedIn
          </a>
          <a
            href="mailto:damcheskiangel911@gmail.com"
            className="text-gray-300 hover:text-white transition-colors light:text-stone-800 light:hover:text-stone-600"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
