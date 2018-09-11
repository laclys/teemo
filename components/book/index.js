/*
 * @Author: Lac
 * @Date: 2018-08-20 23:42:34
 * @Last Modified by: Lac
 * @Last Modified time: 2018-09-02 15:17:31
 */

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    book: Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTap: function (ev) {
      const bid = this.properties.book.id
      wx.navigateTo({
        url: `/pages/book-detail/book-detail?bid=${bid}`
      })
    }
  }
})
