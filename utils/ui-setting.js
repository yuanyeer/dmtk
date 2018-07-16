/**
 * 全局UI配置文件
 * 配置图片宽高
 * 
 * 
 */

const coursePadding = 15;//课程边距
const screenW = wx.getSystemInfoSync().windowWidth;
const screenH = wx.getSystemInfoSync().windowHeight;

//课程宽度
const courseWidth = (screenW - coursePadding * 3) * 0.5;
const order_imgW = screenW * 0.44;
const order_imgH = order_imgW * 100 / 165;

//课程-门店
const store_imageW = screenW * 0.37333;
const store_imageH = store_imageW * 210 / 280;

//订单
const vipW = screenW * 0.92;
const vipH = vipW * 200 / 690;

//门店
var storeImgW = screenW * 0.373333;
var storeImgH = storeImgW * 210 / 280;

const ui_setting = {
  course:{
    width: courseWidth,
    coursePadding: coursePadding,
    store_imageW: store_imageW,
    store_imageH:store_imageH
  },
  order:{
    image_width: order_imgW,
    image_height: order_imgH,
    vipCard_width: vipW,
    vipCard_height: vipH
  },
  set_cell:{
    height:50
  },
  store:{
    imageW: storeImgW,
    imageH: storeImgH,
    teacher_imageW: storeImgH,
    teacher_imageH: storeImgW
  }
}







module.exports = ui_setting

