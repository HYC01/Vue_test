export default{
    install(Vue){
        // 加入这个插件，里面带来的很多命令和过滤器，都能全局使用了
        // 定义全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })

        //定义全局命令
        Vue.directive('fbind',{
            bind(element,binding){
                console.log(this)
                // 注意，此处的this是window
                element.value = binding.value
            },
            // 指令所在元素被插入页面时候
            inserted(element,binding){
                element.focus()
            },
            // 指令所在元素被重新解析时
            update(element,binding){
                element.value = binding.value
                element.focus()
            }
        }) 

        Vue.mixin({
            data(){
                return {
                    x:100,
                    y:200
                }
            }
        })

        // vm和vc都能用了
        Vue.prototype.demo=()=>{alert('你好啊')}
    }
}
