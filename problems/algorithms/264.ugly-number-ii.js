/**
 * [中等]264. 丑数 II
 * https://leetcode-cn.com/problems/ugly-number-ii/
 * 
 * 
编写一个程序，找出第 n 个丑数。

丑数就是质因数只包含 2, 3, 5 的正整数。

示例:

输入: n = 10
输出: 12
解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
说明:  

1 是丑数。
n 不超过1690。

*/

/**
 * dp
 * 
 * 官方题解里提到的三个指针p2，p3，p5，但是没有说明其含义，实际上pi的含义是有资格同i相乘的最小丑数的位置。这里资格指的是：如果一个丑数nums[pi]通过乘以i可以得到下一个丑数，那么这个丑数nums[pi]就永远失去了同i相乘的资格（没有必要再乘了），我们把pi++让nums[pi]指向下一个丑数即可。

不懂的话举例说明：

一开始，丑数只有{1}，1可以同2，3，5相乘，取最小的1×2=2添加到丑数序列中。

现在丑数中有{1，2}，在上一步中，1已经同2相乘过了，所以今后没必要再比较1×2了，我们说1失去了同2相乘的资格。

现在1有与3，5相乘的资格，2有与2，3，5相乘的资格，但是2×3和2×5是没必要比较的，因为有比它更小的1可以同3，5相乘，所以我们只需要比较1×3，1×5，2×2。

依此类推，每次我们都分别比较有资格同2，3，5相乘的最小丑数，选择最小的那个作为下一个丑数，假设选择到的这个丑数是同i（i=2，3，5）相乘得到的，所以它失去了同i相乘的资格，把对应的pi++，让pi指向下一个丑数即可。
 *
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const dp = [0, 1]
  let p2 = 1
  let p3 = 1
  let p5 = 1
  for (let i = 2; i <= n; i++) {
    const num2 = dp[p2] * 2
    const num3 = dp[p3] * 3
    const num5 = dp[p5] * 5
    dp[i] = Math.min(num2, num3, num5)
    if (dp[i] === num2) {
      p2++
    }
    if (dp[i] === num3) {
      p3++
    }
    if (dp[i] === num5) {
      p5++
    }
  }
  return dp[n]
}

write('algorithms: 264. 丑数 II', 'title')

write(nthUglyNumber(10)) // 12

// tag: dp；最小堆
