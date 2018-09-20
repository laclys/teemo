/*
 * @Author: Lac 
 * @Date: 2018-09-20 23:48:11 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-09-21 00:03:17
 */

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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCancel: function() {
      this.triggerEvent('cancel', {})
    }
  }
})
