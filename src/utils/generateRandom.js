const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - (min + 1))) + min + Date.now() % 2;

export default (min, max) =>
  Math.floor((getRandom(min, max) +
      getRandom(min, max) +
      getRandom(min, max) +
      getRandom(min, max) +
      getRandom(min, max)) /
      5);
