var match = {
  home:"../home/home",
  my:"../my/my",
  order:"../order/order",
  index:"../index/index",
  location:"../location/location",
  search_result:"../search_resutl/search_result",
  scan:"../scan/scan",
  courses:"../courses/courses",
  course_detail:"../courses/course_detail",
  news:"../news/news",
  collection:"../collection/collection",
  vip:"../vip/vip",
  bought:"../bought/bought",
  bind:"../login/bind",
  order_detail:"../order/order_detail",
  store:"../store/store",
  search:"../search_resutl/search",
  new_detail:"../news/new_detail",
  kefu:"../kefu/kefu",
  record:"../courses/record",
  buy:"../buy/buy",
  test:"../location/test"
}

// function go(router) {
//   wx.navigateTo({
//     url: match[router],
//   })
// }

function go(router,params,success) {

  var url = match[router];

  if(params) {
    url = url + '?'
    for (var key in params) {
      url = url + key + '=' + params[key] + '&'
    }
    url = url.slice(0, url.length - 1)
  }
  
  wx.navigateTo({
    url: url,
  }, function (res) {
    typeof success == 'function' && success(res)
  })
}


module.exports = {
  go: go
};
  

  