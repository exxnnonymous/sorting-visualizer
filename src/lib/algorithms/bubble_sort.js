import swap from "lib/swap";

export default function getBubbleSortAnimations(array) {
  const arrayCopy = [...array];
  const animations = [];
  for (let i = 0; i < arrayCopy.length; i++) {
    let swapped = false;
    for (let j = 0; j < arrayCopy.length - i-1; j++) {
      animations.push([[j, j + 1], false]);
      if (arrayCopy[j] > arrayCopy[j + 1]) {
        animations.push([[j, arrayCopy[j + 1]], true]);
        animations.push([[j + 1, arrayCopy[j]], true]);
        swap(arrayCopy, j, j + 1);
        swapped = true;
      }
    }

    if (!swapped) {
        break;
      }
  }
  return animations;
}
