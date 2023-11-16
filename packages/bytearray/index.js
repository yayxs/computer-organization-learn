const byteArray = new Uint8Array(4)
byteArray[0] = 0x12
byteArray[1] = 0x34
byteArray[2] = 0xab
byteArray[3] = 0xcd

console.log(byteArray)

// 访问字节数组的元素
console.log(byteArray[0]) // 18

// 判断是不是字节数组

console.log(ArrayBuffer.isView(byteArray))
