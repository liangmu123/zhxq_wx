<!-- 标签页 -->
<template>
    <div class="ysp_labelList">
        <list-one v-if="tpe == 1" :dataList="dataList"></list-one>
        <list-two v-else-if="tpe == 2" :dataList="dataList"></list-two>
        <list-three v-else-if="tpe == 3" :dataList="dataList"></list-three>
        <list-four v-else-if="tpe == 4" :dataList="dataList"></list-four>
        <list-five v-else-if="tpe == 5" :dataList="dataList"></list-five>
    </div>
</template>
<script>
    import ListOne from './ListOne'
    import ListTwo from './ListTwo'
    import ListThree from './ListThree'
    import ListFour from './ListFour'
    import ListFive from './ListFive'
    export default {
        props:{
            dataList:{
                type:Array
            },
            tpe:{
                type:[String,Number],
                required:true
            }
        },
        name:'labelList',
        data(){
            return {

            }
        },
        created(){
        },
        components:{
            ListOne,
            ListTwo,
            ListThree,
            ListFour,
            ListFive
        },
        methods:{
        },
    }
</script>
<style lang="scss" scoped>
</style>