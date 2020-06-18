**生命周期函数仅存在于类组件中，函数组件每次调用都是重新运行函数，旧的组件即刻被销毁**

***

### 旧版生命周期
1.  constructor     
    constructor()只创建一次，不能使用setState
2.  componentWillMount  
    正常情况下只运行一次，可以使用setState，但是为了避免bug，最好不要使用，因为在某些特殊情况下，
    可能会被调用多次
3.  **render**  
    1.  返回一个虚拟dom，被挂载到虚拟dom树上，最终被渲染到页面中
    2.  render()不止运行一次
    3.  这里禁止使用setState
4.  **componentDidMount**
    1.  只会执行一次
    2. 可以使用setState，通常情况下会把ajax，计时器等写在这
5.  组件进入活跃状态
6.  componentWillReceiveProps   
    1.即将接收到新的属性值
    2. 该函数可能会导致一些bug，不推荐使用
7.  **shouldComponentUpdate**
    1.  指示react是否重新渲染组件，通过返回true或false来判断
    2.  默认情况下返回true
    3.  性能优化点
8.  c 
    组件即将被重新渲染
9.  componentDidUpdate  
    组件完成渲染，可以在这里做一些dom操作
10. **componentWillUnMount**    
    1. 通常在该函数中销毁一些组件依赖的资源，例如计时器
***

### 新版生命周期

