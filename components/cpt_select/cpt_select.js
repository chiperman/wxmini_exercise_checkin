// components/select_cpt/select_cpt.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		selectItem: {
			type: String,
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		isSelected: "按时间排序",
	},
	observers: {
		selectItem(res) {
			this.setData({
				isSelected: res
			})
		}
	},
	/**
	 * 组件的方法列表
	 */
	methods: {
		closeSelectCpt() {
			this.triggerEvent("closeSelectCpt")
		},
		select(e) {
			// console.log(e.currentTarget.dataset.id);
			var id = e.currentTarget.dataset.id
			this.triggerEvent("rankStateChanged", id)
			this.triggerEvent("closeSelectCpt")
		},
	}
})
