const loop = () => {
  let sum = 0
  for (let i = 0; i <= 100; i++) {
    sum += 0.1
  }
  console.log(sum)

  console.log(0.1 + 0.2)
}

loop()

/**
 * 双精度浮点数：1位符号部分 + 11位指数部分 + 52位尾数部分
 * 单精度浮点数 1位符号位 8位指数位 23位尾数部分
 * 1表示负数
 * 0 表示正或者0
 */

console.log('main.js run')
