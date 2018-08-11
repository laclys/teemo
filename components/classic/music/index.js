/*
 * @Author: Lac 
 * @Date: 2018-08-06 21:40:29 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-08-12 00:31:25
 */
import { classicBeh } from '../beh.js'

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [ classicBeh ],

  properties: {
    src: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    pauseSrc: './images/pause.png',
    playSrc: './images/play.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
