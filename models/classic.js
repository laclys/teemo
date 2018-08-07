/*
 * @Author: Lac 
 * @Date: 2018-08-05 01:24:03 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-08-07 22:59:16
 */
import { HTTP } from '../util/http.js'

export class ClassicModel extends HTTP {
  getLatest(cb) {
    this.request({
      url: 'classic/latest',
      success: (res) => {
        cb(res)
        this._setLatestIndex(res.index)
      }
    })
  }

  getClassic(index, nextOrPrev, cb) {
    this.request({
      url: `classic/${ index }/${ nextOrPrev }`,
      success: res => {
        cb(res)
      }
    })
  }

  /**
   * 是否是最新一期
   * @param {*} index 
   */
  isFirst(index) {
    return index === 1 ? true : false
  }

  /**
   * 是否是最新一期
   * @param {*} index 
   */
  isLatest(index) {
    let lastIndex = this._getLatestIndex()
    console.log(lastIndex)
    console.log(lastIndex, index)
    return lastIndex === index ? true : false
  }

  _setLatestIndex(index) {
    try {
      wx.setStorageSync('lastIndex', index)
    } catch (e) {
      console.log(e)
    }
  }

  _getLatestIndex() {
    try {
      return wx.getStorageSync('lastIndex')
    } catch (e) {
      console.log(e)
    }
  }

}
