// component/setcell/setcell.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dataArr: {
      type: Array,
      value: []
    },
    cellHeight:{
      type:Number,
      value:58
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
