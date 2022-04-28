// components/test3/test3.js
const myBehavior=require('../../behaviors/my-behaviors')
Component({
    behaviors:[myBehavior],
    options:{
        //指定所有 _ 开头的数据字段为纯数据字段
        pureDataPattern:/^_/,
        multipleSlots:true
    },
    /**
     * 组件的属性列表
     */
    properties: {
        count:{
            type:Number,
        },
       
    },

    /**
     * 组件的初始数据
     */
    data: {
        rgb_:{
            r:0,
            g:0,
            b:0
        },
        fullColor:'0,0,0'
    },
    lifetimes:{
        created(){
            console.log('created');
        },
        attached(){
            console.log('attached');
        },
    },

    pageLifetimes:{
        //监听当前组件所在页面提供的生命周期钩子
        show(){
            this._randomColor()
        },
        hide(){
            console.log('hide');
        },
        resize(){
            console.log('resize');
        }
    },
 
    /**
     * 组件的方法列表
     */
    methods: {
        changeR(){
            this.setData({
                'rgb_.r':this.data.rgb_.r+5>255?255:this.data.rgb_.r+5
            })
        },
        changeG(){
            this.setData({
                'rgb_.g':this.data.rgb_.g+5>255?255:this.data.rgb_.g+5
            })
        },
        changeB(){
            this.setData({
                'rgb_.b':this.data.rgb_.b+5>255?255:this.data.rgb_.b+5
            })
        },
        _randomColor(){
            this.setData({
                rgb_:{
                    r:Math.floor(Math.random()*256) ,
                    g:Math.floor(Math.random()*256) ,
                    b:Math.floor(Math.random()*256) ,
                }
            })
        },
        changeCount(){
            this.setData({
                count:this.properties.count+1
            }) 
            this.triggerEvent('changeFather',{value:this.properties.count})   
        }
    },
    observers:{
        'rgb_.r,rgb_.g,rgb_.b':function(newR,newG,newB){
            this.setData({
                fullColor:newR+','+newG+','+newB
            })
        }
    }

})
