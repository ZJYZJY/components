# 功能列表

* [导航栏](#导航栏)
* [列表/图标](#列表/图标)
* [树](#树)
* [统计图表](#统计图表)
* [消息，自动更新消息数量](#消息)
* [弹出菜单](#弹出菜单)
* [自动提示框，不需要交互响应](#提示框)
* [弹出窗口浏览](#浮动窗口浏览)
* [文件批量上传](#文件批量上传)
* [收发邮件，富文本编辑器](#富文本编辑器)

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

### 导航栏

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
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
### 列表/图标

方案：[jQueryUI](http://www.htmleaf.com/jQuery/Layout-Interface/20141122562.html)

引入jQuery和jQuery UI文件：
```javascript
<link rel='stylesheet' href='http://libs.useso.com/js/jqueryui/1.10.4/css/jquery-ui.min.css'>
<script src='http://libs.useso.com/js/jquery/1.11.0/jquery.min.js'></script>
<script src='http://libs.useso.com/js/jqueryui/1.10.4/jquery-ui.min.js'></script>
```
```javascript
<main id='container'>
  <header id='header'>
    <span>View:</span>
    <button class='view-list'>List</button>
    <button class='view-grid'>Grid</button>
  </header>
  <ol class='grid' id='frame'>
    <!-- 每一个frame代表一个文件 -->
    <li class='frame'>
      <div class='inset'>
        <div class='image'></div>
        <div class='info'>
          <div class='title'>Lorem Ipsum</div>
          <div class='description'></div>
          <div class='shares'>
            <div class='icon-lik likes'></div>
            <div class='icon-ask comments'></div>
          </div>
        </div>
      </div>
    </li>
  </ol>
  ......
</main>
```

效果：

![缩略图](./assets/gridview.PNG)
![列表](./assets/listview.PNG)
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
### 树

方案：[bootstrap-treeview](http://www.htmleaf.com/jQuery/Menu-Navigation/201502141379.html)

```javascript
<!-- Required Stylesheets -->
<link href="./css/bootstrap.css" rel="stylesheet">
 
<!-- Required Javascript -->
<script src="./js/jquery.js"></script>
<script src="./js/bootstrap-treeview.js"></script>
```
设置控件容器：
```javascript
<div id="tree"></div>  
```
最基本的调用方法（详细见参考链接）：
```javascript
$('#tree').treeview({data: defaultData});
```
效果：

![文件树](./assets/treeview.PNG)
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
### 统计图表

方案：[Highcharts](http://www.hcharts.cn/api/index.php)

```javascript
// 引入js文件
<script src="http://cdn.hcharts.cn/highcharts/highcharts.js"></script>
```
初始化图表：
```javascript
var chart = new Highcharts.Chart({

 chart: {
   renderTo: 'con', // 图表渲染的节点id
   type: 'column'   // 图表的类型
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
   // 鼠标划过图表时的提示信息
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
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
### 消息

方案：bootstrap &gt; badge

```javascript
<a class="message">消息 <span class="badge">5</span></a>
```

效果：![消息](./assets/messages.PNG)
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
### 弹出菜单

方案：[bootstrap-menu](https://github.com/dgoguerra/bootstrap-menu)

```javascript
<script src="./js/BootstrapMenu.min.js"></script>
```
应用举例：
```javascript
var menu = new BootstrapMenu('#button', {
  actions: [{
      name: 'Action',
      onClick: function() {
        // run when the action is clicked
      }
    }, {
      name: 'Another action',
      onClick: function() {
        // run when the action is clicked
      }
    }, {
      name: 'A third action',
      onClick: function() {
        // run when the action is clicked
      }
  }]
});   
```

效果：

![菜单](./assets/context-menu.PNG)
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
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
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
### 浮动窗口浏览

方案：bootstrap &gt; modal

```html
  <button type="button" class="btn btn-success btn-lg" data-toggle="modal" data-target="#myModal">悬浮窗</button>
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                          &times;
                    </button>
          <h4 class="modal-title" id="myModalLabel">
            模态框（Modal）标题
          </h4>
        </div>
        <div class="modal-body">
          <iframe src="http://www.baidu.com" width="100%" height="100%" />
        </div>
      </div>
    </div>
  </div>
```

效果：

![浮动窗](./assets/modal.PNG)
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
### 文件批量上传

方案：[Stream上传插件](http://www.twinkling.cn/)

```javascript
    <link href="./css/stream-v1.css" rel="stylesheet">
    <script src="./js/stream-v1.js"></script>
```

相关参数配置：

```javascript
    /**
     * 配置文件（如果没有默认字样，说明默认值就是注释下的值）
     */
    var config = {
        browseFileId: "i_select_files", /** 选择文件的ID, 默认: i_select_files */
        browseFileBtn: "<div class='btn btn-default'>请选择文件</div>", /** 显示选择文件的样式, 默认: `<div>请选择文件</div>` */
        dragAndDropArea: "i_select_files", /** 拖拽上传区域，Id（字符类型"i_select_files"）或者DOM对象,取消该项可不设置拖拽区域,默认: `i_select_files` */
        dragAndDropTips: "<span>把文件(文件夹)拖拽到这里</span>", /** 拖拽提示, 默认: `<span>把文件(文件夹)拖拽到这里</span>` */
        filesQueueId: "i_stream_files_queue", /** 文件上传容器的ID, 默认: i_stream_files_queue */
        filesQueueHeight: 150, /** 文件上传容器的高度（px）, 默认: 450 */
        messagerId : "i_stream_message_container", /** 消息显示容器的ID, 默认: i_stream_message_container */
        multipleFiles: true, /** 多个文件一起上传, 默认: false */
        autoUploading: false, /** 选择文件后是否自动上传, 默认: true */
        autoRemoveCompleted: true, /** 是否自动删除容器中已上传完毕的文件, 默认: false */
        maxSize: 104857600//, /** 单个文件的最大大小，默认:2G */
        retryCount : 5, /** HTML5上传失败的重试次数 */
        postVarsPerFile : { /** 上传文件时传入的参数，默认: {} */
          param1: "val1",
          param2: "val2"
        },
        swfURL: "swf/FlashUploader.swf", /** SWF文件的位置 */
        tokenURL: "php/upload.php?action=tk", /** 根据文件名、大小等信息获取Token的URI（用于生成断点续传、跨域的令牌） */
        frmUploadURL: "php/upload.php?action=fd;", /** Flash上传的URI */
        uploadURL: "php/upload.php?action=up", /** HTML5上传的URI */
        simLimit: 200, /** 单次最大上传文件个数 */
        extFilters: [".txt", ".rpm", ".rmvb", ".gz", ".rar", ".zip", ".avi", ".mkv", ".mp3"], /** 允许的文件扩展名, 默认: [] */

        onSelect: function (list) {//选择文件后的响应事件
            // TODO
        },
        onMaxSizeExceed: function (size, limited, name) {//文件大小超出的响应事件
            toastr.error("文件大小超出限制！");
        },
        onFileCountExceed: function (selected, limit) {//文件数量超出的响应事件
            toastr.error("文件数量超出限制！");
        },
        onExtNameMismatch: function (name, filters) {//文件的扩展名不匹配的响应事件
            toastr.error("不支持的文件类型！");
        },
        onCancel: function (file) {//取消上传文件的响应事件
            toastr.warning("文件上传取消。");
        },
        onComplete: function (file) {//单个文件上传完毕的响应事件
            // TODO
        },
        onQueueComplete: function () {//所以文件上传完毕的响应事件
            toastr.success("文件上传完成。");
        },
        onUploadError: function (status, msg) {//文件上传出错的响应事件
            toastr.error("文件上传出错！");
        }
    };
    var _t = new Stream(config);
```
效果：

![上传文件](./assets/upload.PNG)
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
### 富文本编辑器 

方案：[LineControl Editor](https://github.com/suyati/line-control)

```javascript
<link href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
<link href="editor.css" type="text/css" rel="stylesheet"/>
<script src="editor.js"></script>  
```
设置富文本编辑器的容器：
```javascript
<div id="rtf-editor"></div>
```
初始化富文本编辑器：
```javascript
$("#rtf-editor").Editor();
```
初始化插件的时候添加一些配置参数：
```javascript
editor('createMenuItem', {
  "text": "TouchGlasses", //Text replaces icon if its not available
  "icon":"fa fa-glass", //This is a Font-Awesome Icon 
  "tooltip": "Touch Glasses",
  "custom": function(button, parameters){ 
    //Your Custom Function.
    alert("Cheers!!!");
  },
  "params": {'option1':"value1"} //Any custom parameters you want to pass
                                //to your custom function.
 });
```
编辑器的默认配置：
```javascript
'texteffects':true,
'aligneffects':true,
'textformats':true,
'fonteffects':true,
'actions' : true,
'insertoptions' : true,
'extraeffects' : true,
'advancedoptions' : true,
'screeneffects':true,
'bold': true,
'italics': true,
'underline':true,
'ol':true,
'ul':true,
'undo':true,
'redo':true,
'l_align':true,
'r_align':true,
'c_align':true,
'justify':true,
'insert_link':true,
'unlink':true,
'insert_img':true,
'hr_line':true,
'block_quote':true,
'source':true,
'strikeout':true,
'indent':true,
'outdent':true,
'fonts':fonts,
'styles':styles,
'print':true,
'rm_format':true,
'status_bar':true,
'font_size':fontsizes,
'color':colors,
'splchars':specialchars,
'insert_table':true,
'select_all':true,
'togglescreen':true
```

效果：

![富文本编辑器](./assets/editor.PNG)

