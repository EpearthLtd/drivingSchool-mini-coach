// 导入js  
var util = require('../../utils/util.js'); 

Page({

  /**
   * 页面的初始数据
   */
  data: {
    coachInfo: ["教练甲", "川ASVIP学", "科目二", "13000000000"],
    date: '',
    dateEnd: '',
    schedule: [
      { "name": "01", "text": "text1", "tel": "13000000001" },
      { "name": "02", "text": "text2", "tel": "13000000002" },
      { "name": "03", "text": "text3", "tel": "13000000003" },
      { "name": "04", "text": "text4", "tel": "13000000004" },
      { "name": "05", "text": "text5", "tel": "13000000005" },
      { "name": "06", "text": "text6", "tel": "13000000006" },
      { "name": "07", "text": "text7", "tel": "13000000007" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var that = this;
    var date = util.formatDate(new Date());
    var dateEnd = util.formatEndDate(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      date: date,
      dateEnd: dateEnd
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  /**
   * 日期变化事件
   */
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

})