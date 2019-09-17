<!-- 图片滚动 -->
<template>
    <div class="ysp_slide">
        <!-- 图片轮播 -->
        <yd-slider autoplay="3000" class="initImg">
            <yd-slider-item v-for="(item,index) in photos" :key="index">
                <img :src="IMG_PATH + item" alt="图片">
            </yd-slider-item>
        </yd-slider>
    </div>
</template>
<script>
    export default {
        props:{
            photos:{
                type:Array
            }
        },
        name:'ysp_slide',
        data(){
            return {
                IMG_PATH:process.env.IMG_PATH
            }
        },
        components:{

        },
        created(){
        },
        methods:{
        },
    }
</script>
<style scoped>
</style>