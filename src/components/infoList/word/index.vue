<!-- 纯文字列表组件 -->
<template>
    <div class="ysp_word">
        <router-link :to="route + '?id=' + details.id">
            <p>{{details.title}}</p>
            <p>{{details.add_time}}</p>
        </router-link>
    </div>
</template>
<script>
    export default {
        name:'wordComponent',
        props:{
            details:{
                type:Object
            }
        },
        data(){
            return {
                route:'',
            }
        },
        created(){
            if(this.$route.matched[0].path){
                this.route = this.$route.matched[0].path + '/articleDetails'
            }else{
                this.route ='/articleDetails'
            }
        },
    }
</script>
<style scoped>
    .ysp_word{
        padding:1rem 0;
    }
    .ysp_word p:first-child{
        font-size:1.8rem;
        line-height:24px;
        color:#333;
        margin-bottom:1rem;
    }
    .ysp_word p:last-child{
        font-size:1.6rem;
        line-height:1.6rem;
        color:#999999;
    }
</style>