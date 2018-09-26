/*
 * @Author: Lac 
 * @Date: 2018-09-26 22:24:47 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-09-26 22:44:36
 */

Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true
  },

  properties: {
    openType: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onGetUserInfo: function(ev) {
      this.triggerEvent('getuserinfo', ev.detail)
    }
  }
})
