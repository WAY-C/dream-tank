Component({
  data: {
    dreamList: [
      {
        "dreamName": "第一个梦想",
        "savings": 0.05,
        "target": 1,
        "isCompleted": false,
        "swiperList": ["../../image/bank_active.png"]
      },
      {
        "dreamName": "第二个梦想",
        "savings": 100,
        "target": 260,
        "isCompleted": false,
        "swiperList": ["../../image/bank_active.png"]
      },
      {
        "dreamName": "第三个梦想",
        "savings": 10000,
        "target": 20000,
        "isCompleted": false,
        "swiperList": ["../../image/bank_active.png"]
      },
      {
        "dreamName": "第四个梦想",
        "savings": 100000,
        "target": 100000,
        "isCompleted": true,
        "swiperList": ["../../image/bank_active.png"]
      }
    ]
  },
  pageLifetimes: {
    // show() {
    //   if (typeof this.getTabBar === 'function' &&
    //     this.getTabBar()) {
    //     this.getTabBar().setData({
    //       selected: 0
    //     })
    //   }
    // }
  }
})
