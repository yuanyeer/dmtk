// component/ordercell/ordercell.js
const App = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    ui_setting:{
      type:Object,
      value:App.data.ui.order
    },
    orderArr:{
      type:Array,
      value:[]
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
