/*
 * @Author: Lac
 * @Date: 2018-08-12 22:24:44
 * @Last Modified by: Lac
 * @Last Modified time: 2018-09-21 00:03:52
 */
import { BookModel } from '../../models/book.js'

let bookModel = new BookModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [],
    searching: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const hotlist = bookModel.getHotList()
    hotlist.then(res => {
      this.setData({
        books: res
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  handleSearch: function () {
    this.setData({
      searching: true
    })
  },

  handleCancel: function() {
    this.setData({
      searching: false
    })
  }
})
