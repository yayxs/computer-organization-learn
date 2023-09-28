// let hexString = 'A501C2'

// let wx = 1

// let luWangFenBaoLen = 205 // 路网长度 205

// let pageNum = parseInt(hexString.length / 2 / luWangFenBaoLen) // 0

// console.log((hexString.length / 2) % luWangFenBaoLen)

// console.log(pageNum)

import iconv from 'iconv-lite'

function gbkToHexString(str) {
  const buffer = iconv.encode(str, 'gbk')
  let hexStr = ''
  for (let i = 0; i < buffer.length; i++) {
    const hexCode = buffer[i].toString(16).toUpperCase().padStart(2, '0')
    hexStr += hexCode
  }
  return hexStr
}

// 示例用法
const gbkString = '蓝牙开启了吗？'
const hexString = gbkToHexString(gbkString)
console.log(hexString)
