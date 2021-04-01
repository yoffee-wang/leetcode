/**
 * [中等]1006. 笨阶乘
 * https://leetcode-cn.com/problems/clumsy-factorial/
 * 
 * 
通常，正整数 n 的阶乘是所有小于或等于 n 的正整数的乘积。例如，factorial(10) = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1。

相反，我们设计了一个笨阶乘 clumsy：在整数的递减序列中，我们以一个固定顺序的操作符序列来依次替换原有的乘法操作符：乘法(*)，除法(/)，加法(+)和减法(-)。

例如，clumsy(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1。然而，这些运算仍然使用通常的算术运算顺序：我们在任何加、减步骤之前执行所有的乘法和除法步骤，并且按从左到右处理乘法和除法步骤。

另外，我们使用的除法是地板除法（floor division），所以 10 * 9 / 8 等于 11。这保证结果是一个整数。

实现上面定义的笨函数：给定一个整数 N，它返回 N 的笨阶乘。


示例 1：

输入：4
输出：7
解释：7 = 4 * 3 / 2 + 1
示例 2：

输入：10
输出：12
解释：12 = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1
 
提示：

1 <= N <= 10000
-2^31 <= answer <= 2^31 - 1  （答案保证符合 32 位整数。）

*/

/**
 * @param {number} N
 * @return {number}
 */
var clumsy = function (N) {
  if (N <= 3) {
    return [0, 1, 2 * 1, (3 * 2) / 1][N]
  }
  return Math.floor((N * (N - 1)) / (N - 2)) + helper(N - 3)
}

function helper(n) {
  if (n >= 4) {
    return n - Math.floor(((n - 1) * (n - 2)) / (n - 3)) + helper(n - 4)
  } else {
    return [0, 1, 2 - 1, 3 - 2 * 1][n]
  }
}

write('algorithms: 1006. 笨阶乘', 'title')

write(clumsy(4)) // 7
write(clumsy(10)) // 12
write(clumsy(100)) // 101
write(clumsy(1000)) // 1001

// tag: 递归
