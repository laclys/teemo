/*
 * @Author: Lac 
 * @Date: 2018-08-12 22:15:50 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-08-12 22:20:14
 */
import { HTTP } from '../util/http-p.js'

const BOOK_HOT_LIST = '/book/hot_list'

export class BookModel extends HTTP {
  getHotList() {
    return this.request({ url:BOOK_HOT_LIST })
  }
}