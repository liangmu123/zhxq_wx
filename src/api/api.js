import axios from "./axios";
let method = 'get'
//首页轮播图
export function imageList(params) {
    return axios({
        url: "/api/commercialservice/getlist",
        method,
        params
    });
}

//获取公告列表
export function noticeList(params) {
    return axios({
        url: "/api/commercialservice/getnoticelist",
        method: "get",
        params
    });
}

//获取公告详情
export function noticeDetail(params) {
    return axios({
        url: "/api/commercialservice/getnoticeinfo",
        method: "get",
        params
    });
}

//获取小区详情
export function viewDetail() {
    return axios({
        url: '/api/community/getview',
        method: "get"
    })
}
//获取服务类型列表
export function serviceTypeList() {
    return axios({
        url: "/api/commercialservice/getservicetype",
        method: "get"
    });
}


//获取维修服务列表
export function serviceList(params) {
    return axios({
        url: "/api/commercialservice/getservicelist",
        method: "get",
        params
    });
}

//获取投票列表
export function voteList(params) {
    return axios({
        url: "/api/vote/index",
        method: "get",
        params
    });
}


//获取投票详情
export function voteDetail(params) {
    return axios({
        url: "/api/vote/getVoteInfo",
        method: "get",
        params
    });
}

//投票操作
export function handleVote(params) {
    return axios({
        url: "/api/vote/voteDo",
        method: "get",
        params
    });
}

//上报工单
export function report(params) {
    return axios({
        url: "/api/event/add",
        method: "get",
        params
    });
}
//我的上报
export function myReport(params) {
    return axios({
        url: "/api/event/index",
        method: "get",
        params
    });
}
//上报详情
export function reportDetail(params) {
    return axios({
        url: '/api/event/getOne',
        methods: 'get',
        params
    })
}
//处理工单
export function handWork(params) {
    return axios({
        url: '/api/event/hand',
        methods: 'get',
        params
    })
}

//工单列表
export function handleList(params) {
    return axios({
        url: "/api/event/handlist",
        method: "get",
        params
    });
}
//用户信息
export function userInfo() {
    return axios({
        url: "/api/user/userInfo",
        method: "get"
    });
}

//用户绑定
export function userBind(params) {
    return axios({
        url: "/api/user/bind",
        method: "get",
        params
    });
}

//发送验证码
export function messSend(params) {
    return axios({
        url: "/api/sms/send",
        method: "get",
        params
    });
}


//获取二维码
export function qrcode() {
    return axios({
        url: '/api/user/qrcode',
        methods: "get"
    })
}

//获取车牌号
export function getCarno() {
    return axios({
        url: '/api/user/getCarno',
        methods: "get"
    })
}
//更新个人信息
export function updateInfo(params) {
    return axios({
        url: '/api/user/updateInfo',
        methods: 'get',
        params
    })
}

//点赞
export function handleLike(params) {
    return axios({
        url: '/api/common/servicelike',
        methods: 'post',
        params
    })
}
