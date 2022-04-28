import {storeBindingsBehavior} from 'mobx-miniprogram-bindings'
import {store} from '../store/store'

Component({
    behaviors:[storeBindingsBehavior],
    storeBindings:{
        store,
        fields:{
            sum:'sum',
            active:'active'
        },
        actions:{
            updateActive:'updateActiveTabBarIndex'
        }
    },
    observers:{
        'sum':function(val){
            this.setData({
                'list[1].info':val
            })
        }
    },
    options:{
        styleIsolation: 'shared'
    },
    properties:{


    },
    data:{
        list:[
            {
                "pagePath": "/pages/home/home",
                "text": "首页",
                "iconPath": "/images/home.png",
                "selectedIconPath":"/images/home-active.png"
              },
              {
                "pagePath": "/pages/message/message",
                "text": "消息",
                "iconPath": "/images/message.png",
                "selectedIconPath":"/images/message-active.png",
                info:2
              },
              {
                "pagePath": "/pages/contact/contact",
                "text": "联系我们",
                "iconPath": "/images/contact.png",
                "selectedIconPath":"/images/contact-active.png"
              }
        ]
    },

    methods:{
        onChange(event) {
            this.setData({ active: event.detail });
            this.updateActive(event.detail)
            console.log(this.data.active);
            wx.switchTab({
              url: this.data.list[event.detail].pagePath,
            })

          },
        
    }


})


