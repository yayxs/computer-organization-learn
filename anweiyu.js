/**
 * & 0xff 做了什么
 *
 * -12
 *  真值   -0000, 0000, 0000, 1100
 *  原码    0000, 0000, 0000, 1100
 * 取反     1111, 1111, 1111, 0011
 * 补码     0000,,0000, 0000, 0001
 *
 *                               1111 0100 -12的补码
 * 0000 0000 0000 0000 0000 0000 1111 1111 0xff
 * 0000 0000 0000 0000 0000 0000 1111 0110 10进制是244
 */