/*
 * @Author: Lac 
 * @Date: 2018-08-05 14:42:30 
 * @Last Modified by: Lac
 * @Last Modified time: 2018-08-05 15:29:16
 */

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    months: ['睦月','如月','弥月', '卯月', '皐月', '水無月', '文月', '葉月', '長月', '神無月', '霜月', '師走'],
    year: 0,
    month: ''
  },

  attached: function() {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()

    this.setData({
      year,
      month: this.data.months[month]
    })

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
