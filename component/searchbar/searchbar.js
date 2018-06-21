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
