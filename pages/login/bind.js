// pages/login/bind.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSuccess:false,
    verifys: [{ focus: true, value: "", tag: 0, blur: '' }, { focus: false, value: "", tag: 1, blur: '' }, { focus: false, value: "", tag: 2, blur: '' }, { focus: false, value: "", tag: 3, blur: ''  }],
    hidden_focus:false,
    verifyStr:"",
    phone:""
  },
  // 输入事件
  textinputEvent:function(e) {
    console.log(e.detail.value)
    this.setData({
      phone: e.detail.value
    })
  },

  //确认按钮事件
  textinputConfirmEvent:function(e){
    console.log(e.detail.value)
  },
  //手机号码键盘输入
  phoneInputComfirEvent:function(e){
    this.sendCodeEvent(e);
  },
  //发送验证码 
  sendCodeEvent:function(e){
    var phone = this.data.phone;
    if(phone.length == 0) {
      wx.showModal({
        title: '提示',
        content: "不能为空",
        showCancel: false
      })
      return;
    }

    if(phone.length != 11) {
      wx.showModal({
        title: '提示',
        content: "手机号码长度不正确",
        showCancel: false
      })
      return;
    }

    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (!myreg.test(phone)) {
      wx.showModal({
        title: '提示',
        content: "手机号码格式不正确",
        showCancel: false
      })
      return;
    }

  },
  // 验证码点击
  verifyItemClickEvent:function(e){
    this.setData({
      hidden_focus:true
    })
  },
  //获取输入的验证码
  hiddenInputEvent:function(e){
    console.log(e.detail.value)
    var verifyStr = e.detail.value;

    var arr = this.data.verifys
    for (var index in arr) {
      var item = arr[index];
      var isHad = false;
      for (var idx in verifyStr) {
        if(index == idx) {
          item.value = verifyStr[idx];
          isHad = true;
          break;
        }
      }

      if(!isHad) {
        item.value = "";
      }
    }

    //是否可点击
    var isSuccess = false;
    if (verifyStr.length == 4) {
      isSuccess = true;
    }


    this.setData({
      verifys: arr,
      verifyStr: verifyStr,
      isSuccess: isSuccess
    })

  },
  inputBlurEvent:function(e){
    return false;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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