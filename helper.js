{
  /**
   * parseInt 解析字符串
   * 返回一个十进制的整数
   * 使用toString 解析
   * 参数2 2到36
   */

  const useParseInt = (string, radix) => {
    if (typeof string === 'string') {
      const is10Num = Number.parseInt(string, radix)
      if (isNaN(is10Num)) {
        console.log('解析的结果是isNaN')
        return -1
      } else {
        console.log('解析的结果是', is10Num)
        return is10Num
      }
    } else {
      console.log('参数1不是字符串')
      return Number.parseInt(string, radix)
    }
  }
  const a = useParseInt('123', 5)
}
