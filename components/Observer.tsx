"use client";

import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface ObserverProps {
  children: React.ReactNode;
  threshold?: number;
  onVisible?: () => void;
}

const Observer: React.FC<ObserverProps> = ({
  children,
  threshold = 0.4,
  onVisible,
}) => {
  const { ref, inView } = useInView({ threshold });
  const hasTriggeredVisible = useRef(false); // To track if onVisible has been triggered

  useEffect(() => {
    if (inView && onVisible && !hasTriggeredVisible.current) {
      onVisible();
      hasTriggeredVisible.current = true; // Set this to true after triggering
    }
    // Reset if no longer in view
    if (!inView) {
      hasTriggeredVisible.current = false;
    }
  }, [inView, onVisible]);

  return <div ref={ref}>{children}</div>;
};

export default Observer;
