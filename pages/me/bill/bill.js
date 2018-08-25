/*!
 * 学车管理平台微信小程序教练端 (https://github.com/EpearthLtd/drivingSchool-mini-coach)
 * 版权所有(C)2018 成都曦璞科技有限公司
 *
 * 作者author：郑维一
 * 公司网站site：www.epearth.com
*/

Page({

  /**
   * 页面的初始数据
   */
  data: {
    trainingBill: [
      { id: "0", licenseTypeName: "C1", subjectName: "科目三", date: "2018-06-16 ", startTime: "14:03", coachId: "00280021002", students: 3, trainingStatus: "已完成" },
      { id: "1", licenseTypeName: "C1", subjectName: "科目二", date: "2018-06-14 ", startTime: "14:03", coachId: "00280021003", students: 2, trainingStatus: "已完成" }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
   * 用户点击训练记录
   */
  clickBill: function (e) {
    wx.navigateTo({
      url: '../../training/details/details?id=' + e.currentTarget.dataset.id,
    })
    console.log('打开id为 ' + e.currentTarget.dataset.id + ' 的训练详情')
  }
})