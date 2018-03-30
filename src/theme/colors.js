import { rgba, shade, tint } from 'polished';

const levels = 10;

const primary = '#362BDB';
const black = '#000';

const transformUnits = {
  digital: {
    fromZero: value => value / levels,
    toZero: value => 1 - value / levels,
  },
};

const createTransformRows = transformFunc =>
  Array.from({ length: levels }).map((v, k) => transformFunc(k));

const flipIfNeeded = isNeeded => (...params) => (isNeeded ? params.reverse() : params);

const createTransform = (
  func,
  unitFunc = transformUnits.digital.toZero,
  flipped = false,
) => color => createTransformRows(value => func(...flipIfNeeded(flipped)(unitFunc(value), color)));

const createAlphas = createTransform(rgba, transformUnits.digital.fromZero, true);
const createShades = createTransform(shade);
const createTints = createTransform(tint);

export const mainColors = Object.freeze({
  primary: '#362BDB',
  white: '#fff',
  black: '#000',
  gray: ['#333', '#55575e', '#73768e', '#959abd', '#eae9f6', '#f6f6fc', '#f8f8fd'],
});

export const alphaColors = Object.freeze({
  primaryAlpha: createAlphas(primary),
  blackAlpha: createAlphas(black),
});

export const shadeColors = Object.freeze({
  primaryShade: createShades(primary),
});

export const tintColors = Object.freeze({
  primaryTint: createTints(primary),
});

export default {
  ...mainColors,
  ...alphaColors,
  ...shadeColors,
  ...tintColors,
};
