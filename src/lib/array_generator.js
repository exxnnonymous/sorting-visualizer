function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1 )+ min);
}

function arrayGenerator(length) {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(randomIntFromInterval(30, 470));
  }

  return array;
}

export default arrayGenerator;
