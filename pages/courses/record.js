// pages/courses/record.js
const util = require('../../utils/appTool.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [{
      store: "世宇乐园（政安店）",
      image: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
      title: "英语早教班，坚持全英对话学习11",
      tag: "第六课时",
      date: "2018/09/26 09:55",
      orderId:"456456456465465"
    }, {
      store: "世宇乐园（政安店）",
      image: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
      title: "英语早教班，坚持全英对话学习11",
      tag: "第六课时",
      date: "2018/09/26 09:55",
      orderId: "456456456465465"
      }, {
        store: "世宇乐园（政安店）",
        image: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
        title: "英语早教班，坚持全英对话学习11",
        tag: "第六课时",
        date: "2018/09/26 09:55",
        orderId: "456456456465465"
    }, {
      store: "世宇乐园（政安店）",
      image: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
      title: "英语早教班，坚持全英对话学习11",
      tag: "第六课时",
      date: "2018/09/26 09:55",
      orderId: "456456456465465"
      }, {
        store: "世宇乐园（政安店）",
        image: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
        title: "英语早教班，坚持全英对话学习11",
        tag: "第六课时",
        date: "2018/09/26 09:55",
        orderId: "456456456465465"
    }, {
      store: "世宇乐园（政安店）",
      image: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
      title: "英语早教班，坚持全英对话学习11",
      tag: "第六课时",
      date: "2018/09/26 09:55",
      orderId: "456456456465465"
    }],
    imgW: 0,
    imgH: 0,
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

  orderCellClickEvent:function() {

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
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})