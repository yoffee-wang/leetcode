/**
 * [中等]1482. 制作 m 束花所需的最少天数
 * https://leetcode-cn.com/problems/minimum-number-of-days-to-make-m-bouquets/
 * 
 * 
给你一个整数数组 bloomDay，以及两个整数 m 和 k 。

现需要制作 m 束花。制作花束时，需要使用花园中 相邻的 k 朵花 。

花园中有 n 朵花，第 i 朵花会在 bloomDay[i] 时盛开，恰好 可以用于 一束 花中。

请你返回从花园中摘 m 束花需要等待的最少的天数。如果不能摘到 m 束花则返回 -1 。

 

示例 1：

输入：bloomDay = [1,10,3,10,2], m = 3, k = 1
输出：3
解释：让我们一起观察这三天的花开过程，x 表示花开，而 _ 表示花还未开。
现在需要制作 3 束花，每束只需要 1 朵。
1 天后：[x, _, _, _, _]   // 只能制作 1 束花
2 天后：[x, _, _, _, x]   // 只能制作 2 束花
3 天后：[x, _, x, _, x]   // 可以制作 3 束花，答案为 3
示例 2：

输入：bloomDay = [1,10,3,10,2], m = 3, k = 2
输出：-1
解释：要制作 3 束花，每束需要 2 朵花，也就是一共需要 6 朵花。而花园中只有 5 朵花，无法满足制作要求，返回 -1 。
示例 3：

输入：bloomDay = [7,7,7,7,12,7,7], m = 2, k = 3
输出：12
解释：要制作 2 束花，每束需要 3 朵。
花园在 7 天后和 12 天后的情况如下：
7 天后：[x, x, x, x, _, x, x]
可以用前 3 朵盛开的花制作第一束花。但不能使用后 3 朵盛开的花，因为它们不相邻。
12 天后：[x, x, x, x, x, x, x]
显然，我们可以用不同的方式制作两束花。
示例 4：

输入：bloomDay = [1000000000,1000000000], m = 1, k = 1
输出：1000000000
解释：需要等 1000000000 天才能采到花来制作花束
示例 5：

输入：bloomDay = [1,10,2,9,3,8,4,7,5,6], m = 4, k = 2
输出：9
 

提示：

bloomDay.length == n
1 <= n <= 10^5
1 <= bloomDay[i] <= 10^9
1 <= m <= 10^6
1 <= k <= n

*/

/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
  if (m * k > bloomDay.length) {
    return -1
  }
  let min = 1
  let max = Math.pow(10, 9)
  for (let i = 0; i < bloomDay.length; i++) {
    min = Math.min(min, bloomDay[i])
    max = Math.max(max, bloomDay[i])
  }
  let res = -1
  while (min <= max) {
    const mid = Math.floor((min + max) / 2)
    if (helper(bloomDay, m, k, mid)) {
      max = mid - 1
      res = mid
    } else {
      min = mid + 1
    }
  }
  return res
}

function helper(bloomDay, m, k, val) {
  let count = 0
  for (let i = 0; i < bloomDay.length; i++) {
    if (bloomDay[i] > val) {
      count = 0
    } else {
      count++
      if (count === k) {
        count = 0
        m--
      }
      if (m === 0) {
        return true
      }
    }
  }
  return false
}

write('algorithms: 1482. 制作 m 束花所需的最少天数', 'title')

write(minDays([1, 10, 3, 10, 2], 3, 1)) // 3
write(minDays([1, 10, 3, 10, 2], 3, 2)) // -1
write(minDays([7, 7, 7, 7, 12, 7, 7], 2, 3)) // 12
write(minDays([1000000000, 1000000000], 1, 1)) // 1000000000
write(minDays([1, 10, 2, 9, 3, 8, 4, 7, 5, 6], 4, 2)) // 9

// tags: 数组；二分查找
