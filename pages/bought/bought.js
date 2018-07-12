// pages/bought/bought.js
const util = require('../../utils/appTool.js')
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderArr: [{
      top: "世宇乐园",
      url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
      title: "英语早教班，坚持全英对话学习",
      next: "7.词语性转化记忆技巧",
      complete: "6.单词快速记忆",
      isDone:true,
      doneText:"宝宝好棒，完成了所有课程"
    }, {
      top: "世宇乐园",
      url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
      title: "英语早教班，坚持全英对话学习",
      next: "7.词语性转化记忆技巧",
      complete: "6.单词快速记忆"
    }, {
      top: "世宇乐园",
      url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
      title: "英语早教班，坚持全英对话学习",
      next: "7.词语性转化记忆技巧",
      complete: "6.单词快速记忆"
    },
    {
      top: "世宇乐园",
      url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
      title: "英语早教班，坚持全英对话学习",
      next: "7.词语性转化记忆技巧",
      complete: "6.单词快速记忆"
    }],
    imgW: 0,
    imgH: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var screenW = util.getScrW();

    var imgW = screenW * 0.44;
    var imgH = imgW * 100 / 165;

    console.log(imgW + "--" + imgH)

    this.setData({
      imgW: imgW,
      imgH: imgH
    })
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