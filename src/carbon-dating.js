const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // remove line with error and write your code here
  if (typeof sampleActivity == "string") {
    let n0 = parseFloat(sampleActivity);
    if (!isNaN(n0) && n0 != undefined 
    && n0 > 0 && n0 <= 15) {
      return Math.ceil(Math.log(MODERN_ACTIVITY/n0)/0.693*HALF_LIFE_PERIOD);
    } 
    else return false;
  } else return false;
};
