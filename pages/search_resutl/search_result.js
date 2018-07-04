// pages/search_resutl/search_result.js
const util = require('../../utils/appTool.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recArr: [{ url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg", title: "英语早教班，坚持全英对话学习", price: 11200, count: 9 }, { url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg", title: "英语早教班，坚持全英对话学习", price: 11200, count: 9 }, { url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg", title: "英语早教班，坚持全英对话学习", price: 11200, count: 9 }, { url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg", title: "英语早教班，坚持全英对话学习", price: 11200, count: 9 }, { url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg", title: "英语早教班，坚持全英对话学习", price: 11200, count: 9 }, { url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg", title: "英语早教班，坚持全英对话学习", price: 11200, count: 9 }],
    contentPadding: 15,
    contentItemW: 0,
    showTable:2,
    storeArr: [{
      title: "世宇乐园（政安店）",
      image: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
      subTitle: "先放置店家宣传信息，后续补充评论，教学信息",
      location: "小榄镇北区盈富豪宅3号二栋4楼308号",
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
      subTitle: "先放置店家宣传信息，后续补充评论，教学信息",
      location: "小榄镇北区盈富豪宅3号二栋4楼308号",
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
      subTitle: "先放置店家宣传信息，后续补充评论，教学信息",
      location: "小榄镇北区盈富豪宅3号二栋4楼308号",
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
      subTitle: "先放置店家宣传信息，后续补充评论，教学信息",
      location: "小榄镇北区盈富豪宅3号二栋4楼308号",
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
      subTitle: "先放置店家宣传信息，后续补充评论，教学信息",
      location: "小榄镇北区盈富豪宅3号二栋4楼308号",
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
      subTitle: "先放置店家宣传信息，后续补充评论，教学信息",
      location: "小榄镇北区盈富豪宅3号二栋4楼308号",
      distance: 4.3,
      tags: [{
        title: "12名老师"
      }, {
        title: "肢体矫正"
      }, {
        title: "400m教学区"
      }]
    }],
    storeImgW:0,
    storeImgH: 0,
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

    var storeImgW = screenW * 0.37333;
    var storeImgH = storeImgW * 210 / 280;

    this.setData({
      storeImgW: storeImgW,
      storeImgH: storeImgH
    })
  },

  // 搜索回调
  searchInputCallback:function(e) {
    var searchInputText = e.detail.text;
    if (searchInputText == "门店") {

      this.searchStoreEvent();

    } else if (searchInputText == "课程") {
      
      this.searchCourseEvent()

    }

    if (searchInputText.length == 0) {
      this.setData({
        showTable:2
      })
    }
  },

  // 搜索课程
  searchCourseEvent:function(){
    this.setData({
      showTable:0
    })
  },
  // 搜索门店
  searchStoreEvent:function() {
    this.setData({
      showTable: 1
    })
  },

  //门店点击
  storeCellClickEvent:function(e){
    wx.navigateTo({
      url: '../store/store',
    })
  },
  //课程点击
  courseClickEvent:function(e) {
    wx.navigateTo({
      url: '../courses/course_detail',
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