// component/coursecell/coursecell.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    marginTop:{
      type:String,
      value:""
    },
    contentPadding:{
      type:String,
      value:""
    },
    contentItemW:{
      type: String,
      value:""
    },
    recArr:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    emData:1.17
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 课程点击
    _cellClickEvent:function(e) {
      this.triggerEvent("courseClickEvent", { text: e })
    } 
  }
})
