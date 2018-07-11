// pages/buy/buy.js
const util = require('../../utils/appTool.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgW:0,
    imgH:0,
    orderInfo:{
      infos: [{ title: "课程名称", value:"英语初识游乐版，坚持全英教学"},
        { title: "订单状态", value: "待支付",isSpe:true}, { title: "订单编号", value: "4546131156484123123145" }, { title: "下单时间", value: "2018/09/26 09:55" }]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var screenW = util.getScrW();

    var imgW = screenW * 0.44;
    var imgH = imgW * 200 / 330;

    this.setData({
      imgW: imgW,
      imgH: imgH
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