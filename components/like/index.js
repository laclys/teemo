/*
 * @Author: Lac 
 * @Date: 2018-08-02 22:19:42 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-08-02 23:02:14
 */

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Boolean,
      value: false
    },
    count: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    likePng: './images/like.png',
    dislikePng: './images/dislike.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTap: function(e) {
      let like = this.properties.like
      let count = this.properties.count

      count = like ? count - 1 : count + 1
      this.setData({
        count: count,
        like: !like
      })
    }
  }
})
