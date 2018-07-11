const util = require('../../utils/appTool.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topArr:[{title:"可使用",isSel:true,tag:0},{title:"已失效",isSel:false,tag:1}],
    orderArr:[{
      top:"世宇乐园",
      url:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
      title:"英语早教班，坚持全英对话学习11",
      next:"7.词语性转化记忆技巧",
      complete:"6.单词快速记忆"
    }, {
        top: "世宇乐园",
      url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
      title: "英语早教班，坚持全英对话学习",
      next: "7.词语性转化记忆技巧",
      complete: "6.单词快速记忆"
      }, {
        top: "世宇乐园",
        url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
        title: "英语早教班，坚持全英对话学习",
        next: "7.词语性转化记忆技巧",
        complete: "6.单词快速记忆"
      },
      {
        top: "世宇乐园",
        url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
        title: "英语早教班，坚持全英对话学习",
        next: "7.词语性转化记忆技巧",
        complete: "6.单词快速记忆"
      }, {
        top: "世宇乐园",
        url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
        title: "英语早教班，坚持全英对话学习",
        next: "7.词语性转化记忆技巧",
        complete: "6.单词快速记忆"
      }, {
        top: "世宇乐园",
        url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
        title: "英语早教班，坚持全英对话学习",
        next: "7.词语性转化记忆技巧",
        complete: "6.单词快速记忆"
      }, {
        top: "世宇乐园",
        url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
        title: "英语早教班，坚持全英对话学习",
        next: "7.词语性转化记忆技巧",
        complete: "6.单词快速记忆"
      }, {
        top: "世宇乐园",
        url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
        title: "英语早教班，坚持全英对话学习",
        next: "7.词语性转化记忆技巧",
        complete: "6.单词快速记忆"
      }, {
        top: "世宇乐园",
        url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
        title: "英语早教班，坚持全英对话学习",
        next: "7.词语性转化记忆技巧",
        complete: "6.单词快速记忆"
      }],

    enableOrders: [{
      top: "世宇乐园",
      url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
      title: "英语早教班，坚持全英对话学习",
      next: "7.词语性转化记忆技巧",
      complete: "6.单词快速记忆",
      isDone: true,
      doneText: "宝宝好棒，完成了所有课程"
    }, {
      top: "世宇乐园",
      url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
      title: "英语早教班，坚持全英对话学习",
      next: "7.词语性转化记忆技巧",
      complete: "6.单词快速记忆",
      isDone: true,
      doneText: "宝宝好棒，完成了所有课程"
      }, {
        top: "世宇乐园",
        url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
        title: "英语早教班，坚持全英对话学习",
        next: "7.词语性转化记忆技巧",
        complete: "6.单词快速记忆",
        isDone: true,
        doneText: "宝宝好棒，完成了所有课程"
    }, {
      top: "世宇乐园",
      url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
      title: "英语早教班，坚持全英对话学习",
      next: "7.词语性转化记忆技巧",
      complete: "6.单词快速记忆",
      isDone: true,
      doneText: "宝宝好棒，完成了所有课程"
      }, {
        top: "世宇乐园",
        url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
        title: "英语早教班，坚持全英对话学习",
        next: "7.词语性转化记忆技巧",
        complete: "6.单词快速记忆",
        isDone: true,
        doneText: "宝宝好棒，完成了所有课程"
    }, {
      top: "世宇乐园",
      url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
      title: "英语早教班，坚持全英对话学习",
      next: "7.词语性转化记忆技巧",
      complete: "6.单词快速记忆",
      isDone: true,
      doneText: "宝宝好棒，完成了所有课程"
      }, {
        top: "世宇乐园",
        url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
        title: "英语早教班，坚持全英对话学习",
        next: "7.词语性转化记忆技巧",
        complete: "6.单词快速记忆",
        isDone: true,
        doneText: "宝宝好棒，完成了所有课程"
    }, {
      top: "世宇乐园",
      url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
      title: "英语早教班，坚持全英对话学习",
      next: "7.词语性转化记忆技巧",
      complete: "6.单词快速记忆",
      isDone: true,
      doneText: "宝宝好棒，完成了所有课程"
      }, {
        top: "世宇乐园",
        url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
        title: "英语早教班，坚持全英对话学习",
        next: "7.词语性转化记忆技巧",
        complete: "6.单词快速记忆",
        isDone: true,
        doneText: "宝宝好棒，完成了所有课程"
    }, {
      top: "世宇乐园",
      url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg",
      title: "英语早教班，坚持全英对话学习",
      next: "7.词语性转化记忆技巧",
      complete: "6.单词快速记忆",
      isDone: true,
      doneText: "宝宝好棒，完成了所有课程"
    }],

      imageW : 0,
      useBtnClass:"use",
      unabelBtnClass: "",
      imgW:0,
      imgH:0,
      isVip:false,
      vipW:0,
      vipH:0,
      orderListTop:0,
      curPage:0
  },
 //顶部分类点击
  orderCatClickEvent:function(e){
    var curPage = 0;
    var selIdx = e.currentTarget.dataset.idx;
    var arr = this.data.topArr;
    for(var index in arr) {
      var item = arr[index]
      item.isSel = false;
      if(item.tag == selIdx) {
        item.isSel = true;
        curPage = item.tag;
      }
    }
    this.setData({
      topArr: arr,
      curPage: curPage
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      isVip: app.globalData.isVip
    })
    var screenW = util.getScrW();

    var imgW = screenW * 0.44;
    var imgH = imgW * 100 / 165;

    console.log(imgW +"--" +imgH)

    var vipW = screenW * 0.92;
    var vipH = vipW * 200 / 690;

    var orderListTop = 20;
    if(this.data.isVip) {
      orderListTop = vipH+180;
    }
    
    this.setData({
      imgW: imgW,
      imgH: imgH,
      vipW: vipW,
      vipH: vipH,
      orderListTop: orderListTop,
      
    })
    
  },
  //订单点击
  orderCellClickEvent:function(e){
    console.log(e)
    wx.navigateTo({
      url: 'order_detail',
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

    setTimeout(function(){
      wx.hideLoading();
      wx.showToast({
        title: '加载完成',
      })
      wx.stopPullDownRefresh()
    },1000)
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