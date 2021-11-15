// pages/index/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		url:"../../images/upload_Img.png",
		date:""
	},
	
	
	selectImg: function(params) {
		console.log('dian ji l')
		var that = this;
		const util = require('../../utils/util.js')

		wx.chooseImage({
		count: 1,
		sizeType: ['original', 'compressed'],
		sourceType: ['album', 'camera'],
		success(res) {
			var temp_date = util.formatTime(new Date()); 
			that.setData({
				url:res.tempFilePaths,
				date:temp_date
			})
		},

		})
	},

	goCheck:function (params) {
		
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

	}
})