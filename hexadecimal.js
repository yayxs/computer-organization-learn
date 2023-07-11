/**
 * 十六进制常见方法
 * 十六进制表示法
 * 二进制太长，十进制表示法与位模式互相转化很麻烦
 * slice() 方法提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串
 *
 * 0 0000
 * 1 0001
 * 2 0010
 * 3 0011
 * 4 0100
 * 5 0101
 * 6 0110
 * 7 0111
 * 8 1000
 * 9 1001
 * A 1010
 * B 1011
 * C 1100
 * D 1101
 * E 1110
 * F 1111
 */

/**
 * 16进制字符串转为10进制数字
 * @param {*} str 16进制的 8位或者16位字符串
 */
const hex2Number = (str = '') => {
  if (typeof str !== 'string') return ''
  if (str.startsWith('0x')) {
    str = str.slice(2)
  }
  const ret = Number.parseInt(`0x${str}`, 16)
  console.log(ret)
}

hex2Number('0x11')
hex2Number('0x0f')
hex2Number('0xff')

/**
 * 16进制的字符串转为指定字节的字符串
 * @param {*} str
 * @param {*} byteLen
 */
const hex2ByteString = (str = '', byteLen = 2) => {
  if (typeof str !== 'string') return ''
  if (str.startsWith('0x')) {
    str = str.slice(2)
  }
  let len = str.length
  let total = byteLen * 2 - len
  if (total > 0) {
    while (total) {
      str = '0' + str
      total--
    }
  }
  console.log(str)
}

hex2ByteString('0xff')
hex2ByteString('0x11')

/**
 * 10进制数字转为指定字节的16进制字符串
 * @param {*} num
 * @param {*} byteLen
 */
const num2HexBytes = (num = 0, byteLen = 1) => {
  const str = num.toString(16)

  const ret = hex2ByteString(str, byteLen)
  console.log(ret)
}

console.log('hex run')

/**
 * 16进制的字符串
 * 占多少字节
 */

/**
 * 等分单个字节的系统：
 * 每个字节等分为4组，每组2bit 基于4的计数系统
 * 等分为2组，每组4bit （基于16的计数系统）
 * 两个16进制数可以完整的代表一个字节
 * 一个16进制的数 4位二进制
 */
