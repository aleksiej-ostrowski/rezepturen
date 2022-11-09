// https://stackoverflow.com/questions/340209/generate-colors-between-red-and-green-for-a-power-meter
//
export const getColorByScale = (n) => {
  let r = (255 * n) / 100;
  let g = (255 * (100 - n)) / 100;
  // b = 0

  return `rgb(${Math.floor(r)},${Math.floor(g)},0)`;
};
