const util = require('../../utils/appTool.js')

const ui = require('../../utils/ui-setting.js')
const test = require('../../utils/test.js')
const App = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topArr:[{title:"可使用",isSel:true,tag:0},{title:"已失效",isSel:false,tag:1}],
      isVip:false,
      orderListTop:0,
      curPage:0,
      ui_setting:{}
  },
 //顶部分类点击
  orderCatClickEvent:function(e){
    var curPage = 0;
    var selIdx = e.currentTarget.dataset.idx;
    var arr = this.data.topArr;
    for(var index in arr) {
      var item = arr[index]
      item.isSel = false;
      if(item.tag == selIdx) {
        item.isSel = true;
        curPage = item.tag;
      }
    }

   
    this.setData({
      topArr: arr,
      curPage: curPage,
      
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var orderListTop = this.data.isVip == true? 20 : 30;
  
    this.setData({
      orderListTop: orderListTop,
      isVip: App.data.isVip,
      ui_setting: App.data.ui.order,
      orders: test.orders(),
      enableOrders: test.enableOrders()
    })

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  //vip点击
  vipClickEvent:function(){
    App.data.router.go('vip')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showLoading({
      title: '正在加载',
    })

    setTimeout(function(){
      wx.hideLoading();
      wx.showToast({
        title: '加载完成',
      })
      wx.stopPullDownRefresh()
    },1000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})