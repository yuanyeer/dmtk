// component/ordercell/ordercell.js
const App = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    orderArr:{
      type:Array,
      value:[]
    },
    imgH:{
      type:Number,
      value:""
    },
    imgW: {
      type: Number,
      value: ""
    },
    marginTop:{
      type:String,
      value:"0"
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
    // 订单点击
    _orderCellClickEvent: function (e) {
      // this.triggerEvent("orderCellClickEvent", { text: e })
      App.data.router.go('order_detail')
    }
  }
})
