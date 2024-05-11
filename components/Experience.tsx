"use client";

import React, { useState } from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SectionHeading from "./SectionHeading";
import { experiencesData } from "@/lib/data";
import useSectionInView from "@/hooks/useSectionInView";
import Observer from "./Observer";

export default function Experience() {
  const { ref, inView } = useSectionInView("Experience", 0.5);
  const { theme } = { theme: "light" };

  const [hasAnimated, setHasAnimated] = useState(
    Array(experiencesData.length).fill(false)
  );

  const handleVisibilityChange = (index: number) => () => {
    setHasAnimated((prev) => {
      const newAnimated = [...prev];
      newAnimated[index] = true;
      return newAnimated;
    });
  };

  return (
    <section id="experience" ref={ref} className="mb-28 sm:mb-40 scroll-mt-32">
      <SectionHeading>My experience</SectionHeading>

      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <Observer key={index} onVisible={handleVisibilityChange(index)}>
              <VerticalTimelineElement
                visible={hasAnimated[index]}
                contentStyle={{
                  background:
                    theme === "light"
                      ? index === 0
                        ? "#7ee6fccf"
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
                        ? "0.5rem solid #7ee6fccf"
                        : "0.5rem solid #FFF"
                      : "0.5rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === "light"
                      ? index === 0
                        ? "rgba(64, 221, 255, 1)"
                        : "#e1dfdf"
                      : "rgba(255, 255, 255, 0.15)",
                  fontSize: "1.5rem",
                }}
                position={index % 2 === 0 ? "left" : "right"}
                className="timeline-elm"
                dateClassName="timeline-date"
              >
                <h3 className="font-semibold capitalize sm:!text-xl">
                  {item.title}
                </h3>

                <span className="flex items-center justify-between max-[500px]:items-start max-[500px]:flex-col flex-wrap">
                  <p className="font-normal !mt-0 sm:!text-lg !text-slate-800">
                    {item.company}
                  </p>
                  <p className="font-normal !mt-0 italic !text-slate-600">
                    {item.location}
                  </p>
                </span>

                <p className="!mt-1 !font-normal !text-slate-700 dark:text-white/75 !text-sm max-[500px]:!text-[0.813rem]">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </Observer>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
