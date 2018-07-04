// pages/courses/course_detail.js
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
    swiperHeight: 0,
    curPage: 1,
    tabBarArr: [{
      idx: 0,
      title: "课程介绍",
      isSel: false
    }, {
      idx: 1,
      title: "使用门店",
      isSel: true
    }],
    storeArr: [{
      title: "世宇乐园（政安店）",
      image: "http://localhost:8080/public/store.png",
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
    cellImgW:0,
    cellImgH:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var screenW = util.getScrW();
    var swiperH = 455 * screenW / 750;
    this.setData({
      swiperHeight: swiperH
    })

    var cellImgW = screenW * 0.37333;
    var cellImgH = cellImgW * 210 / 280;
    this.setData({
      cellImgW: cellImgW,
      cellImgH: cellImgH
    })
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
  // 门店点击事件
  storeCellClickEvent:function() {
    wx.navigateTo({
      url: '../store/store',
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