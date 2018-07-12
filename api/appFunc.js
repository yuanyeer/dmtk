var app = getApp();

const baseUrl = app.data.debugUrl;

var api = {
  getModel1: baseUrl  + "1",
  getModel2: baseUrl + "2",
  swiper: baseUrl + "swiper",
  midfun: baseUrl + "midfun", 
  course: baseUrl + "course",
}



module.exports = { api}