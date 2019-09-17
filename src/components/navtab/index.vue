<!-- 导航条 -->
<template>
    <div class="ysp_navtab">
        <ul
        v-if="navlist && navlist.length > 0"
        :class="{'justify_content':navlist.length <= 6,'flex_start':navlist.length > 6}">
            <li v-for="(item,index) in navlist" :key="index">
                <router-link :to="item.link + '?id=' + item.id">
                    <img :src="item.src" alt="图片">
                    <p>{{item.title}}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        props:{
            navlist:{
                type:Array
            }
        },
        name:'ysp_navtab',
        data(){
            return {

            }
        },
        created(){
        },
        methods:{

        },
    }
</script>
<style lang="scss" scoped>
    .ysp_navtab{
        width:100%;

        ul{
            width:100%;
            display:flex;
            overflow-x: auto;

            li>a{
                img{
                    width:3.5rem;
                    height:3.5rem;
                    border-radius:2rem;
                    display: block;
                    margin:0 auto;
                    margin-bottom:0.5rem;
                }
                p{
                    text-align: center;
                    font-size:1.4rem;
                }
            }
        }

        ul.justify_content{
            justify-content: space-between;
            flex:1;
        }

        ul.flex_start{
            justify-content: flex-start;

            li{
                flex-shrink:0;
            }
            li:not(:first-child){
                margin-left:2rem;
            }
        }
    }
</style>