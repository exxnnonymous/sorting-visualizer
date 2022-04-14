import arrayGenerator from "lib/array_generator";
import { createContext, useContext, useState, useRef } from "react";
import getInsertionSortAnimations from "lib/algorithms/insertion_sort";
import CONSTANTS from "lib/CONSTANTS";
import getMergeSortAnimations from "lib/algorithms/merge_sort";
import getBubbleSortAnimations from "lib/algorithms/bubble_sort";
import  getQuickSortAnimations  from "lib/algorithms/quick_sort";
import getSelectionSortAnimations  from "lib/algorithms/selection_sort";

export const SortContext = createContext();

export function useSort() {
  return useContext(SortContext);
}

export default function SortProvider({ children }) {
  const [array, setArray] = useState(arrayGenerator(CONSTANTS.ARR_LEN));
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  const containerRef = useRef();

  function resetArray() {
    if (isSorting) return;
    if (isSorted) resetArrayColour();
    setIsSorted(false);
    setArray(arrayGenerator(CONSTANTS.ARR_LEN));
  }

  // handle sorting button
  function insertionSort() {
    if (isSorting) return;
    const animations = getInsertionSortAnimations(array);
    animateArrayUpdate(animations);
  }

  function mergeSort() {
    if (isSorting) return;
    const animations = getMergeSortAnimations(array);
    animateArrayUpdate(animations);
  }

  function bubbleSort() {
    if (isSorting) return;
    const animations = getBubbleSortAnimations(array);
    animateArrayUpdate(animations);
  }

  function quickSort() {
    const animations = getQuickSortAnimations(array);
    animateArrayUpdate(animations);
  }

  function selectionSort() {
    const animations = getSelectionSortAnimations(array);
    animateArrayUpdate(animations);
  }

  //   handle animations
  function animateArrayUpdate(animations) {
    if (isSorting) return;
    setIsSorting(true);
    document.documentElement.style.setProperty("--change-color", CONSTANTS.ACCESSED_COLOUR);
    animations.forEach(([comparison, swapped], index) => {
      setTimeout(() => {
        if (!swapped) {
          if (comparison.length === 2) {
            const [i, j] = comparison;
            animateArrayAccess(i);
            animateArrayAccess(j);
          } else {
            const [i] = comparison;
            animateArrayAccess(i);
          }
        } else {
          setArray((prevArr) => {
            const [k, newValue] = comparison;
            const newArr = [...prevArr];
            newArr[k] = newValue;
            return newArr;
          });
        }
      }, index * CONSTANTS.DELAY);
    });
    setTimeout(() => {
      animateSortedArray();
    }, animations.length * CONSTANTS.DELAY);
  }

  function animateArrayAccess(index) {
    const arrayBars = containerRef.current.children;
    const arrayBarStyle = arrayBars[index].style;
    setTimeout(() => {
      arrayBarStyle.backgroundColor = CONSTANTS.ACCESSED_COLOUR;
    }, CONSTANTS.DELAY);
    setTimeout(() => {
      arrayBarStyle.backgroundColor = "";
    }, CONSTANTS.DELAY * 2);
  }

  function animateSortedArray() {
    const arrayBars = containerRef.current.children;
    for (let i = 0; i < arrayBars.length; i++) {
      const arrayBarStyle = arrayBars[i].style;
      setTimeout(
        () => (
          arrayBarStyle.backgroundColor = CONSTANTS.SORTED_COLOUR
          
          ),
        i * CONSTANTS.DELAY
      );
    }
    setTimeout(() => {
      setIsSorted(true);
      setIsSorting(false);
      document.documentElement.style.setProperty("--change-color", CONSTANTS.SORTED_COLOUR);
    }, arrayBars.length * CONSTANTS.DELAY);
  }

  function resetArrayColour() {
    const arrayBars = containerRef.current.children;
    for (let i = 0; i < array.length; i++) {
      const arrayBarStyle = arrayBars[i].style;
      arrayBarStyle.backgroundColor = "";
    }

    document.documentElement.style.setProperty("--change-color", null);
  }

  let value = {
    array,
    resetArray,
    containerRef,
    isSorting,
    insertionSort,
    mergeSort,
    bubbleSort,
    quickSort,
    selectionSort,
  };

  return <SortContext.Provider value={value}>{children}</SortContext.Provider>;
}
