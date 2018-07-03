// pages/My/my.js
const util = require('../../utils/appTool.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [{ icon:"../../images/my/bou.png",
      title: "已购", link: "../bought/bought",subTitle:"共三个游乐艇"
    }, {
        icon: "../../images/my/col.png",
      title: "收藏", link: "../collection/collection", subTitle: "三个收藏等住你Pick"
      }, {
        icon: "../../images/my/kefu.png",
        title: "联系客服", link: "src:ssss"
    }, {
        icon: "../../images/my/set.png",
      title: "设置", link: "src:ssss"
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    

  },
  setCellClickEvent:function(e) {
    var link = e.detail.text.currentTarget.dataset.link
    wx.navigateTo({
      url: link,
    })
  },
  vipItemClickEvent:function(e){
    wx.navigateTo({
      url: '../vip/vip',
    })
  },
  newClickEvent:function(e){
    wx.navigateTo({
      url: '../news/news',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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