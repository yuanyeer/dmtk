// component/setcell/setcell.js
const App = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dataArr: {
      type: Array,
      value: []
    },
    ui_setting:{
      type:Object,
      value: App.data.ui.set_cell
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 课程点击
    _celltapEvent: function (e) {
      var idx = e.currentTarget.dataset.idx;
      if(idx != 101) {
        this.triggerEvent("setCellClickEvent", { text: e })
      }
    } ,
    _kefuClickEvent:function(e) {
      console.log('kefu')
    }
  }
})
