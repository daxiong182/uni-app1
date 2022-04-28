// components/test/test.js
Component({
    options:{
        // 启用样式隔离 页面定义的样式不会在组件上生效
        styleIsolation:'isolated'
    },

    /**
     * 组件的属性列表
     */
    properties: {
        //父子传参 props
        // max:Number
        max:{
            type:Number,
            value:10
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        count:0,
        n1:1,
        n2:1,
        sum:2,
        
    },

    /**
     * 组件的方法列表
     */
    methods: {

        addCount(){
            if(this.data.count>=this.properties.max) return
            this.setData({
                count:this.data.count+1
            })
            this._showCount()
        },
        _showCount(){
            wx.showToast({
              title: 'count是'+this.data.count,
              icon:'none'
            })
        },
        addN1(){
            this.setData({
                n1:this.data.n1+1
            })
        },
        addN2(){
            this.setData({
                n2:this.data.n2+1
            })
        }
    },
    observers:{
        "n1,n2":function(newN1,newN2){
            this.setData({
                sum:newN1+newN2
            })
        }
    }
})
