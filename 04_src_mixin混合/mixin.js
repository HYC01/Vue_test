// 每一个配置项都是写到混合里面，就是复用配置
// 混合不破坏原有代码，优先级比较低
export const mixin={
    methods:{
        showName(){
            alert(this.name)
        }
    },
}
export const mixin2={
    methods:{
        showName2(){
            alert(this.name)
        }
    },
}
