import swap from "lib/swap";


export default function getSelectionSortAnimations(array) {
  const arrayCopy = [...array];
  const animations = [];
  for (let i = 0; i < arrayCopy.length; i++) {
    let lastIndex = arrayCopy.length - i - 1;
    let maxIndex = 0;
    for (let j = 0; j <= lastIndex; j++) {
      animations.push([[j, maxIndex], false]);
      if (arrayCopy[j] > arrayCopy[maxIndex]) {
        maxIndex = j;
      }
    }
    animations.push([[lastIndex, arrayCopy[maxIndex]], true]);
    animations.push([[maxIndex, arrayCopy[lastIndex]], true]);
    swap(arrayCopy, lastIndex, maxIndex);
  }

  return animations;
}


