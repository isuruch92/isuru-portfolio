import { projectsData } from "@/lib/data";
import Image from "next/image";
import React from "react";

type ProjectProps = {
  project: (typeof projectsData)[number];
};

export default function Project({ project }: ProjectProps) {
  const { title, description, tags, imageUrl } = project;

  return (
    <section className="group bg-slate-50 max-w-[43rem] rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 even:pl-8 hover:shadow-2xl transition">
      <div className="pt-4 pb-7 px-5 sm:pt-8 sm:pl-8 sm:pr-2 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18.5rem]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-slate-700">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={imageUrl}
        alt="Project I worked on"
        quality={95}
        className="absolute top-8 -right-52 w-[34rem] rounded-t-lg shadow-2xl 
        group-even:-right-[initial] group-even:-left-52 transition 
        group-hover:-translate-x-3
        group-hover:-translate-y-3
        group-hover:-rotate-2"
      />
    </section>
  );
}
