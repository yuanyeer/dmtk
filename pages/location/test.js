// pages/location/test.js
var map = require('../../utils/amap-wx.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:0,
    longitude:0,
    markers:[{
      iconPath: "../../images/store/map-loc.png",
      id: 0,
      latitude: 0,
      longitude: 0,
      width: 22,
      height: 27,
      callout:{
        content:"正在获取位置",
        bgColor:"#000000",
        color:"#ffffff",
        borderRadius:10,
        padding:10,
        display:"ALWAYS",
        fontSize:10
      }
    }],
    destination:{
      name:"玩具反斗城（政安店）",
      latitude: 23.16,
      longitude: 113.23,
    },
    localPostion:{
      latitude: 0,
      longitude: 0
    },
    //路线
    route:{
      distance:0
    },
    myMap:{}
  },

  //地址点击
  markClickEvent(e) {
    var mark = this.data.markers[0]
    wx.openLocation({
      latitude: mark.latitude,
      longitude: mark.longitude,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '正在加载位置信息',
    })
    this.initMap();
  },
  //加载地图
  initMap: function () {
    var self = this;
    var myMap = new map.AMapWX({ key: 'a6c1434c336f8d2e33cb26ff6c7142cf' });
    //设置地图
    this.setData({
      myMap: myMap
    })

    //开始加载地点
    self.getLocalPosition();
  },

  //获取当前位置
  getLocalPosition:function() {
    var self = this;
    self.data.myMap.getRegeo({
      success: function (data) {
        //成功回调
        console.log('successs')
        console.log(data[0])
        var localPostion = self.data.localPostion;
        localPostion.latitude = data[0].latitude;
        localPostion.longitude = data[0].longitude;
        self.setData({
          localPostion: localPostion
        })
        console.log('local:');
        console.log(self.data.localPostion)
        self.getRoute();
      },
      fail: function (info) {
        //失败回调
        console.log('error')
        console.log(info)
      }
    })
  },
  //获取路线 
  getRoute:function() {
    var self = this;
    var destination = self.data.destination;
    var origin = self.data.localPostion;
    this.data.myMap.getDrivingRoute({
      origin: origin.longitude + "," + origin.latitude,
      destination: destination.longitude + "," + destination.latitude,
      success: function (data) {
        console.log('获取路线成功')
        var dis = parseFloat(data.paths[0].distance) * 0.001;
        var route = { distance:dis.toFixed(2)+'km'}
        self.setData({
          route: route
        })
        self.getDestinationInfo();
      },
      fail: function (err) {
        console.log('获取路线失败')
        console.log(err)
      }
    });
  },
  //获取信息
  getDestinationInfo:function() {
    var self = this;
    var destination = self.data.destination;
    self.data.myMap.getRegeo({
      location: destination.longitude + "," + destination.latitude,
      success: function (data) {
        //成功回调
        console.log('successs')
        console.log(data[0])
        var markItem = self.data.markers[0];
        markItem.latitude = data[0].latitude;
        markItem.longitude = data[0].longitude;

        var title = self.data.destination.name;
        var loc = data[0].name;
        var distanc = "距你" + self.data.route.distance;

        var content = title + "        " + distanc + "\n" + loc;


        markItem.callout.content = content
        self.setData({
          markers: [markItem]
        })
        wx.hideLoading();
      },
      fail: function (info) {
        //失败回调
        console.log('error')
        console.log(info)
      }
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