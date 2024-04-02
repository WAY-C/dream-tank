// pages/bank/components/dreamCard.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    dreamName: {
      type: String,
      value: ""
    },
    savings: {
      type: Number,
      value: 0
    },
    isCompleted: {
      type: Boolean,
      value: false
    },
    pictures: {
      type: Array,
      value: []
    }
  },
// 监听传入的变量,当传入的值发生变化时,触发方法
observers: {
  'dreamName': function (val) {
    // val=》就是父组件传入组件中的tabsList数据
    console.log('observers:', val);
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

  }
})