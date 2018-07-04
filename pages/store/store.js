// pages/store/store.js
const util = require('../../utils/appTool.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topArr: [{ title: "猩猩欢乐反斗城（嘉盛广场店）" }, { title: "西区日升美食城北100米路东(日化方外侧灯光)", icon: "../../images/store/location.png",action:"map",param:""}, { title: "0760-888525458",icon: "../../images/store/phone.png",action:"phone",param:""}],
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
    recArr: [{ tag: "莫莉幻想", url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg", title: "英语早教班，坚持全英对话学习", price: 11200, count: 9 }, { tag: "莫莉幻想", url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg", title: "英语早教班，坚持全英对话学习", price: 11200, count: 9 }, { tag: "莫莉幻想", url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg", title: "英语早教班，坚持全英对话学习", price: 11200, count: 9 }, { tag: "莫莉幻想", url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg", title: "英语早教班，坚持全英对话学习", price: 11200, count: 9 }, { url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg", title: "英语早教班，坚持全英对话学习", price: 11200, count: 9 }, { tag: "其他", url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg", title: "英语早教班，坚持全英对话学习", price: 11200, count: 9 }],
    contentPadding: 15,
    contentItemW: 0,
    storeImages: ["https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg", "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg", "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg", "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg","https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2505161557,4147460724&fm=27&gp=0.jpg"],
    teachers: [{ img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530519610837&di=b267a3d6bec99ffbf8174edf4682e09f&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FWy21lC3adxyak8pACkQk2pax3QOSIVFuaxENCn1Dgm%3Dj31516946208758compressflag.jpg", cate: "眼科老师", name: "C罗"}, { img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530519610837&di=b267a3d6bec99ffbf8174edf4682e09f&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FWy21lC3adxyak8pACkQk2pax3QOSIVFuaxENCn1Dgm%3Dj31516946208758compressflag.jpg", cate: "眼科老师", name: "C罗", tag: "特约" }, { img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530519610837&di=b267a3d6bec99ffbf8174edf4682e09f&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FWy21lC3adxyak8pACkQk2pax3QOSIVFuaxENCn1Dgm%3Dj31516946208758compressflag.jpg", cate: "眼科老师", name: "C罗", tag: "特约" }, { img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530519610837&di=b267a3d6bec99ffbf8174edf4682e09f&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FWy21lC3adxyak8pACkQk2pax3QOSIVFuaxENCn1Dgm%3Dj31516946208758compressflag.jpg", cate: "眼科老师", name: "C罗", tag: "特约" }, { img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530519610837&di=b267a3d6bec99ffbf8174edf4682e09f&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FWy21lC3adxyak8pACkQk2pax3QOSIVFuaxENCn1Dgm%3Dj31516946208758compressflag.jpg", cate: "眼科老师", name: "C罗", tag: "特约" }],
    markers: [{
      iconPath: "../../images/location.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 20,
      height: 20,
      storeImgW:0,
      storeImgH: 0
    }],
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
    var storeImgW = screenW * 0.373333;
    var storeImgH = storeImgW * 210 / 280;
    this.setData({
      storeImgW: storeImgW,
      storeImgH: storeImgH
    })
  },
  // 导航栏点击事件
  tabBarClickEvent: function (e) {
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
  courseClickEvent:function(e) {

  },
  //图片点击
  storeImgClickEvent:function(e){
    var url = e.currentTarget.dataset.img;
    wx.previewImage({
      current: url, // 当前显示图片的http链接
      urls: this.data.storeImages // 需要预览的图片http链接列表
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