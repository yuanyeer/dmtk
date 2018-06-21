// pages/courses/courses.js
const util = require('../../utils/appTool.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topArr: [{ id: 0, title: "年龄段", select: "selected" }, { id: 1, title: "课时", select: "" }, { id: 2, title: "价格", select: "" }],
    recArr: [{ url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg", title: "英语早教班，坚持全英对话学习", price: 11200, count: 9 }, { url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg", title: "英语早教班，坚持全英对话学习", price: 11200, count: 9 }, { url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg", title: "英语早教班，坚持全英对话学习", price: 11200, count: 9 }, { url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg", title: "英语早教班，坚持全英对话学习", price: 11200, count: 9 }, { url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg", title: "英语早教班，坚持全英对话学习", price: 11200, count: 9 }, { url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg", title: "英语早教班，坚持全英对话学习", price: 11200, count: 9 }],
    contentPadding: 15,
    contentItemW: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var screenW = util.getScrW();
    var contentItemW = (screenW - this.data.contentPadding * 3) * 0.5;
    this.setData({
      contentItemW: contentItemW
    })
  },
  topItemClickEvent:function(e) {
    var selectId = e.target.dataset.itemid
    var arr = this.data.topArr;
    for(var index in arr) {
      var item = arr[index]
      if (item.id == selectId) {
        item['select'] = "selected"
      }else {
        item['select'] = ""
      }
    }
    this.setData({
      topArr: arr
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