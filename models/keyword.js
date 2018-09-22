/*
 * @Author: Lac 
 * @Date: 2018-09-22 22:11:16 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-09-22 22:52:31
 */
import { HTTP } from '../util/http-p'

export class KeyWordModel extends HTTP {
  key = 'q'
  maxLength = 10
  getHistory() {
    const words = wx.getStorageSync(this.key)
    if (!words) {
      return []
    }
    return words
  }

  getHot() {
    return this.request({
      url: '/book/hot_keyword'
    })
  }

  addToHistory(keyword) {
    let words = this.getHistory()
    const has = words.includes(keyword)
    if (!has) {
      const length = words.length
      if (length >= this.maxLength) {
        words.pop()
      }
      words.unshift(keyword)
      wx.setStorageSync(this.key, words)
    }
  }
}