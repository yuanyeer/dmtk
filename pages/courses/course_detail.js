// pages/courses/course_detail.js
const util = require('../../utils/appTool.js')
const test = require('../../utils/test.js')
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemArr: [{
      color: "Red"
    }, {
      color: "Gray"
    }, {
      color: "Green"
    }, {
      color: "Blue"
    }],
    swiperHeight: 0,
    curPage: 1,
    tabBarArr: [{
      idx: 0,
      title: "课程介绍",
      isSel: false
    }, {
      idx: 1,
      title: "适用门店",
      isSel: true
    }],
    storeArr:[],
    cellImgW:0,
    cellImgH:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var screenW = util.getScrW();
    var swiperH = 455 * screenW / 750;
    this.setData({
      swiperHeight: swiperH
    })
    this.setData({
      ui_setting:App.data.ui.course,
      storeArr: test.course_stores()
    })
  },
  // 导航栏点击事件
  tabBarClickEvent: function(e) {
    var idx = e.currentTarget.dataset.idx;
    var arr = this.data.tabBarArr;
    for (var index in arr) {
      var item = arr[index]
      item.isSel = false;
      if (item.idx == idx) {
        item.isSel = true;
      }
    }

    this.setData({
      tabBarArr: arr,
      curPage: idx
    })
  },
  // 门店点击事件
  storeCellClickEvent:function() {
    App.data.router.go('store')
  },
  //立即购买
  buyNowClickEvent:function(e){
    App.data.router.go('buy')
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    wx.showLoading({
      title: '正在加载',
    })

    setTimeout(function () {
      wx.hideLoading();
      wx.showToast({
        title: '加载完成',
      })
      wx.stopPullDownRefresh()
    }, 1000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})