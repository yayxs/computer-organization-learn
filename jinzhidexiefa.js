/**
 * 二进制使用0b 或者0B开头 bin
 */
const is5 = 0b00000000000000000000000000000101
// const is2 = 0B
const is14 = 0b00001110
const is1 = 0b00000001
const is14Addis1 = is14 + is1

console.log(is14Addis1)

/**
 * 0000, 1110
 * 0000, 0001
 *
 * 0000, 1111
 */

/**
 * 1000, 1110 -14
 * 1000, 0001 -1
 *
 *10000, 1111 15
 */

/**
 * 0000, 1110 14
 * 1000, 0001 -1
 *
 * 1000, 1111 -15
 */

/**
 * 在js中 正数是正数的原码
 *        负数  符号+正数的原码
 */
