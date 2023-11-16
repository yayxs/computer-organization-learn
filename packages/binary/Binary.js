/**
 * 转为二进制数
 * 字符通过charCodeAt 转成 unicode 十进制 number对象的toString
 */

const a = '0'.charCodeAt() // 48
const b = '0'.charCodeAt().toString(16) // '30'
const c = (0x0030).toString(10) // '48'

const is9 = Number.parseInt(9, 10).toString(2) // '1001'

const is16 = Number.parseInt(16, 10).toString(2) // '10000'
/**
 * 操作符 数值底层操作
 * bit位
 * 位操作不直接应用到64位
 * 先把值转为32位整数 再位操作 结果转为64位置
 *
 * 有符号整数 前31位整数值  符号0 1 sign bit
 */

/**
 * 求 -18
 * 18的二进制  0000, 0000, 0000, 0000, 0000, 0000, 0001, 0010
 * 18的补数    1111, 1111, 1111, 1111, 1111, 1111, 1110, 1101
 *        +1   0000, 0000, 0000, 0000, 0000, 0000, 0000, 0001
 */

// const isfu18 = -(18).toString(2)
