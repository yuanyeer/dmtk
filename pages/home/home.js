// pages/Home/home.js

const util = require('../../utils/appTool.js')
const pro = require('../../utils/wxReq.js')
const req = require('../../api/appFunc.js')
const test = require('../../utils/test.js')

var map = require('../../utils/amap-wx.js');

const App = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemArr: [],
    dotsArr: ["1", "2", "3", "4"],
    swiperHeight: 175,
    functionArr: [],
    recArr: [],
    contentPadding: 15,
    contentItemW: 0,
    hot: {
      url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
      title: "益智手绘游戏，提升孩子美感认知和绘画能力",
      price: 1185,
      comments: 185,
      star: 4.5,
      starLevel: 1
    },
    botImageW: 0,
    swiperCurrent: 0,
    currentIndex: 0,

    //搜索框宽高
    searchBarWidth: 0,
    searchBarHeight: 0,

    //小点动画
    dotsAnimation: '',
    star: 5,
    cityName:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var screenW = util.getScrW();
    var contentItemW = (screenW - this.data.contentPadding * 3) * 0.5;
    this.setData({
      contentItemW: contentItemW
    })

    this.$wuxToast = App.wux(this).$wuxToast

    //底部图片宽度
    var botImageW = (screenW - this.data.contentPadding * 2);
    this.setData({
      botImageW: botImageW
    })



    //搜索框宽高
    var searchBarW = screenW * 0.8;
    var searchBarH = searchBarW * 80 / 600;

    this.setData({
      searchBarWidth: searchBarW,
      searchBarHeight: searchBarH
    })

    
    this.initData();

    this.initMap();
  },
  //加载地图
  initMap:function() {
    var self = this;
    var myMap = new map.AMapWX({ key: 'a6c1434c336f8d2e33cb26ff6c7142cf' });
    myMap.getRegeo({
      success: function (data) {
        //成功回调
        console.log('获取当前位置成功')
        var cityName = data[0].regeocodeData.addressComponent.city;
        cityName = cityName.split("市").join("");
        self.setData({
          cityName: cityName
        })
      },
      fail: function (info) {
        //失败回调
        console.log('获取当前位置失败')
        console.log(info)
      }
    })
  },
  //加载数据
  initData: function(e) {
    this.testData();
    // wx.showLoading({
    //   title: '正在加载',
    // })
    // //轮播图
    // var self = this
    // pro.Get(req.api.swiper).then(res => {
    //   self.setData({
    //     itemArr: res.data.datas
    //   })
    //   return pro.Get(req.api.midfun);
    // }, err => {
    //   console.log(err)
      
    //   return pro.Get(req.api.midfun);
    // })
    // //中间按钮
    // .then(res => {
    //   self.setData({
    //     functionArr: res.data.datas
    //   })
    //   return pro.Get(req.api.course);
    // }, err => {
      
    //   console.log(err)
    //   return pro.Get(req.api.course);
    // })
    // //课程
    // .then(res => {
    //   wx.hideLoading()
    //   self.setData({
    //     recArr: res.data.datas
    //   })
    //   wx.stopPullDownRefresh()
    // }, err => {
      
    //   console.log(err)
    //   wx.hideLoading()
    //   wx.showModal({
    //     title: '提示',
    //     content: App.globalData.errText,
    //     showCancel: false
    //   })
    //   wx.stopPullDownRefresh()
    //   self.testData();
    // })
  },
  //填上测试数据
  testData:function(){
    this.setData({
        itemArr: test.swiper().datas
    })

    this.setData({
      functionArr: test.midfun().datas
    })

    this.setData({
      recArr: test.course().datas
    })

    wx.stopPullDownRefresh()
  },
  //轮播图改变
  onSlideChangeEnd: function(e) {
    var index = e.detail.current;
    this.setData({
      swiperCurrent: index
    })

  },
  //更多课程
  moreCourseClickEvent:function() {
    wx.navigateTo({
      url: '../courses/courses',
    })
  },
  //热门课程点击
  hotClickEvent:function() {
    wx.navigateTo({
      url: '../courses/course_detail',
    })
  },
  //搜索栏点击
  searchClickEvent: function(e) {
    wx.navigateTo({
      url: '../search_resutl/search_result',
    })
  },
  // 中间功能按钮点击
  functionBtnClickEvent: function(e) {
    wx.navigateTo({
      url: '../courses/courses',
    })
  },
  // 课程点击
  courseClickEvent: function() {
    wx.navigateTo({
      url: '../courses/course_detail',
    })
  },
  // 扫码
  scanClickEvent: function() {
    wx.navigateTo({
      url: '../scan/scan',
    })
  },
  // 定位点击
  locationClickEvent: function() {
    wx.navigateTo({
      url: '../location/location',
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
      console.log('下拉刷新')
      this.initData()
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