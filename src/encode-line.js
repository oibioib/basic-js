const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
    return str
        .split('')
        .reduce(([res, countPrevElem, prevElem], currentElem) => {
            if (currentElem === prevElem) {
                return [res, countPrevElem + 1, prevElem];
            } else {
                return [res + (countPrevElem > 1 ? countPrevElem + prevElem : prevElem), 1, currentElem];
            }
        }, ['', 0, ''])
        .filter(elem => typeof elem === 'string' || elem > 1)
        .join('');
}

module.exports = {
    encodeLine
};
