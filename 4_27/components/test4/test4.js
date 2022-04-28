// components/test4/test4.js
import {storeBindingsBehavior} from 'mobx-miniprogram-bindings'
import {store} from '../../store/store'
Component({
    behaviors:[storeBindingsBehavior],
    storeBindings:{
        store,
        fields:{
            numA:'numA',
            numB:()=>store.numB,
            sum:'sum'
        },
        //指定要绑定的方法
        actions:{
            updateNum2:'updateNum2'
        }
    },
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        changeNum(e){
            this.updateNum2(e.target.dataset.step)
        }
    }
})
