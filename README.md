# 该分支学习setState的一些相关的特性

setSate对状态的改变**可能**是异步的，调用setState后不是马上触发render()  
如果改变状态的代码处在某个html元素的事件中，则其是异步的，否则是同步的  
如果遇到某个事件，需要同步调用多次setState，则使用函数写法的setState

***
最佳实践
1. 把setState都当成异步的
2. 不要相信setState改变后的状态
3. 如果要使用改变后的状态，需要使用回调函数
4. 如果需要使用多次setState，需要写成函数的形式
***

**react对*异步*的setState做了优化，把多次setState合并之后执行，在执行render()**
