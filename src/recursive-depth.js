module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (!arr.reduce((check, item) => check = check || Array.isArray(item),0)) {
            return 1;
        }
        else {            
            let maxDepth = 1;
            for (let item of arr) {
                if (Array.isArray(item)) {
                    let depth = 1;
                    depth += this.calculateDepth(item);
                    if (depth > maxDepth) maxDepth = depth;
                }
            }
            return maxDepth;
        }
    }
};