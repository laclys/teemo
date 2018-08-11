/*
 * @Author: Lac 
 * @Date: 2018-08-06 21:40:29 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-08-12 01:06:03
 */
import { classicBeh } from '../beh.js'

const mMgr = wx.getBackgroundAudioManager()

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
    playing: false,
    pauseSrc: './images/pause.png',
    playSrc: './images/play.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handlePlay: function(ev) {
      if (!this.data.playing) {
        mMgr.src = this.properties.src
      } else {
        mMgr.pause()
      }
      this.setData({
        playing: !this.data.playing
      })
    }
  }
})
