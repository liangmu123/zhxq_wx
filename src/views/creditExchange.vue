<!-- 学分兑换 -->
<template>
    <div id="creditExchange" class="ysp_navigation_bottom">
        <exchange-credit></exchange-credit>
    </div>
</template>
<script>
    /**
     * 
     * @param {*} ExchangeCredit  兑换商城
     */
    // import headerNavTab from '@components/headerNavTab'
    import ExchangeCredit from '@components/exchange/ExchangeCredit'
    export default {
        name:'creditExchange',
        data(){
            return {

            }
        },
        components:{
            // headerNavTab,
            ExchangeCredit,
        },
        created(){
        },
        methods:{
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