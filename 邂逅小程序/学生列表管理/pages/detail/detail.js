const db = wx.cloud.database()

Page({
  data: {
    student: {}
  },

  onLoad(options) {
    const id = options.id
    db.collection('students').doc(id).get().then(res => {
      this.setData({ student: res.data })
    })
  }
})
