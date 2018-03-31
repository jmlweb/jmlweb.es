const createVariationsArr = number => Array.from(Array(number).keys());

export default (
  negVariationsNumber,
  posVariationsNumber = negVariationsNumber,
) => {
  const negativeVariations = createVariationsArr(negVariationsNumber)
    .map(value => (value + 1) * -1)
    .reverse();
  const positiveVariations = createVariationsArr(posVariationsNumber + 1);
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
