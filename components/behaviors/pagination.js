/*
 * @Author: Lac
 * @Date: 2018-09-24 00:41:49
 * @Last Modified by: Lac
 * @Last Modified time: 2018-09-24 14:42:40
 */

export const paginationBev = Behavior({
  data: {
    dataArray: [],
    total: null,
    noneResult: false,
    loading: false
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
        noneResult: false,
        loading: false
      })
    },

    isLocked() {
      return this.data.loading
    },

    locked() {
      this.setData({
        loading: true
      })
    },

    unlocked() {
      this.setData({
        loading: false
      })
    },
  }
})
