<!-- 个人中心  tab组件 -->
<template>
    <div class="ysp_list_two">
        <ul>
            <li
            v-for="(item,index) in dataList"
            :key="index">
                <router-link :to="item.link">
                    <img :src="item.src" alt="图片">
                    <span>{{item.title}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        props:{
            dataList:{
                type:Array
            }
        },
        name:'listOne',
        data(){
            return {

            }
        },
        created(){
        },
        methods:{
            // handleClick(index,item){
            //     this.active = index
            //     this.$emit('handleClick',index,item)
            // }
        },
    }
</script>
<style lang="scss" scoped>
    .ysp_list_two{
        width:100%;
        padding:1rem 2rem 2rem 2rem;
        background-color:#FFF;

        ul{
            li>a{
                width:100%;
                font-size:1.6rem;
                color:#606060;
                border-bottom:1px solid #eee;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                img{
                    margin-right:1rem;
                    display: block;
                    width:2rem;
                }
                span{
                    display:block;
                    line-height:5rem;
                }
            }
        }
    }
</style>