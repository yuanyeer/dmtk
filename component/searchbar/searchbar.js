// component/searchBar/searchbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    marginBottom:{
      type:String,
      value:"0"
    },
    marginTop: {
      type:String,
      value:"0"
    },
    paddingRight:{
      type:String,
      value:""
    },
    paddingLeft:{
      type:String,
      value:""
    },
    width:{
      type:String,
      value:"690"
    },
    shX:{
      type:String,
      value:"0"
    },
    shY: {
      type: String,
      value: "10"
    },
    shM: {
      type: String,
      value: "100"
    },
    shS: {
      type: String,
      value: "10"
    },
    shColor: {
      type: String,
      value: "#F0F0F0"
    }, 
    radius:{
      type: String,
      value: "50"
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
    // 输入框监听回调
    _inputEvent:function(e) {
      this.triggerEvent("searchInputCallback",{text: e.detail.value})
    }
  }
})
