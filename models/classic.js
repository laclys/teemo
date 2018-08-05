/*
 * @Author: Lac 
 * @Date: 2018-08-05 01:24:03 
 * @Last Modified by:   Lac 
 * @Last Modified time: 2018-08-05 01:24:03 
 */
import { HTTP } from '../util/http.js'

export class ClassicModel extends HTTP {
  getLatest(cb) {
    this.request({
      url: 'classic/latest',
      success: (res) => {
        cb(res)
      }
    })
  }
}