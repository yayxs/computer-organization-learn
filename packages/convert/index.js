/**
 * js 二进制 字符串 转为 二进制的数字 '1001' 转为 0b1001
 */
const hexString =
  '7b22646964223a223032344634323535303031343032303232303331353936333230313531333531222c226f62754368616c6c656e6765223a2230423938373538463334434241313531227d'

// // 指定2进制 转为 10
// console.log(Number.parseInt('11001', 2)) // 25

// // 10进制转为2
// console.log((25).toString(2)) // '11001'

/**
 * 中文字符串转为 hex-string
 * @example
 * '打开蓝牙' => '62535f0084dd7259'
 */

function char2HexString(stringChar = '打开蓝牙') {
  if (stringChar === '') return ''

  if (typeof stringChar !== 'string') return ''

  let hexCharArray = []
  let len = stringChar.length

  for (let i = 0; i < len; i++) {
    // 查询每个字符的unicode码
    console.log(stringChar.charCodeAt(i))
    // 16进制表示
    hexCharArray.push(stringChar.charCodeAt(i).toString(16))
  }
  return hexCharArray.join('') // '62535f0084dd7259'
}

/**
 * 十六进制字符串hex-string 转为 字节数组
 * 每2个字符转换
 * @param 符合16进制字符串
 */
function hexString2ByteArray(hexStr = '903132333435363738') {
  let pos = 0
  let len = hexStr.length
  // 非偶数的个数
  if (len % 2 !== 0) {
    return []
  }
  len /= 2

  console.log(len) // 9

  const resArr = []

  for (let i = 0; i < len; i++) {
    let s = hexStr.substring(pos, pos + 2)
    let v = parseInt(s, 16)
    if (v >= 127) v = v - 255 - 1
    resArr.push(v)
    pos += 2
  }
  console.log(resArr)
  return resArr // [-112, 49, 50, 51, 52, 53, 54, 55, 56]
}

/**
 * 十六进制的数组转为hex-string
 */
function byteArray2HexString(
  byteArray = [-112, 49, 50, 51, 52, 53, 54, 55, 56]
) {
  let str = '',
    len = byteArray.length

  for (let i = 0; i < len; i++) {}
}

/**
 * 十进制转为十六进制
 * 15 '0F'
 * 17 '11'
 * 使用Number 转为数字
 * toString 转为16进制
 * slice // 从后取位置
 */
function decimalNum2HexNum(num = 17) {
  return ('0' + Number(num).toString(16)).slice(-2).toUpperCase()
}
