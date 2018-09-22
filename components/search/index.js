/*
 * @Author: Lac
 * @Date: 2018-09-20 23:48:11
 * @Last Modified by: Lac
 * @Last Modified time: 2018-09-23 00:16:36
 */
import { KeyWordModel } from '../../models/keyword'
import { BookModel } from '../../models/book'

const keywordModel = new KeyWordModel()
const bookModel = new BookModel()

Component({
  /**
   * 组件的属性列表
   */
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
    dataArray: [],
    finished: false,
    q: ''
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
      const word = ev.detail.value || ev.detail.text
      bookModel.search(0, word).then(res => {
        this.setData({
          dataArray: res.books,
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
      console.log(123)
    }
  }
})
