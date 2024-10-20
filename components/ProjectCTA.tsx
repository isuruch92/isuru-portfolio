import React from "react";
import { FaEye, FaGithub } from "react-icons/fa6";

type Props = {
  demoLink: string;
  githubLink: string;
  positionClasses?: string;
};

const ProjectCTA = ({ demoLink, githubLink, positionClasses }: Props) => {
  const handleOpenLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={`hidden gap-12 absolute ${positionClasses} z-50 group-hover:flex transition-all delay-100`}
    >
      <button
        className="bg-black bg-opacity-80 text-[#00feff] text-3xl p-1.5 px-2.5 rounded-full hover:scale-110 transition-all"
        onClick={() => handleOpenLink(demoLink)}
      >
        <FaEye />
      </button>
      <button
        className="bg-black bg-opacity-80 text-[#00feff] text-3xl p-1.5 px-2.5 rounded-full hover:scale-110 transition-all"
        onClick={() => handleOpenLink(githubLink)}
      >
        <FaGithub />
      </button>
    </div>
  );
};

export default ProjectCTA;
