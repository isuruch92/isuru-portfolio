"use client";

import React, { useState } from "react";

import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SectionHeading from "./SectionHeading";
import { experiencesData } from "@/lib/data";
import useSectionInView from "@/hooks/useSectionInView";
import Observer from "./Observer";
import ExperienceItem from "./ExperienceItem";

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
              <ExperienceItem
                item={item}
                index={index}
                hasAnimated={hasAnimated}
              />
            </Observer>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
