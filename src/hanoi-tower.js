module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
        // remove line with error and write your code here
    return {turns:    Math.pow(2,disksNumber)-1, 
            seconds: (Math.pow(2,disksNumber)-1)/(turnsSpeed/3600)};
}