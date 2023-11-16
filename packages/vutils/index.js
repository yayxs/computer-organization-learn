// ------ hexString 处理
const hexString = 'cdf2bcafc4dab2bfb5f7cad4415050'
// const hexString = 'cd f2 bc af c4 da b2 bf b5 f7 ca d4 41 50 50'

function hexString2Int(hexString) {
  const initValue = Number.parseInt(hexString, 16) // 将十六进制字符串转换为整数
  console.log(initValue) // 1.069344148416135e+36
}

function hexString2ByteData(hexString) {
  const byteArray = Buffer.from(hexString, 'hex') // 将十六进制字符串转换为字节数组
  console.log(byteArray)
}

function hexToBytes(hex) {
  const bytes = []
  for (let i = 0; i < hex.length; i += 2) {
    bytes.push(parseInt(hex.slice(i, i + 2), 16))
  }
  console.log(bytes)
}
hexToBytes(hexString)
