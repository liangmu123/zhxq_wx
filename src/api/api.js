import axios from "./axios";

//首页轮播图
export function imageList(params) {
    return axios({
        url: "commercialservice/getlist",
        method: "get",
        params
    });
}

//获取公告列表
export function noticeList(params) {
    return axios({
        url: "commercialservice/getnoticelist",
        method: "get",
        params
    });
}

//获取公告详情
export function noticeDetail(params) {
    return axios({
        url: "commercialservice/getnoticeinfo",
        method: "get",
        params
    });
}

//获取维修服务列表
export function servicelist(params) {
    return axios({
        url: "commercialservice/getservicelist",
        method: "get",
        params
    });
}

//获取投票列表
export function voteList(params) {
    return axios({
        url: "vote/index",
        method: "get",
        params
    });
}

