// 获取屏幕宽 。百分比
function getScrw() {
  return wx.getSystemInfoSync().windowWidth;
}
// 获取屏幕高 。百分比
function getScrH(HeightPer) {
  return wx.getSystemInfoSync().windowHeight;
}

module.exports = {
  getScrW: getScrw,
  getScrH: getScrH
}