// pages/message/message.js
import {createStoreBindings} from 'mobx-miniprogram-bindings'
import {store} from '../../store/store'
Page({
    /**
     * 页面的初始数据
     */
    data: {
        count:0,
        username:'zhangsan',
        country:'CHINA'
    },
   async getInfo(){
       const res=await wx.p.request({
          url: 'https://www.escook.cn/api/get',
          method:'GET',
          data:{
              name:'zs',
              age:20
          },
     })
     console.log(res);
    },
    btnHandler1(e){
        this.updateNum1(e.target.dataset.step)
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        //将store中的数据 绑定到页面上
        this.storeBinding=createStoreBindings(this,{
            store,
            fields:['numA','numB','sum'],
            actions:["updateNum1"]
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {
        this.storeBinding.destroyStoreBindings()
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})