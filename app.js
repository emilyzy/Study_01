//app.js
//1.小程序不是运行在浏览器中，所以没有BOM,DOM对象

//2.小程序的JS中有一些额外的成员（全局成员）
//APP方法--用于定义应用程序实例对象
//Page方法--用于定义页面对象
//getApp方法--用来获取全局应用程序对象
//getCurrentPages方法--用来获取当前页面的调用栈（数组，最后一个就是当前页面）

//wx对象--用来提供核心API
console.log(wx)

//3.小程序的JS是支持CommonJS规范的

const foo=require('./utils/foo.js')
foo.say('word')


App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
foo:function(){
  console.log("调用foo")
}
})