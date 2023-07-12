/**
 * 移位运算 二进制数值的各数进行左右移位
 * 分为左移和右移
 * 左侧是值 右侧是位数
 * // x << y 等于 x乘以 2的y次方


const a = 9 << 2
const b = -1 << 2
const c = 0 << 2

 */

let hexStr = '012db1b1bea911010001174811011801230006295199ffffffffffffffffffffffffffffffffffffffffffffff90000206ffffffff9000'
// 把hex字符串转为
const buffer = new Uint8Array(hexStr.match(/[\da-f]{2}/gi).map( (h)=> {
  return Number.parseInt(h, 16)
}))
const hexStrLen = hexStr.length
const bufferLen = buffer.length
let index = 0
let resObj = {}
// 判断buf的长度
if(bufferLen >=4){
  while(index < bufferLen){
    const commandIndex = buffer[index++] 
    let temp = buffer[index]
    // console.log(commandIndex,temp)
    index += temp -1
    console.log(`第${commandIndex}条`,buffer[index],buffer[index+1])
    if (buffer[index] == 0x90 && buffer[index + 1] == 0x00) {
      index += 2
      
    } else {
      break
    }
  }
}


let balance = buffer.slice(49,53)
let intBalance = balance[0] & 0xff << 24

/**
 * 39的8位二进制数
 * 0010, 0111
 * 10, 011100
 */