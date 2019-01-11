(function (fluidDensity, deep) {
  let pressure = fluidDensity * 9.8 * deep;
  return Math.round(pressure);/*?*/
})(1000, 5);