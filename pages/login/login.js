App({
  onLaunch: function () {
    wx.login({
      success: function (res) {
        var code = res.code;
        if (code) {
          console.log('获取用户登录凭证：' + code);
          wx.request({
            url: 'https://www.my-domain.com/wx/onlogin',
            data: { code: code }
          })
          // ------------------------------------

        } else {
          console.log('获取用户登录态失败：' + res.errMsg);
        }
      }
    });
  }
})
