// pages/index/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		url:"../../images/upload_Img.png",
		date:"",
		 
		//登录切换
		show_container:false,

		//注册逐渐切换
		show_register:true,

		// register传回数据
		user:{}
	
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
	
	getUser:function (params) {
		var that = this;
		var user = params.detail;
		// this.setData({
		// 	user:user
		// })
		var nickName = user.username;
		var mobile = user.phonenum;

		wx.request({
			url: 'http://192.168.31.142:8080/blog_server/exerciseUserLogin?nickName='+nickName+'&mobile='+mobile,
			method:'post',
			success(res){	
				console.log('登录执行成功');
				// console.log(res.data)
				if(res.data === '该用户不存在'){
					wx.showModal({
						title: '提示',
						content: '没有该账户！是否一键注册并登录？或者请检查输入手机和用户是否正确',
						success: function (res) {
						  if (res.confirm) {//这里是点击了确定以后
							console.log('用户点击确定');
							wx.request({
								url: 'http://192.168.31.142:8080/blog_server/exerciseUserRegister?nickName='+nickName+'&mobile='+mobile,
								method:'post',
								success(res){	
									console.log('注册并登录执行成功！');
									// console.log('注册执行成功！',res.data)
									wx.showToast({
										title: '一键注册并登录成功',			
										icon: 'success',								   
										duration: 2000//持续的时间								   
									  })
								}
							  })
						  } else {//这里是点击了取消以后
							console.log('用户点击取消')
						  }
						}
					  })
				}
				else{
					wx.showToast({
						title: '登录成功',			
						icon: 'success',								   
						duration: 2000//持续的时间								   
					});
					that.setData({
						show_container:true,
						show_register:false
					});

				}
			}
		  })		

		// wx.showModal({
		// 	title: '提示',
		// 	showCancel:false,
		// 	content: '登录成功'
		// });
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