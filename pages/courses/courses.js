// pages/courses/courses.js
const util = require('../../utils/appTool.js')

const req = require('../../api/appFunc.js')
const pro = require('../../utils/wxReq.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topArr: [{ id: 0, title: "年龄段", select: "selected", img: "../../images/course/down_sel.png", size: { width: 10, height: 8 } }, { id: 1, title: "课时", select: "", img: "../../images/course/du.png", size: { width: 10, height: 20 } }, { id: 2, title: "价格", select: "", img: "../../images/course/du.png", size: { width: 10, height: 20 } }],
    recArr: [],
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

    //加载课程
    wx.showLoading({
      title: '正在加载',
    })
    var self = this;
    pro.Get(req.api.course).then(function(res){
      wx.hideLoading()
      self.setData({
        recArr:res.data.datas
      })
    },function(err){
      wx.hideLoading()
      wx.showModal({
        title: '错误',
        content: '服务端错误',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      })
    })
  },
  topItemClickEvent:function(e) {
    var selectId = e.target.dataset.itemid
    var arr = this.data.topArr;
    for(var index in arr) {
      var item = arr[index]
      if (item.id == selectId) {
        item['select'] = "selected"
        if(item.id == 0) {
          item.img = "../../images/course/down_sel.png"
        }
      }else {
        item['select'] = "";
        if (item.id == 0) {
          item.img = "../../images/course/down_nor.png"
        }
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