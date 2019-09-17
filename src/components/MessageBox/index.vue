<!-- 弹出框 -->
<template>
    <transition name="fade">
        <div class="ysp_messageBox" v-show="isShowMessageBox" @click.self="closeMessageBox">
            <div class="inner">
                <img src="./assets/bg.png" alt="图片">
                <div class="area">
                    <p>
                        是否兑换该商品
                    </p>
                    <div class="btn">
                        <el-button type="warning" @click="closeMessageBox">取消</el-button>
                        <el-button type="warning">确定</el-button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        name:'ysp_messageBox',
        props:{
            isShowMessageBox:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return {
            }
        },
        created(){
        },
        methods:{
            closeMessageBox(){
                this.$emit('closeMessageBox')
            }
        },
    }
</script>
<style lang="scss" scoped>
    .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    }
    .ysp_messageBox{
        width:100%;
        height:100%;
        position:fixed;
        top:0;
        left:0;
        z-index:999;
        background-color:rgba(0,0,0,.7);

        .inner{
            width:90%;
            margin:0 auto;
            padding-top:2rem;
            position:relative;
            z-index:1000;

            >img{
                width:100%;
                display:block;
            }
            .area{
                position:absolute;
                width:100%;
                z-index:999;
                color:#000;
                bottom:20%;

                p,.btn{
                    width:100%;
                    text-align:center;
                    
                }
                p{
                    margin-bottom:3rem;
                }
                .btn{
                    .el-button.el-button--warning{
                        background-color:orange;
                    }
                    .el-button:last-child{
                        margin-left:3rem;
                    }
                }
            }
        }
    }
</style>