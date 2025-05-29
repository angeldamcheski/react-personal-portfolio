export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6  leading-right">
          <span className="text-5xl md:text-7xl font-bold mb-6  leading-right bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
            Hi
          </span>
          <span>👋🏻, </span>
          <span className="text-5xl md:text-7xl font-bold mb-6  leading-right bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            I'm Angel Damcheski
          </span>
        </h1>
        <p className="grey-400 text-lg mb-8 max-w-lg mx-auto text-justify">
          Passionate about building impactful web applications. Dedicated,
          persistent, and always eager to learn and grow in the ever-evolving
          tech landscape. I believe in clean code, strong teams, and continuous
          self-improvement.f
        </p>
        <div className="flex justify-center space-x-4">
            <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246, 0.4)]">See my projects</a>
            <a href="#contact" className="borded border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246, 0.2)] hover:bg-blue-500/10">Contact me</a>
        </div>
      </div>
    </section>
  );
};
