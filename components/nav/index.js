/*
 * @Author: Lac 
 * @Date: 2018-08-05 23:10:09 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-08-06 00:07:18
 */
// components/nav/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    first: Boolean,
    latest: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    disLeftSrc: './images/triangle.dis@left.png',
    leftSrc: './images/triangle@left.png',
    disRightSrc: './images/triangle.dis@right.png',
    rightSrc: './images/triangle@right.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleLeftClick: function(ev) {
      if (!this.properties.latest) this.triggerEvent('left', {})
    },
    handleRightClick: function(ev) {
      if (!this.properties.first) this.triggerEvent('right', {})
    }
  }
})
