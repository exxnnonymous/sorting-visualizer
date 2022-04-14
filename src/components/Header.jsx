
import React from "react";
import { useSort } from "context/SortingContext";
import "styles/Header.scss";

function Header() {
  const {
    resetArray,
    insertionSort,
    isSorting,
    mergeSort,
    bubbleSort,
    quickSort,
    selectionSort
  } = useSort();
  return (
    <header>
      <div className="container">
        <div className="logo">Sorting Visualizer</div>
        <div
          className={
            isSorting ? "new__array__btn disable__btn" : "new__array__btn"
          }
        >
          <button onClick={resetArray}>New Array</button>
        </div>
        <div
          className={
            isSorting ? "sorting__options disable__btn" : "sorting__options"
          }
        >
          <button data-testid="sorting-options" onClick={bubbleSort}>
            Bubble Sort
          </button>
          <button data-testid="sorting-options" onClick={selectionSort}>
            Selection Sort
          </button>
          <button data-testid="sorting-options" onClick={quickSort}>
            Quick Sort
          </button>
          <button data-testid="sorting-options" onClick={insertionSort}>
            Insertion Sort
          </button>
          <button data-testid="sorting-options" onClick={mergeSort}>
            Merge Sort
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
