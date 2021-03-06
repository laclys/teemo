/*
 * @Author: Lac
 * @Date: 2018-08-02 22:03:50
 * @Last Modified by: Lac
 * @Last Modified time: 2018-09-02 15:18:14
 */
import { ClassicModel } from '../../models/classic.js'
import { LikeModel } from '../../models/like.js'

let classicModel = new ClassicModel()
let likeModel = new LikeModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classicData: null,
    first: false,
    latest: true,
    likeCount: 0,
    likeStatus: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    classicModel.getLatest(res => {
      this.setData({
        classicData: res,
        likeCount: res.fav_nums,
        like_status: res.like_status
      })
      if (res.index === 1) {
        this.setData({
          first: false
        })
      }
    })
  },

  handleClick: function (ev) {
    let behavior = ev.detail.behavior
    let id = this.data.classicData.id
    let type = this.data.classicData.type
    likeModel.like(behavior, id, type)
  },

  handleNext: function (ev) {
    this._updateClassicDate('next')
  },

  handlePrev: function (ev) {
    this._updateClassicDate('previous')
  },

  _updateClassicDate: function (nextOrPrev) {
    const index = this.data.classicData.index
    classicModel.getClassic(index, nextOrPrev, res => {
      this._getLikeStatus(res.id, res.type)
      this.setData({
        classicData: res,
        first: classicModel.isFirst(res.index),
        latest: classicModel.isLatest(res.index)
      })
    })
  },

  _getLikeStatus: function (artID, type) {
    likeModel.getClassicLikeStatus(artID, type, (res) => {
      this.setData({
        likeStatus: res.like_status,
        likeCount: res.fav_nums
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
