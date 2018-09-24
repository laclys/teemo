/*
 * @Author: Lac
 * @Date: 2018-09-24 00:41:49
 * @Last Modified by: Lac
 * @Last Modified time: 2018-09-24 14:14:37
 */

export const paginationBev = Behavior({
  data: {
    dataArray: [],
    total: null
  },

  methods: {
    setMoreData (dataArray) {
      const tempArray = this.data.dataArray.concat(dataArray)
      this.setData({
        dataArray: tempArray
      })
    },

    getCurrentStart () {
      return this.data.dataArray.length
    },

    setTotal (total) {
      this.data.total = total
    },

    hasMore () {
      return !(this.data.dataArray.length >= this.data.total)
    },

    init () {
      this.data.total = null
      this.setData({
        dataArray: []
      })
    }
  }
})
