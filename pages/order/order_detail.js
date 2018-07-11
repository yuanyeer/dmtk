// pages/order/order_detail.js
const util = require('../../utils/appTool.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemArr: [{
      color: "Red"
    }, {
      color: "Gray"
    }, {
      color: "Green"
    }, {
      color: "Blue"
    }],
    swiperHeight: 175,
    curPage: 0,
    tabBarArr: [{
      idx: 0,
      title: "课程介绍",
      isSel: true
    }, {
      idx: 1,
      title: "使用门店",
      isSel: false
    }],
    storeArr: [{
      title: "世宇乐园（政安店）",
      image: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
      location: "西区富华点388号鹿茸水解一项观察广场3楼西区富华点388号鹿茸水解一项观察广场3楼",
      distance: 4.3,
      tags: [{
        title: "12名老师"
      }, {
        title: "肢体矫正"
      }, {
        title: "400m教学区"
      }]
    }, {
      title: "世宇乐园（政安店）",
      image: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
      location: "西区富华点388号鹿茸水解一项观察广场3楼",
      distance: 4.3,
      tags: [{
        title: "12名老师"
      }, {
        title: "肢体矫正"
      }, {
        title: "400m教学区"
      }]
    }, {
      title: "世宇乐园（政安店）",
      image: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
      location: "西区富华点388号鹿茸水解一项观察广场3楼",
      distance: 4.3,
      tags: [{
        title: "12名老师"
      }, {
        title: "肢体矫正"
      }, {
        title: "400m教学区"
      }]
    }, {
      title: "世宇乐园（政安店）",
      image: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
      location: "西区富华点388号鹿茸水解一项观察广场3楼",
      distance: 4.3,
      tags: [{
        title: "12名老师"
      }, {
        title: "肢体矫正"
      }, {
        title: "400m教学区"
      }]
    }, {
      title: "世宇乐园（政安店）",
      image: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
      location: "西区富华点388号鹿茸水解一项观察广场3楼",
      distance: 4.3,
      tags: [{
        title: "12名老师"
      }, {
        title: "肢体矫正"
      }, {
        title: "400m教学区"
      }]
    }, {
      title: "世宇乐园（政安店）",
      image: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
      location: "西区富华点388号鹿茸水解一项观察广场3楼",
      distance: 4.3,
      tags: [{
        title: "12名老师"
      }, {
        title: "肢体矫正"
      }, {
        title: "400m教学区"
      }]
    }],
    topW:0,
    topH:0,
    progress:0,
    progressW:0,
    isDone:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var screenW = util.getScrW();
    var topH = screenW * 455 / 750;
    var progressW = screenW - 30;
    this.setData({
      topW:screenW,
      topH: topH,
      progress:100,
      progressW: progressW
    })
  },
  //订单详细记录
  recordClickEvent:function(e){
    wx.navigateTo({
      url: '../courses/record',
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