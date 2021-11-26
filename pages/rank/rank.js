// pages/rank/rank.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		isShowSelectCpt: false, // 是否显示选择器
		isShowRankByTimeCpt: true, // 是否显示时间排序
		isShowRankByNumberCpt: false, // 是否显示次数排序
		rankState: "按时间排序", // 排序状态
	},

	clickSelectButton: function () {
		var that = this
		that.setData({
			isShowSelectCpt: true,
		})
	},
	closeSelectCpt() {
		var that = this
		that.setData({
			isShowSelectCpt: false,
		})
	},
	rankStateChanged(e) {
		var that = this
		console.log(e.detail)
		if (e.detail == 0) {
			that.setData({
				isShowRankByTimeCpt: true,
				isShowRankByNumberCpt: false,
				rankState: "按时间排序"
			})
		}
		else if (e.detail == 1) {
			that.setData({
				isShowRankByTimeCpt: false,
				isShowRankByNumberCpt: true,
				rankState: "按次数排序"
			})
		}
		// console.log(this.data.rankState);
	},

	/**
	* 生命周期函数--监听页面加载
	*/
	onLoad: function (options) { },

	/**
	* 生命周期函数--监听页面初次渲染完成
	*/
	onReady: function () { },

	/**
	* 生命周期函数--监听页面隐藏
	*/
	onHide: function () { },

	/**
	* 生命周期函数--监听页面显示
	*/
	onShow: function () { },

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () { },

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () { },

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () { },

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () { }
})