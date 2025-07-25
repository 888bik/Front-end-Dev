const db = wx.cloud.database()
Page({
  data: {
    students: [],
    showForm: false,
    form: {
      name: '',
      age: '',
      gender: '',
      hobbies: []
    }
  },

  onLoad() {
    this.getStudents()
  },

  getStudents() {
    db.collection('students').get().then(res => {
      this.setData({ students: res.data })
    })
  },

  showAddPanel() {
    this.setData({ showForm: true })
  },

  onNameInput(e) {
    this.setData({ 'form.name': e.detail.value })
  },

  onAgeInput(e) {
    this.setData({ 'form.age': Number(e.detail.value) })
  },

  onGenderChange(e) {
    this.setData({ 'form.gender': e.detail.value })
  },

  onHobbiesChange(e) {
    this.setData({ 'form.hobbies': e.detail.value })
  },

  submitStudent() {
    db.collection('students').add({
      data: {
        avatarUrl: '默认头像路径',
        ...this.data.form
      }
    }).then(() => {
      this.getStudents()
      this.setData({ showForm: false })
    })
  },
  goToDetail(e) {
    const id = e.currentTarget.dataset.id
    console.log("传递的id是：", id) // ✅ 加一个日志看是否是 undefined
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    })
  },
  deleteStudent(e) {
    db.collection('students').doc(e.currentTarget.dataset.id).remove().then(() => {
      this.getStudents()
    })
  }
})
