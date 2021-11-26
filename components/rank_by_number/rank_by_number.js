// components/rank_by_number/rank_by_number.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		isShow: {
			type: Boolean,
			observer: "showSheet"
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		"isShow": false,
		"rank_list": []
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		showSheet: function () {
			var that = this
			that.setData({
				isShow: this.properties.isShow
			})
			if (this.properties.isShow == true) {
				console.log("yes")

				wx.request({
					url: 'http://192.168.31.142:8080/blog_server/getExerciseUserCheckInByNum',
					method: 'POST',
					success(res) {
						console.log(res.data)
						that.setData({
							rank_list: res.data
						})
					}
				})
			}
		}
	}
})
