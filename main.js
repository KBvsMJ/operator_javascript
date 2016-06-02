/**
 * Created by yangfan on 2016/6/2.
 */

var min = 1, max = 9, sum = 6, operatorArr = ['+', '-', '*', '/', '%', '++', '--', '=', '+=', '-=', '*=', '/=', '%=']; var operatorArrLen = operatorArr.length;
var handle = function (operators) {
    operatorArr = operators && operators instanceof Array ? operators : operatorArr
    operatorArrLen = operatorArr.length

    for (var i = min; i <= max; i++) {
        for (var j = 0; j < operatorArrLen; j++) {
            var operator = operatorArr[j]
            var expressionPartOne = i + ' ' + operator

            for (var k = 0; k < operatorArrLen; k++) {
                var operator = operatorArr[k]
                var expression = expressionPartOne + ' ' + i + ' ' + operator + ' ' + i
//            console.log(expression)
                if (eval(expression) === sum) {
                    console.log(expression + ' = ' + sum)
                }
            }
        }
    }
}
/* example */
handle(['+', '-', '*', '/', '%'])
/* result:
    2 + 2 + 2 = 6
    2 + 2 * 2 = 6
    2 * 2 + 2 = 6
    3 * 3 - 3 = 6
    5 + 5 / 5 = 6
    5 / 5 + 5 = 6
    6 + 6 - 6 = 6
    6 + 6 % 6 = 6
    6 - 6 + 6 = 6
    6 - 6 % 6 = 6
    6 * 6 / 6 = 6
    6 / 6 * 6 = 6
    6 % 6 + 6 = 6
    7 - 7 / 7 = 6
*/