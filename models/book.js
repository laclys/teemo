/*
 * @Author: Lac
 * @Date: 2018-08-12 22:15:50
 * @Last Modified by: Lac
 * @Last Modified time: 2018-09-22 23:17:16
 */

import { HTTP } from '../util/http-p.js'

const BOOK_HOT_LIST = '/book/hot_list'

export class BookModel extends HTTP {
  getHotList () {
    return this.request({ url: BOOK_HOT_LIST })
  }

  search(start, q) {
    return this.request({
      url: 'book/search?summary=1',
      data: {
        q: q,
        start: start
      }
    })
  }

  getMyBookCount () {
    return this.request({
      url: '/book/favor/count'
    })
  }

  getDetail (bid) {
    return this.request({
      url: `book/${bid}/detail`
    })
  }

  getLikeStatus (bid) {
    return this.request({
      url: `/book/${bid}/favor`
    })
  }

  getComments (bid) {
    return this.request({
      url: `/book/${bid}/short_comment`
    })
  }

  postComment (bid, comment) {
    return this.request({
      url: 'book/add/short_comment',
      method: 'POST',
      data: {
        book_id: bid,
        content: comment
      }
    })
  }
}
