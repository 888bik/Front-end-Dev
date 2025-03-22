Page({
  data: {
    showInfo: false,
    userInfo: {}
  },

  formSubmit(e) {
    const formData = e.detail.value
    this.setData({
      userInfo: {
        ...formData,
        hobbies: formData.hobbies?.join(',')
      },
      showInfo: true
    })
  }
})