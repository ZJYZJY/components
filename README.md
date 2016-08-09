# 需求完成情况

### 需求列表

* ~~导航栏~~
* 列表/图标
* 树
* ~~统计图表~~
* ~~消息，自动更新消息数量~~
* 弹出菜单
* ~~自动提示框，不需要交互响应~~
* ~~弹出窗口浏览~~
* ~~大文件批量上传~~
* 收发邮件，富文本编辑器

<<<<<<< HEAD
### 导航栏
=======
### 导航栏 {#nav}
>>>>>>> b587d1f9bc1a9a2b1f92cd6c45a811ceebf8c660

方案：Bootstrap

```js
// 引入js和css文件
<link href="http://apps.bdimg.com/libs/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet">
<script src="http://cdn.bootcss.com/bootstrap/4.0.0-alpha.3/js/bootstrap.min.js"></script>

<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
  <div class="navbar-header"></div>
  <div class="collapse navbar-collapse"></div>
</nav>
```

效果：
![导航栏](./assets/nav.PNG)

### 列表/图标

方案：

效果：

### 树

方案：

效果：

### 统计图表

方案：[Highcharts](http://www.hcharts.cn/api/index.php)

```javascript
// 引入js文件
<script src="http://cdn.hcharts.cn/highcharts/highcharts.js"></script>

var chart = new Highcharts.Chart({

 chart: {
   renderTo: 'con', // 图标渲染的节点
   type: 'column'
 },
 title: {
   // 副标题
 },
 subtitle: {
   // 副标题
 },
 xAxis: {
   // 横坐标参数
 },
 yAxis: {
   // 纵坐标参数
 }
 tooltip: {
   // 鼠标划过图表时的参数
 },
 plotOptions: {
   // 其他样式设置
 },
 series: [{ // 数据源
   name: 'New York',
   data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
 }, {
   name: 'London',
   data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
 }, {
   name: 'Berlin',
   data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
 }]
 })
```

效果：

![统计图表](./assets/chart.PNG)

### 消息

方案：bootstrap &gt; badge

```javascript
<a class="message">消息 <span class="badge">5</span></a>
```

效果：![消息](./assets/messages.PNG)

### 弹出菜单

方案：

效果：

### 提示框

方案：[Toastr](https://github.com/CodeSeven/toastr)

```javascript
// Display an info toast with no title
toastr.info('Are you the 6 fingered man?')

// Display a warning toast, with no title 
toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!')

// Display a success toast, with a title 
toastr.success('Have fun storming the castle!', 'Miracle Max Says')

// Display an error toast, with a title 
toastr.error('I do not think that word means what you think it means.', 'Inconceivable!')

// Immediately remove current toasts without using animation 
toastr.remove()

// Remove current toasts using animation 
toastr.clear()
```

效果：

![提示框](./assets/toastr.PNG)

### 浮动窗口浏览

方案：bootstrap &gt; modal

效果：

### 文件批量上传

方案：[Stream上传插件](http://www.twinkling.cn/)

效果：

### 富文本编辑器 

方案：[UEditor](http://fex.baidu.com/ueditor/)

效果：

