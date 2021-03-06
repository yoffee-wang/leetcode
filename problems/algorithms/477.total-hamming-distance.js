/**
 * [中等]477. 汉明距离总和
 * https://leetcode-cn.com/problems/total-hamming-distance/
 * 
 * 
两个整数的 汉明距离 指的是这两个数字的二进制数对应位不同的数量。

计算一个数组中，任意两个数之间汉明距离的总和。

示例:

输入: 4, 14, 2

输出: 6

解释: 在二进制表示中，4表示为0100，14表示为1110，2表示为0010。（这样表示是为了体现后四位之间关系）
所以答案为：
HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.
注意:

数组中元素的范围为从 0到 10^9。
数组的长度不超过 10^4。

4  0100
14 1110
2  0010

*/

var totalHammingDistance = function (nums) {
  let ans = 0,
    n = nums.length
  for (let i = 0; i < 30; ++i) {
    let c = 0
    for (const val of nums) {
      c += (val >> i) & 1
    }
    // c代表1的个数，n - c代表0的个数，因为1和0会生成一个1，所以这位的1的个数是 c * (n - c)
    ans += c * (n - c)
  }
  return ans
}

write('algorithms: 477. 汉明距离总和', 'title')

write(totalHammingDistance([4, 14, 2])) // 6

// tag:
