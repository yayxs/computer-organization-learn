`>>` 右移位运算符 二进制表示向右移动

> > 是什么意思？

答案：《JS 高程 4》中说，`有符号右移`使用两个大于号`>>` ，会将数值的所有 32 位都向右移动，同时保留符号。移位后会出现空位，会用符号位的值填充空位

```js
/**
 * 数字64
 *
 *
 * 0                                      000, 0000, 0000, 0000, 0000, 0000, 0000, 0000
 * (0秘密的符号位)                         000, 0000, 0000, 0000, 0000, 0000, 0100, 0000
 *
 * 64>>5             (这块差的补上秘密的符号位)    000, 0000, 0000, 0000, 0000, 0000, 010        0, 0000
 */
```

右移运算符
操作数的二进制表现形式 向右

右移 向右移位 但是左侧的补位的不是直接补充 0 而是复制最左侧位来填充
12 0000 0000 0000 0000 0000 0000 0000 1100
0000 0000 0000 0000 0000 0000 0000 0000
