

{
/**
 * 二进制数
 */
let a = 39

/**
 *     128  64  32  16  8     4    2  1
 *      0    0    1  0   0     1    1  1
 *1  0   0     1    1  1 0    0
 */



let val10 = 110 // 10进制

const val2 = val10.toString(2)

const val8 = val10.toString(8)
const val16 = val10.toString(16) // '6e'

const x2 = '1101110'

const x10 = Number.parseInt(x2, 2)

const a16 = 'ff'

const a10 = Number.parseInt(a16, 16)

const erjinzhi = 0b100111
const bajinzhi = 0o767

}

/**
 * xx的yy次幂表示位权
 */