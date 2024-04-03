// pages/bank/components/dreamCard.js
const computedBehavior = require('miniprogram-computed').behavior
const behaviorTest = require('./behavior-test') // 引入自定义 behavior

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
    isCompleted: {
      type: Boolean,
      value: false
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
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    dreamName: '',
    savings: 0,
    target: 0,
    swiperList: []
  },
  /**
   * 组件的计算属性
   */
  computed: {
    isCompleted(data) {
      return data.savings >= data.target;
    },
    completionTheme(data) {
      return data.isCompleted ? "success" : "primary"
    },
    completionStatus(data) {
      return data.isCompleted ? "已完成" : "进行中"
    },
    progressPercentage(data) {
      return String(Math.floor(data.savings / data.target * 100));
    },
    progressStatus(data) {
      const percentageNumber = Number(data.progressPercentage);
      let progressStatus = '';
      if (percentageNumber < 20) {
        progressStatus = 'error'
      } else if (percentageNumber < 50) {
        progressStatus = 'warning'
      } else if (percentageNumber < 100) {
        progressStatus = 'active'
      } else {
        progressStatus = 'success'
      }
      return progressStatus;
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})