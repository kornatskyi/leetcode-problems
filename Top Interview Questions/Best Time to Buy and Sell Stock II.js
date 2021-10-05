/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    let profit = 0


    for (let i = prices.length; i > 0; i--) {

        if (prices[prices.length - i + 1] > prices[prices.length - i]) {
            profit += prices[prices.length - i + 1] - prices[prices.length - i]
        }
    }
    return profit

};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
