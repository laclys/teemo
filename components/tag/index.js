/*
 * @Author: Lac
 * @Date: 2018-09-02 16:20:00
 * @Last Modified by: Lac
 * @Last Modified time: 2018-09-19 23:19:00
 */
// components/tag/index.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true
  },

  externalClasses: ['tag-class'],

  properties: {
    text: String
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
    handleTap: function () {
      this.triggerEvent('tapping', {
        text: this.properties.text
      })
    }
  }
})
