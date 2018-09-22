/*
 * @Author: Lac
 * @Date: 2018-09-02 15:12:07
 * @Last Modified by: Lac
 * @Last Modified time: 2018-09-20 23:20:54
 */

import { BookModel } from '../../models/book'
import { LikeModel } from '../../models/like'

const bookModel = new BookModel()
const likeModel = new LikeModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    comments: [],
    book: null,
    likeStatus: false,
    likeCount: 0,
    posting: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading()
    const bid = options.bid
    const detail = bookModel.getDetail(bid)
    const comments = bookModel.getComments(bid)
    const likeStatus = bookModel.getLikeStatus(bid)

    Promise.all([detail, comments, likeStatus])
      .then(res => {
        this.setData({
          book: res[0],
          comments: res[1].comments,
          likeStatus: res[2].like_status,
          likeCount: res[2].fav_nums
        })
        wx.hideLoading()
      })
  },

  handleLike: function (ev) {
    const like_or_cancel = ev.detail.behavior
    likeModel.like(like_or_cancel, this.data.book.id, 400)
  },

  handleOpenRealComment: function (e) {
    this.setData({
      posting: true
    })
  },

  handleCancel: function (e) {
    this.setData({
      posting: false
    })
  },

  handlePost: function (ev) {
    const comment = ev.detail.text || ev.detail.value

    if (comment) return

    if (comment.length > 12) {
      wx.showToast({
        title: '最多12字',
        icon: 'none'
      })
      return
    }
    bookModel.postComment(this.data.book.id, comment)
      .then(res => {
        console.log(res)
        wx.showToast({
          title: 'success',
          icon: 'none'
        })

        this.data.comments.unshift({
          content: comment,
          nums: 1
        })

        this.setData({
          comments: this.data.comments,
          posting: false
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

  }
})
