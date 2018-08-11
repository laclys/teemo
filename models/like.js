/*
 * @Author: Lac 
 * @Date: 2018-08-05 14:22:03 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-08-08 23:16:08
 */
import { HTTP } from '../util/http.js'

export class LikeModel extends HTTP {
  like(behavior, artID, category) {
    let url = behavior === 'like' ? 'like' : 'like/cancel'
    this.request({
      url: url,
      method: 'POST',
      data: {
        art_id:artID,
        type: category
      }
    })
  }

  getClassicLikeStatus(artID, category, cb) {
    this.request({
      url: `classic/${category}/${artID}/favor`,
      success: cb
    })
  }

}