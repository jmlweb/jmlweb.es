const createVariationsArr = number => Array.from(Array(number).keys());

export default (variationsNumber) => {
  const positiveVariations = createVariationsArr(variationsNumber + 1);
  const negativeVariations = createVariationsArr(variationsNumber)
    .map(value => (value + 1) * -1)
    .reverse();
  const variations = negativeVariations.concat(positiveVariations);
  return conversor =>
    variations.reduce(
      (prev, curr) => ({
        ...prev,
        [`${curr}`]: conversor(curr),
      }),
      {},
    );
};
