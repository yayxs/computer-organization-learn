let hexString = 'A501C2'

let wx = 1

let luWangFenBaoLen = 205 // 路网长度 205

let pageNum = parseInt(hexString.length / 2 / luWangFenBaoLen) // 0

console.log((hexString.length / 2) % luWangFenBaoLen)

console.log(pageNum)
