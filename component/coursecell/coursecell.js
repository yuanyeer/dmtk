// component/coursecell/coursecell.js
const App = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    ui_setting:{
      type: String,
      value: App.data.ui.course
    },
    marginTop:{
      type:String,
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
      // this.triggerEvent("courseClickEvent", { text: e })
      App.data.router.go('course_detail',{name:'tony',age:20})

    } 
  }
})
