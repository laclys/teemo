/*
 * @Author: Lac
 * @Date: 2018-09-20 23:48:11
 * @Last Modified by: Lac
 * @Last Modified time: 2018-09-24 14:43:52
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
      observer: 'loadMore'
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
    loadingCenter: false
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
      this.init()
      this.triggerEvent('cancel', {})
    },

    onConfirm: function (ev) {
      this._showRes()
      this._showLoadingCenter()
      // this.init()
      const word = ev.detail.value || ev.detail.text
      bookModel.search(0, word).then(res => {
        this.setMoreData(res.books)
        this.setTotal(res.total)
        this.setData({
          q: word
        })
        keywordModel.addToHistory(word)
        this._hideLoadingCenter()
      })
    },

    onDelete: function () {
      this.init()
      this._closeRes()
    },

    loadMore: function () {
      if (!this.data.q || this.isLocked()) return
      if (this.hasMore()) {
        this.locked()
        bookModel.search(this.getCurrentStart(), this.data.q).then(res => {
          this.setMoreData(res.books)
          this.unlocked()
        },() => {
          this.unlocked()
        })
      }
    },

    _showRes: function () {
      this.setData({
        finished: true
      })
    },

    _closeRes: function () {
      this.setData({
        finished: false,
        q: ''
      })
    },

    _showLoadingCenter: function () {
      this.setData({
        loadingCenter: true
      })
    },
    _hideLoadingCenter: function () {
      this.setData({
        loadingCenter: false
      })
    }
  }
})
