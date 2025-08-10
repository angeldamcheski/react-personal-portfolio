import { useEffect, useState } from "react";
import { applyStoredTheme, themeToggler } from "../utils/themeToggle";
export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [isLight, setIsLight] = useState(false);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  useEffect(() => {
    applyStoredTheme();
    setIsLight(document.documentElement.classList.contains("light"));
  }, []);
  const handleThemeToggle = () => {
    themeToggler();
    setIsLight((prev) => !prev);
  };
  return (
    <nav className=" fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            <span className="text-blue-500">&lt;</span>
            <span className="light:text-neutral-700">Angel</span>{" "}
            <span className="text-blue-500">Damcheski /&gt;</span>
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden light:text-stone-800"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          <div
            className="text-2xl hover:cursor-pointer"
            onClick={handleThemeToggle}
          >
            <span className="hidden">a</span>{isLight ? '🌙' : "☀️"}
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors light:text-neutral-800 light:hover:text-neutral-600"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors light:text-neutral-800 light:hover:text-neutral-600"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors light:text-neutral-800 light:hover:text-neutral-600"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors light:text-neutral-800 light:hover:text-neutral-600"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
