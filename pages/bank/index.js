Component({
  data: {
    dreamList: [
      {
        "dreamName": "第一个梦想",
        "savings": 0.05,
        "isCompleted": false,
        "pictures": ["images/dreams/1.png"]
      },
      {
        "dreamName": "第二个梦想",
        "savings": 100,
        "isCompleted": false,
        "pictures": ["images/dreams/1.png"]
      },
      {
        "dreamName": "第三个梦想",
        "savings": 10000,
        "isCompleted": false,
        "pictures": ["images/dreams/1.png"]
      },
      {
        "dreamName": "第四个梦想",
        "savings": 100000,
        "isCompleted": false,
        "pictures": ["images/dreams/1.png"]
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
