import React, { useState } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { experiencesData } from "@/lib/data";
import { useTheme } from "@/context/theme-context";

interface ExperienceItemProps {
  item: (typeof experiencesData)[number];
  hasAnimated: boolean[];
  index: number;
}

export default function ExperienceItem({
  item,
  hasAnimated,
  index,
}: ExperienceItemProps) {
  const { theme } = useTheme();

  const [isExpanded, setIsExpanded] = useState(false);

  const handleSeeMoreClick = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  return (
    <VerticalTimelineElement
      visible={hasAnimated[index]}
      contentStyle={{
        background:
          theme === "light"
            ? index === 0
              ? "rgb(210 237 246)"
              : "#FFF"
            : "rgba(255, 255, 255, 0.05)",
        boxShadow:
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        textAlign: "left",
        padding: "1.2rem 1.6rem",
        marginBottom: "2rem",
        borderTop: "3px solid #00a7ff",
      }}
      contentArrowStyle={{
        borderRight:
          theme === "light"
            ? index === 0
              ? "0.5rem solid rgb(210 237 246)"
              : "0.5rem solid #FFF"
            : "0.5rem solid rgba(255, 255, 255, 0.5)",
      }}
      date={item.date}
      icon={item.icon}
      iconStyle={{
        background:
          theme === "light"
            ? index === 0
              ? "#00a7ff"
              : "#e1dfdf"
            : index === 0
            ? "#00a7ff"
            : "rgba(255, 255, 255, 0.15)",
        fontSize: "1.5rem",
      }}
      position={index % 2 === 0 ? "left" : "right"}
      className="timeline-elm"
      dateClassName="timeline-date"
    >
      <h3 className="font-semibold capitalize sm:!text-xl">{item.title}</h3>

      <span className="flex items-center justify-between max-[500px]:items-start max-[500px]:flex-col flex-wrap">
        <p className="font-normal !mt-0 sm:!text-lg !text-slate-800 dark:!text-white">
          {item.company}
        </p>
        <p className="font-normal !mt-0 italic !text-slate-600 dark:!text-white/80">
          {item.location}
        </p>
      </span>

      <p className="!mt-1 !font-normal !text-slate-700 dark:!text-white/70 !text-sm max-[500px]:!text-[0.813rem] text-justify">
        {item.description.length > 205 ? (
          !isExpanded ? (
            <React.Fragment>
              {item.description.substring(0, 202)}...
              <button
                onClick={handleSeeMoreClick}
                className="text-blue-500 hover:text-blue-700"
              >
                See more
              </button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {item.description}
              <button
                onClick={handleSeeMoreClick}
                className="text-blue-500 hover:text-blue-700"
              >
                &nbsp; See less
              </button>
            </React.Fragment>
          )
        ) : (
          <span>{item.description}</span>
        )}
      </p>
    </VerticalTimelineElement>
  );
}
