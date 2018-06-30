// pages/Home/home.js

const util = require('../../utils/appTool.js')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemArr: [{ color: "Red" }, { color: "Gray" }, { color: "Green" }, { color: "Blue" }],
    dotsArr:["1","2","3","4"],
    swiperHeight:175,
    functionArr: [{ title: "益智游戏", color: "Red" }, { title: "儿童英语", color: "Blue" }, { title: "才艺学习", color: "Green" }, { title: "婴儿早教", color: "Brown" }],
    recArr: [{ tag: "莫莉幻想", url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg", title: "英语早教班，坚持全英对话学习", price: 11200, count: 9 }, { tag: "莫莉幻想", url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg", title: "英语早教班，坚持全英对话学习", price: 11200, count: 9 }, { tag: "莫莉幻想", url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg", title: "英语早教班，坚持全英对话学习", price: 11200, count: 9 }, { tag: "莫莉幻想", url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg", title: "英语早教班，坚持全英对话学习", price: 11200, count: 9 }, { url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg", title: "英语早教班，坚持全英对话学习", price: 11200, count: 9 }, { tag: "其他", url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg", title: "英语早教班，坚持全英对话学习", price: 11200, count: 9 }],
    contentPadding:15,
    contentItemW:0,
    hot:{
      url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
      title:"益智手绘游戏，提升孩子美感认知和绘画能力",
      price:1185,
      comments:185,
      stars:4.5
    },
    botImageW: 0,
    swiperCurrent:0,
    currentIndex:0,

    //搜索框宽高
    searchBarWidth:0,
    searchBarHeight:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var screenW = util.getScrW();
    var contentItemW = (screenW - this.data.contentPadding * 3)*0.5;
    this.setData({
      contentItemW: contentItemW
    })
    console.log(this.data.contentItemW)


    //底部图片宽度
    var botImageW = (screenW - this.data.contentPadding * 2);
    this.setData({
      botImageW: botImageW
    })
    console.log(this.data.botImageW);


    //搜索框宽高
    var searchBarW = screenW * 0.8;
    var searchBarH = searchBarW * 80 / 600;

    this.setData({
      searchBarWidth: searchBarW,
      searchBarHeight: searchBarH
    })
  },
  //轮播图改变
  onSlideChangeEnd:function(e){
    var index = e.detail.current;
    this.setData({
      swiperCurrent:index
    })
  },
  // 中间功能按钮点击
  functionBtnClickEvent:function(e) {
    wx.navigateTo({
      url: '../courses/courses',
    })
  },
  // 课程点击
  courseClickEvent:function() {
    wx.navigateTo({
      url: '../courses/course_detail',
    })
  },
  // 扫码
  scanClickEvent:function() {
    wx.navigateTo({
      url: '../scan/scan',
    })
  },
  // 定位点击
  locationClickEvent:function() {
    wx.navigateTo({
      url: '../location/location',
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