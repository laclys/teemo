/*
 * @Author: Lac
 * @Date: 2018-09-24 00:41:49
 * @Last Modified by: Lac
 * @Last Modified time: 2018-09-24 14:23:50
 */

export const paginationBev = Behavior({
  data: {
    dataArray: [],
    total: null,
    noneResult: false
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
      if (total === 0) {
        this.setData({
          noneResult: true
        })
      }
    },

    hasMore () {
      return !(this.data.dataArray.length >= this.data.total)
    },

    init () {
      this.data.total = null
      this.setData({
        dataArray: [],
        noneResult: false
      })
    }
  }
})
