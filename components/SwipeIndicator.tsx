import React from "react";
import "./SwipeIndicator.css";
import { useTheme } from "@/context/theme-context";

const SwipeIndicator = () => {
  const { theme } = useTheme();

  return (
    <div className="swipe-indicator">
      <div className="indicator-wrapper">
        <div className="box-wrapper">
          <div className="box-outer">
            <div className="box"></div>
          </div>
        </div>
        <div className="indicator-cursor">
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 47.619 68.23"
          >
            <title>Hand Cursor</title>
            <path
              d="M59.773,79.1l0.033-.176c2.062-9.136,9.688-20.832,8.023-31.685-0.45-2.583-.877-3.861-1.383-4.527-0.33-.435-0.807-0.769-2.285-0.769a4.6,4.6,0,0,0-1.063.116L63.041,47.7a1.875,1.875,0,0,1-3.749-.035l0.061-6.554c0.071-2.036-.252-2.656-0.443-2.862-0.169-.181-0.651-0.485-2.388-0.485a2.962,2.962,0,0,0-2.436.915l-0.07,5.843a1.875,1.875,0,1,1-3.749-.035l0.062-6.553c0.071-2.036-.252-2.657-0.443-2.864-0.169-.181-0.653-0.485-2.389-0.485a3.423,3.423,0,0,0-2.054.551l-0.177.17-0.025,9.4a1.875,1.875,0,0,1-3.749-.011L41.554,21.73c0.071-2.042-.25-2.66-0.443-2.869-0.169-.181-0.652-0.485-2.389-0.485a3.225,3.225,0,0,0-2.223.688,2.533,2.533,0,0,0-.654,2.17l0,0.116V54.614a1.875,1.875,0,0,1-3.75,0V47.837l-0.875.232a4.476,4.476,0,0,0-3.115,3.319A10.042,10.042,0,0,0,29.864,58.8c3.487,5.315,8.108,11.265,9.58,18.686l0.251,1.521Z"
              style={{ fill: theme === "dark" ? "#cbcbcb" : "#717171" }}
              transform="translate(-24.187 -14.626)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SwipeIndicator;
