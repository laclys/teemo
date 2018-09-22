/*
 * @Author: Lac 
 * @Date: 2018-09-20 23:48:11 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-09-22 22:59:25
 */
import { KeyWordModel } from '../../models/keyword'

const keywordModel = new KeyWordModel()

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
    historyKeys: [],
    hotKeys: []
  },

  attached() {
    this.setData({
      historyKeys: keywordModel.getHistory()
    })
    
    keywordModel.getHot().then(res => {
      this.setData({
        hotKeys: res.hot
      })
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCancel: function() {
      this.triggerEvent('cancel', {})
    },

    onConfirm: function(ev) {
      const word = ev.detail.value
      keywordModel.addToHistory(word)
    }
  }
})
