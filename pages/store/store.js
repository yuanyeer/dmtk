// pages/store/store.js
const util = require('../../utils/appTool.js')
var map = require('../../utils/amap-wx.js');
var wxApi = require('../../utils/wxApi.js')
const test = require('../../utils/test.js')
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topArr: [{
      title: "猩猩欢乐反斗城（嘉盛广场店）"
    }, {
      title: "西区日升美食城北100米路东(日化方外侧灯光)",
      icon: "../../images/store/location.png",
      action: "map",
      param: ""
    }, {
      title: "0760-888525458",
      icon: "../../images/store/phone.png",
      action: "phone",
      param: ""
    }],
    tabBarArr: [{
      idx: 0,
      title: "详情",
      isSel: true
    }, {
      idx: 1,
      title: "课程",
      isSel: false
    }],
    curPage: 0,
    recArr:[],
    storeImages: ["https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg", "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg", "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg", "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg", "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg"],
    teachers: [{
      img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530519610837&di=b267a3d6bec99ffbf8174edf4682e09f&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FWy21lC3adxyak8pACkQk2pax3QOSIVFuaxENCn1Dgm%3Dj31516946208758compressflag.jpg",
      cate: "眼科老师",
      name: "C罗"
    }, {
      img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530519610837&di=b267a3d6bec99ffbf8174edf4682e09f&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FWy21lC3adxyak8pACkQk2pax3QOSIVFuaxENCn1Dgm%3Dj31516946208758compressflag.jpg",
      cate: "眼科老师",
      name: "C罗",
      tag: "特约"
    }, {
      img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530519610837&di=b267a3d6bec99ffbf8174edf4682e09f&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FWy21lC3adxyak8pACkQk2pax3QOSIVFuaxENCn1Dgm%3Dj31516946208758compressflag.jpg",
      cate: "眼科老师",
      name: "C罗",
      tag: "特约"
    }, {
      img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530519610837&di=b267a3d6bec99ffbf8174edf4682e09f&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FWy21lC3adxyak8pACkQk2pax3QOSIVFuaxENCn1Dgm%3Dj31516946208758compressflag.jpg",
      cate: "眼科老师",
      name: "C罗",
      tag: "特约"
    }, {
      img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530519610837&di=b267a3d6bec99ffbf8174edf4682e09f&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FWy21lC3adxyak8pACkQk2pax3QOSIVFuaxENCn1Dgm%3Dj31516946208758compressflag.jpg",
      cate: "眼科老师",
      name: "C罗",
      tag: "特约"
    }],
    markers: [{
      iconPath: "../../images/store/map-loc.png",
      id: 0,
      latitude: 0,
      longitude: 0,
      width: 22,
      height: 27,
      callout: {
        content: "正在获取位置",
        bgColor: "#000000",
        color: "#ffffff",
        borderRadius: 10,
        padding: 10,
        display: "ALWAYS",
        fontSize: 10
      }
    }],
    destination: {
      name: "世宇测试城（政安店）",
      latitude: 23.16,
      longitude: 113.23,
    },
    localPostion: {
      latitude: 0,
      longitude: 0
    },
    //路线
    route: {
      distance: 0
    },
    myMap: {},
    ui_setting:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
    this.setData({
        ui_setting:App.data.ui.store,
        recArr:test.course().datas
    })

    this.initMap();
  },
  //顶部点击
  topItemClickEvent: function(e) {
    var self = this;
    var action = e.currentTarget.dataset.action;
    if (action == 'map') {
      var self = this;
      wx.showActionSheet({
        itemList: ["导航到该位置"],
        success: function (res) {
          if (res.tapIndex == 0) {
            wx.openLocation({
              latitude: self.data.destination.latitude,
              longitude: self.data.destination.longitude,
              name: self.data.destination.name
            })
          }
        }
      })
    } else if (action == 'phone') {
      wx.showActionSheet({
        itemList: ["呼叫"],
        success:function(res){
          if (res.tapIndex == 0) wx.makePhoneCall({
            phoneNumber: self.data.topArr[2].title,
          })
        }
      })
      
    }
  },
  // 导航栏点击事件
  tabBarClickEvent: function(e) {
    var idx = e.currentTarget.dataset.idx;
    var arr = this.data.tabBarArr;
    for (var index in arr) {
      var item = arr[index]
      item.isSel = false;
      if (item.idx == idx) {
        item.isSel = true;
      }
    }

    this.setData({
      tabBarArr: arr,
      curPage: idx
    })
  },
  // 课程点击
  courseClickEvent: function(e) {

  },
  //图片点击
  storeImgClickEvent: function(e) {
    var url = e.currentTarget.dataset.img;
    wx.previewImage({
      current: url, // 当前显示图片的http链接
      urls: this.data.storeImages // 需要预览的图片http链接列表
    })
  },
  //加载地图
  initMap: function() {
    var self = this;
    var myMap = new map.AMapWX({
      key: 'a6c1434c336f8d2e33cb26ff6c7142cf'
    });
    //设置地图
    this.setData({
      myMap: myMap
    })

    //开始加载地点
    self.getLocalPosition();
  },

  //获取当前位置
  getLocalPosition: function() {
    var self = this;
    self.data.myMap.getRegeo({
      success: function(data) {
        //成功回调

        var localPostion = self.data.localPostion;
        localPostion.latitude = data[0].latitude;
        localPostion.longitude = data[0].longitude;
        self.setData({
          localPostion: localPostion
        })
        self.getRoute();
      },
      fail: function(info) {
        //失败回调
        console.log('error')
        console.log(info)
      }
    })
  },
  //获取路线 
  getRoute: function() {
    var self = this;
    var destination = self.data.destination;
    var origin = self.data.localPostion;
    this.data.myMap.getDrivingRoute({
      origin: origin.longitude + "," + origin.latitude,
      destination: destination.longitude + "," + destination.latitude,
      success: function(data) {
        console.log('获取路线成功')
        var dis = parseFloat(data.paths[0].distance) * 0.001;
        var route = {
          distance: dis.toFixed(2) + 'km'
        }
        self.setData({
          route: route
        })
        self.getDestinationInfo();
      },
      fail: function(err) {
        console.log('获取路线失败')
        console.log(err)
      }
    });
  },
  //获取信息
  getDestinationInfo: function() {
    var self = this;
    var destination = self.data.destination;
    self.data.myMap.getRegeo({
      location: destination.longitude + "," + destination.latitude,
      success: function(data) {
        //成功回调
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
      fail: function(info) {
        //失败回调
        console.log('error')
        console.log(info)
      }
    })
  },
  //地址点击
  markClickEvent(e) {
    var self = this;
    wx.showActionSheet({
      itemList: ["导航到该位置"],
      success: function(res) {
        if (res.tapIndex == 0) {
          wx.openLocation({
            latitude: self.data.destination.latitude,
            longitude: self.data.destination.longitude,
            name: self.data.destination.name
          })
        }
      }
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
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})