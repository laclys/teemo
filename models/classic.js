/*
 * @Author: Lac
 * @Date: 2018-08-05 01:24:03
 * @Last Modified by: Lac
 * @Last Modified time: 2018-08-12 13:45:58
 */
import { HTTP } from '../util/http.js'

export class ClassicModel extends HTTP {
  getLatest (cb) {
    this.request({
      url: 'classic/latest',
      success: (res) => {
        this._setLatestIndex(res.index)
        wx.setStorageSync(this._getKey(res.index), res)
        cb(res)
      }
    })
  }

  getClassic (index, nextOrPrev, cb) {
    let key = nextOrPrev === 'next' ? this._getKey(index + 1) : this._getKey(index - 1)
    let classic = wx.getStorageSync(key)
    if (!classic) {
      this.request({
        url: `classic/${index}/${nextOrPrev}`,
        success: res => {
          wx.setStorageSync(this._getKey(res.index), res)
          cb(res)
        }
      })
    } else {
      cb(classic)
    }
  }

  /**
   * 是否是最新一期
   * @param {*} index
   */
  isFirst (index) {
    return index === 1
  }

  /**
   * 是否是最新一期
   * @param {*} index
   */
  isLatest (index) {
    let lastIndex = this._getLatestIndex()
    return lastIndex === index
  }

  _setLatestIndex (index) {
    try {
      wx.setStorageSync('lastIndex', index)
    } catch (e) {
      console.log(e)
    }
  }

  _getLatestIndex () {
    try {
      return wx.getStorageSync('lastIndex')
    } catch (e) {
      console.log(e)
    }
  }

  _getKey (index) {
    let key = 'classic-' + index
    return key
  }
}
