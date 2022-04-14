  export default function getMergeSortAnimations(array) {
    const arrayCopy = [...array];
    const len = arrayCopy.length;
    const emptyArray = Array(len);
    const animations = [];
    mergeSortHelper(arrayCopy, emptyArray, 0, len - 1, animations);
    return animations;
  }
  
  function mergeSortHelper(array, emptyArray, left, right, animations) {
    if (right <= left) return;
    const mid = left + Math.floor((right - left) / 2);
    mergeSortHelper(array, emptyArray, left, mid, animations);
    mergeSortHelper(array, emptyArray, mid + 1, right, animations);
    merge(array, emptyArray, left, mid, right, animations);
  }
  
  function merge(array, emptyArray, left, mid, right, animations) {
    for (let i = left; i <= right; i++) emptyArray[i] = array[i];
    let i = left;
    let j = mid + 1;
    for (let k = left; k <= right; k++) {
      if (i > mid) {
        animations.push([[j], false]);
        animations.push([[k, emptyArray[j]], true]);
        array[k] = emptyArray[j++];
      } else if (j > right) {
        animations.push([[i], false]);
        animations.push([[k, emptyArray[i]], true]);
        array[k] = emptyArray[i++];
      } else if (emptyArray[j] < emptyArray[i]) {
        animations.push([[i, j], false]);
        animations.push([[k, emptyArray[j]], true]);
        array[k] = emptyArray[j++];
      } else {
        animations.push([[i, j], false]);
        animations.push([[k, emptyArray[i]], true]);
        array[k] = emptyArray[i++];
      }
    }
  }


