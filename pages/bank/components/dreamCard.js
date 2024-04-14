// pages/bank/components/dreamCard.js
// 计算属性的引入过于复杂， 先基于observers实现
// const computedBehavior = require('miniprogram-computed').behavior
// const behaviorTest = require('./behavior-test') // 引入自定义 behavior

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
    target: {
      type: Number,
      value: 0
    },
    swiperList: {
      type: Array,
      value: []
    }
  },
  // 监听传入的变量,当传入的值发生变化时,触发方法
  observers: {
    'dreamName': function (val) {
      // val=》就是父组件传入组件中的tabsList数据
      console.log('observers:', val);
    },
    'savings, target': function (savingsVal, targetVal) {
      this.setData({
        // 是否完成
        'isCompleted': savingsVal >= targetVal,
        // 进度百分比
        'progressPercentage': String(Math.floor(savingsVal / targetVal * 100))
      });
    },
    'isCompleted': function (isCompletedVal) {
      this.setData({
        // 完成情况的主题
        completionTheme: isCompletedVal ? "success" : "primary",
        // 完成情况的文案
        completionStatus: isCompletedVal ? "已完成" : "进行中"
      });
    },
    'progressPercentage': function(val) {
      const percentageNumber = Number(val);
      let newProgressStatus = '';
      if (percentageNumber < 20) {
        newProgressStatus = 'error'
      } else if (percentageNumber < 50) {
        newProgressStatus = 'warning'
      } else if (percentageNumber < 100) {
        newProgressStatus = 'active'
      } else {
        newProgressStatus = 'success'
      }
      this.setData({
        progressStatus: newProgressStatus
      });
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    isCompleted: false,

    progressPercentage: 0,
    completionTheme: 'primary',
    completionStatus: '进行中',
    progressStatus: 'error'
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})