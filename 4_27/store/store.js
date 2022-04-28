//在这个文件中 创建Store的实例对象
import {observable,action} from 'mobx-miniprogram'

export const store= observable({
    numA:1,
    numB:2,
    active:0,
    //计算属性
    get sum(){
        return this.numA+this.numB
    },
    //actions函数 专门用来修改store中数据的值
    updateNum1:action(function(step){
        this.numA+=step
    }),
    updateNum2:action(function(step){
        this.numB+=step
    }),
    updateActiveTabBarIndex:action(function(index){
        this.active=index
    })
    

})

