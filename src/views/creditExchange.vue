<!-- 学分兑换 -->
<template>
    <div id="creditExchange" class="ysp_navigation_bottom">
        <header-nav-tab class="header_nav_tab" @handleClick="handleClick" :navlist="navlist"></header-nav-tab>
        <exchange-credit v-if="nowActive == 0"></exchange-credit>
        <exchange-record v-else-if="nowActive == 1"></exchange-record>
        <exchange-rules v-else></exchange-rules>
    </div>
</template>
<script>
    /**
     * 
     * @param {*} headerNavTab  导航条组件
     * @param {*} ExchangeCredit  兑换商城
     * @param {*} ExchangeRecord  兑换记录
     * @param {*} ExchangeRules  兑换规则
     */
    import headerNavTab from '@components/headerNavTab'
    import ExchangeCredit from '@components/exchange/ExchangeCredit'
    import ExchangeRecord from '@components/exchange/ExchangeRecord'
    import ExchangeRules from '@components/exchange/ExchangeRules'
    export default {
        name:'creditExchange',
        data(){
            return {
                navlist:[
                    {title:'学分兑换'},
                    {title:'兑换记录'},
                    {title:'学分规则'}
                ],
                nowActive:0,
            }
        },
        components:{
            headerNavTab,
            ExchangeCredit,
            ExchangeRecord,
            ExchangeRules
        },
        created(){
        },
        methods:{
            handleClick(index,item){
                this.nowActive = index
            }
        }
    }
</script>
<style lang="scss" scoped>
    #creditExchange{
        .header_nav_tab{
            background-color:#FFF;
            padding:0 1rem;
        }
    }
</style>