<!--图文混编组件 -->
<template>
    <div class="ysp_infoList">
        <articleComponent v-if="details.tpe == 2 || details.tpe == 3" :details="details" :link="link"></articleComponent>
        <videoComponent v-if="details.tpe == 4" :details="details"></videoComponent>
        <wordComponent v-if="details.tpe == 1" :details="details"></wordComponent>
    </div>
</template>
<script>
    // 组件
    import articleComponent from './article'
    import videoComponent from './video'
    import wordComponent from './word'
    
    export default {
        props:{
            details:{
                type:Object,
                default:function(){
                    return {
                        tpe:999
                    }
                }
            }
        },
        name:'infoList',
        data(){
            return {
                link:'/articleDetails'
            }
        },
        components:{
            articleComponent,
            videoComponent,
            wordComponent
        },
    }
</script>
<style scoped>
    .ysp_infoList>div{
        border-bottom:1px solid #ddd;
    }
</style>