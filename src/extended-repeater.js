module.exports = function repeater(str, options) {
    // remove line with error and write your code here
let result = new Array(options.repeatTimes);
// let resultItem = `{$String(str)}` + `{$options.addition}`.repeat(options.additionRepeatTimes)
let additionalStr = new Array(options.additionRepeatTimes);
//additionalStr.push(options.addition);
if (options.addition === null) options.addition = String(null);
let tmp = String(str) + additionalStr.fill(options.addition).join(options.additionSeparator);
result.fill(tmp);
return options.separator == undefined ? result.join('+') : result.join(options.separator);
};

/*
options {
    repeatTimes: 4,
    separator: '1L467Kdqx2', def '+'
    addition: 'IMqCarClDg',
    additionRepeatTimes: 8,
    additionSeparator: 'U7L9D0f8pb'  def '|'
}*/
  