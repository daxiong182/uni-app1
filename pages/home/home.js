// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 存放轮播图数据的数组
    swiperList:[],
    gridList:[]

  },



  //发起GET数据请求获取轮播图数据
  getInfo(){ 
    wx.request({
      url: 'https://www.escook.cn/slides',
      method:'GET',
      success:(res)=>{
       const data= res.data
       this.setData({swiperList:data})
      }
    })
  },

  //获取九宫格数据的方法
  getGridList(){
    wx.request({
      url: 'https://www.escook.cn/categories',
      method:'GET',
      success:(res)=>{
        const data=res.data;
        this.setData({
          gridList:data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getInfo()
      this.getGridList()
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