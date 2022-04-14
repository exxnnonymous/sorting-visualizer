import swap from "lib/swap";


export default function getInsertionSortAnimations(array) {
  const arrayCopy = [...array];
  const animations = [];
  for (let i = 1; i < arrayCopy.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      animations.push([[j, j + 1], false]);
      if (arrayCopy[j + 1] < arrayCopy[j]) {
        animations.push([[j, arrayCopy[j + 1]], true]);
        animations.push([[j + 1, arrayCopy[j]], true]);
        swap(arrayCopy, j, j + 1);
      } else break;
    }
  }
  return animations;
}



