import swap from "lib/swap";


export default  function getQuickSortAnimations(array) {
  const arrayCopy = [...array];
  const animations = [];
  quickSortHelper(arrayCopy, 0, arrayCopy.length - 1, animations);
  return animations;
}

function quickSortHelper(array, left, right, animations) {
  if (right <= left) return;
  const part = partition(array, left, right, animations);
  quickSortHelper(array, left, part, animations);
  quickSortHelper(array, part + 1, right, animations);
}

function partition(array, left, right, animations) {
  let i = left;
  let j = right + 1;
  const pivot = array[left];
  while (true) {
    while (array[++i] <= pivot) {
      if (i === right) break;
      animations.push([[i], false]);
    }
    while (array[--j] >= pivot) {
      if (j === left) break;
      animations.push([[j], false]);
    }
    if (j <= i) break;
    animations.push([[i, array[j]], true]);
    animations.push([[j, array[i]], true]);
    swap(array, i, j);
  }
  animations.push([[left, array[j]], true]);
  animations.push([[j, array[left]], true]);
  swap(array, left, j);
  return j;
}