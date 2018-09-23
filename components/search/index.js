/*
 * @Author: Lac
 * @Date: 2018-09-20 23:48:11
 * @Last Modified by: Lac
 * @Last Modified time: 2018-09-24 01:01:15
 */
import { KeyWordModel } from '../../models/keyword'
import { BookModel } from '../../models/book'

import { paginationBev } from '../behaviors/pagination'

const keywordModel = new KeyWordModel()
const bookModel = new BookModel()

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [paginationBev],
  properties: {
    more: {
      type: String,
      observer: '_load_more'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    historyKeys: [],
    hotKeys: [],
    finished: false,
    q: '',
    loading: false
  },

  attached () {
    this.setData({
      historyKeys: keywordModel.getHistory()
    })

    keywordModel.getHot().then(res => {
      this.setData({
        hotKeys: res.hot
      })
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCancel: function () {
      this.triggerEvent('cancel', {})
    },

    onConfirm: function (ev) {
      this.setData({
        finished: true
      })
      this.init()
      const word = ev.detail.value || ev.detail.text
      bookModel.search(0, word).then(res => {
        this.setMoreData(res.books)
        this.setTotal(res.total)
        this.setData({
          q: word
        })
        keywordModel.addToHistory(word)
      })
    },

    onDelete: function () {
      this.setData({
        finished: false,
        q: ''
      })
    },

    _load_more: function () {
      if (!this.data.q || this.data.loading) return
      if (this.hasMore()) {
        this.setData({
          loading: true
        })
        bookModel.search(this.getCurrentStart(), this.data.q).then(res => {
          this.setMoreData(res.books)
          this.setData({
            loading: false
          })
        })
      }
    }
  }
})
