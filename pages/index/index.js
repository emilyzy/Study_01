//index.js
//获取应用实例
const app = getApp()

Page({
  //为页面提供数据的
  //data就是界面和逻辑之间的桥梁
  data: {
   message:'Hello Em',
   person:{
     name:'zhang',
     age:18
   },
   viewClassName:'hello',
   todos:[
     { name: 'JS', completed: false },
     { name: 'html', completed: true },
     { name: 'css', completed: false }
   ]
  },
  //页面开始执行时调用onLoad方法
  onLoad: function () {
    app.foo()
  }
})
