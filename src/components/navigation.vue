<!-- 底部导航组件 -->
<template>
    <yd-tabbar fixed color="#878787" fontsize="1.6rem" padding="1rem" bgcolor="#fff">
        <yd-tabbar-item
            v-for="(item,index) in navList"
            :key="index"
            :title="item.title"
            :link="item.link"
            :style="modular==index?active:false">
                <img slot="icon" style="height:2rem;" :src="modular==index?item.imgActive[1]:item.imgActive[0]">
                <!-- <yd-badge slot="badge" type="danger" v-if="index == 3">111</yd-badge> -->
        </yd-tabbar-item>
    </yd-tabbar>
</template>
<script>
    export default {
        name:'navigation',
        data(){
            return {
                // 导航
                navList:[],
                // 激活色
                active:{
                    color:'red'
                },
                // 所有一级路由
                routes:[],
                // 当前激活项
                modular:0
            }
        },
        created(){  
            if(this.$route.meta.title){
                document.title = this.$route.meta.title
            }
            this.get_all_columns()
            this.handleRouteChange(this.$route)
        },
        watch:{
            $route(val){
                if(this.$route.meta.title){
                    document.title = this.$route.meta.title
                }
                this.handleRouteChange(val)
            }
        },
        methods:{
            // 获取所有栏目
            get_all_columns(){
                var routes = this.$router.options.routes
                for(let item of routes){
                    this.routes.push(item.path)
                }
                for(let item of routes){
                    var obj = {}
                    obj.title = item.meta.title
                    obj.link = item.redirect
                    obj.imgActive = item.meta.imgActive
                    this.navList.push(obj)
                }
            },
            // 切换栏目
            handleRouteChange(val){
                var route = val.matched[0].path
                this.modular = this.routes.indexOf(route) == -1 ? 0 : this.routes.indexOf(route)
            }
        },
    }
</script>
<style scoped>
    
</style>