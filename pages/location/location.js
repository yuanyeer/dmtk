// pages/location/location.js
const util = require('../../utils/appTool.js')
const city = require('../../utils/allcity.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityPadding:15,
    cityPaddingR:0,
    cityItemPadding:10,
    cityItemW:0,
    indexArr:[],
    city:[],
    hotCity:[],
    toView:"",
    cityItemHeight:50,
    cityListHeight:0
  },
  searchInputCallback:function(e) {
    console.log(e.detail.text)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var screenW = util.getScrW();
    console.log(screenW)
    var cityPaddingR = 40 * screenW / 375;
    console.log('right:' + cityPaddingR)
    var cityItemW = (screenW - this.data.cityItemPadding * 2 - this.data.cityPadding - cityPaddingR) / 3;
    this.setData({
      cityItemW: cityItemW,
      cityPaddingR: cityPaddingR
    })
    

    var indexArr = [];
    var cityArr = city.getAllCity();
    var hotCity = city.getHotCity();
  
    var allCity = []
    for(var group_idx in cityArr) {
      var group = cityArr[group_idx]
      indexArr.push(group.idt)
      for(var city_idx in group.cites) {
        var cityItem = group.cites[city_idx]
        var obj = {}
        obj.key = cityItem.key
        obj.name = cityItem.name
        obj.idx = cityItem.key + "_" + city_idx
        obj.start = false;
        if (city_idx == 0) {
          obj.displayName = cityItem.key
          obj.start = true;
        }else {
          obj.displayName = cityItem.name
        }
        allCity.push(obj)
      }
    }

    var cityListHeight = util.getScrH()

    this.setData({
      indexArr: indexArr,
      city: allCity,
      hotCity: hotCity,
      cityListHeight: cityListHeight
    })

  },
  // 索引点击
  indexsClickEvent:function(e) {
    
    var toView = e.currentTarget.dataset.indexdata+"_0"
    console.log(toView)
    this.setData({
      toView: toView
    })
  },
  isInArray:function(str,arr) {
    for(var index in arr) {
      var item = arr[index]
      if(item == str) {
        return true;
      }
    }
    return false;
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