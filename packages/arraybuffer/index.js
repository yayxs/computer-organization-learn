{
  const buffer = new ArrayBuffer(16) // 16个字节

  console.log(buffer)

  const uint8View = new Uint8Array(buffer)

  // 设置第一个字节
  uint8View[0] = 42 // 10进制的42数字 是2a（16进制）
}

{
  // dataview
  const buffer1 = new ArrayBuffer(16)
  const dataView = new DataView(buffer1)
  dataView.setInt32(0, 123456789) // 设置32位的整数

  console.log(buffer1)
}

{
  const x = new ArrayBuffer(4) // 创建一个4字节的ArrayB
  const dataView = new DataView(x) // 操作x
  const y = 16909060 // 二进制表示为 00000001 00000010 00000011 00000100
  // 将y的不同部分按照字节存储到x中
  dataView.setInt8(0, (y >> 24) & 0xff) //
  console.log('x', x)
  console.log(new Uint8Array(x))
}

{
  // arrayBuffer 转为 hexString
  function arrayBufferToHexString(buffer) {
    // 使用视图
    const uint8View = new Uint8Array(buffer)
    let hexString = ''
    for (let i = 0; i < uint8View.length; i++) {
      let byte = uint8View[i].toString(16) // 转为16进制字符串

      if (byte.length === 1) {
        byte = '0' + byte
      }

      hexString += byte
    }
    console.log(hexString)
  }
}
