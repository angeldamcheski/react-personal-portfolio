export const Project = ({ title, description, tech, details }) => {
  return (
    <div
      className="group p-6 rounded-xl border border-white/10 bg-white/5 
                    transition-all duration-300
                     hover:bg-white/7 hover:border-blue-500/30 
                     light:border-black/10 light:hover:bg-white/20 light:hover:border-blue-500/30"
    >
      <div className="flex flex-col h-full">
        {/* Title with subtle arrow reveal on card hover */}
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-400 mb-6 text-md leading-relaxed light:text-stone-600 flex-grow">
          {description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, index) => (
            <span
              key={index}
              className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-md text-xs font-medium 
                         border border-blue-500/20 transition-colors
                         hover:bg-blue-500/20"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Action Link */}
        <div className="mt-auto border-t border-white/5 pt-4 light:border-black/5">
          <a
            href={details}
            className="inline-flex items-center text-sm font-semibold text-blue-400 
                       hover:text-blue-300 transition-all group/link light:text-blue-600"
          >
            View Project Details
            <span className="ml-1 transition-transform group-hover/link:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
