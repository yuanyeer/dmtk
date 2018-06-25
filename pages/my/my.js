// pages/My/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [{ icon:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529916423573&di=da14176284ff782c909ab481ba7275ae&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2014-09-28%2F115349111.jpg",
      title: "已购", link: "../bought/bought",subTitle:"共三个游乐艇"
    }, {
      icon: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529916423573&di=da14176284ff782c909ab481ba7275ae&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2014-09-28%2F115349111.jpg",
      title: "收藏", link: "../collection/collection", subTitle: "三个收藏等住你Pick"
      }, {
        icon: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529916423573&di=da14176284ff782c909ab481ba7275ae&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2014-09-28%2F115349111.jpg",
        title: "联系客服", link: "src:ssss"
    }, {
      icon: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529916423573&di=da14176284ff782c909ab481ba7275ae&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2014-09-28%2F115349111.jpg",
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