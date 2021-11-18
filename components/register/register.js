// components/register/register.js
var util = require("../../utils/util.js");
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {

	},

	/**
	 * 组件的初始数据
	 */
	data: {
		logIcon:"../../images/username.png",
		pwdIcon:"../../images/phonenum.png",
		loginBtnTxt:"登录/注册",
		btnLoading:false,
		user:{
			username:"",
			phonenum:""
		}
		
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		checkUserName:function(param){
			var userid = util.regexConfig().cards; //姓名正则检验
			var inputUserName = param.username.trim(); //输入信息确认
			var wellname = param.username.length; //字符长度确认
			console.log(inputUserName, wellname)
			if (userid.test(inputUserName) ){ //xxx.test是检测函数。
			  return true;
			}else{
			  wx.showModal({
				title: '提示',
				showCancel:false,
				content: '姓名输入错误'
			  });
			  return false;
			}
		  },

		checkPhone:function(param){
			var phone = util.regexConfig().phone; //校验手机号
			var inputPhonenum = param.phonenum.trim();  //核对输入手机号
			var wellphonenum = param.phonenum.length;
			if (phone.test(inputPhonenum)  && wellphonenum == 11 ){ //验证手机号格式及长度
			  return true;
			}else{
			  wx.showModal({
				title: '提示',
				showCancel: false,
				content: '手机号输入错误'
			  });
			  return false;
			}
		},
		
		get_username:function(params) {
			var that = this;
			that.data.user.username =  params.detail.value;
		},
		get_phone:function (params) {
			var that = this;
			that.data.user.phonenum =  params.detail.value;
		},
		click:function () {
			var that = this;
			var param = that.data.user;

			var flag = that.checkPhone(param) && that.checkUserName(param);
			if(flag){
				that.triggerEvent('check',param)
				// console.log('输入正确')
			}
		}		
	}
})
