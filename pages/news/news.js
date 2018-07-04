// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr:[
      {
        date:"2018年10月10日",
        title:"a new job!",
        text:"asd nqui1 eq kozx nuihnuizahn zijnc,asd nqui1 eq kozx nuihnuizahn zijnc,asd nqui1 eq kozx nuihnuizahn zijnc,asd nqui1 eq kozx nuihnuizahn zijnc,asd nqui1 eq kozx nuihnuizahn zijnc,asd nqui1 eq kozx nuihnuizahn zijnc",
        listImgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529919316443&di=e31337f73c9a7c06ce478b2e63743fe8&imgtype=0&src=http%3A%2F%2Fwww.jinmalvyou.com%2FPublic%2Fuploads%2Fgoods_img%2Foriginal_img%2F201705%2F80f25a4ce5552092733cc149099128f0.jpg"},
      {
        date: "2018年10月10日",
        title: "a new job!",
        text: "asd nqui1 eq kozx nuihnuizahn zijnc,asd nqui1 eq kozx nuihnuizahn zijnc,asd nqui1 eq kozx nuihnuizahn zijnc,asd nqui1 eq kozx nuihnuizahn zijnc,asd nqui1 eq kozx nuihnuizahn zijnc,asd nqui1 eq kozx nuihnuizahn zijnc",
        listImgUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529919316443&di=e31337f73c9a7c06ce478b2e63743fe8&imgtype=0&src=http%3A%2F%2Fwww.jinmalvyou.com%2FPublic%2Fuploads%2Fgoods_img%2Foriginal_img%2F201705%2F80f25a4ce5552092733cc149099128f0.jpg"
      }, {
        date: "2018年10月10日",
        title: "a new job!",
        text: "asd nqui1 eq kozx nuihnuizahn zijnc,asd nqui1 eq kozx nuihnuizahn zijnc,asd nqui1 eq kozx nuihnuizahn zijnc,asd nqui1 eq kozx nuihnuizahn zijnc,asd nqui1 eq kozx nuihnuizahn zijnc,asd nqui1 eq kozx nuihnuizahn zijnc",
        listImgUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530683356469&di=2bcf42308ed7eaed13b37af37fc3a905&imgtype=0&src=http%3A%2F%2Fimage.bitautoimg.com%2Fappimage%2Fmedia%2F20180122%2Fw1706_h960_939acd9ef98842699fb8ac92bbb13096.jpeg"
      },
      {
        date: "2018年10月10日",
        title: "a new job!",
        text: "asd nqui1 eq kozx nuihnuizahn zijnc,asd nqui1 eq kozx nuihnuizahn zijnc,asd nqui1 eq kozx nuihnuizahn zijnc,asd nqui1 eq kozx nuihnuizahn zijnc,asd nqui1 eq kozx nuihnuizahn zijnc,asd nqui1 eq kozx nuihnuizahn zijnc",
        listImgUrl:null
      },
      
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  //新闻点击
  newsClickEvent:function(e){
    wx.navigateTo({
      url: 'new_detail',
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