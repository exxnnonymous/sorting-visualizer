import { useSort } from "context/SortingContext";
import React from "react";
import "styles/Visualizer.scss";

function VisualizerScreen() {
  const { array, containerRef } = useSort();

  

  return (
    <main className="visualizer__screen">
      <div className="container">
        <div className="bar_wrapper" ref={containerRef}>
          {array.map((val, idx) => (
            <div
              className="array_bar"
              style={{ height: `${val}px` }}
              key={idx}
              data-testid="array-bar"
            ></div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default VisualizerScreen;
