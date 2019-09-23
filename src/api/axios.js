import axios from 'axios'
import { Message } from 'element-ui'
import store from '../store'
// console.log(axios.defaults.headers)


// axios.defaults.headers.common["token"] = '44ba7325-a54a-411e-9950-f43acc8af1ed';
let config = {
    baseURL: "http://hz.cst-info.cn/api/",
    timeout: 5000, // Timeout
    // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);
// _axios.promise.token='111';
// //request拦截器
_axios.interceptors.request.use(
    function (config) {
        store.dispatch("setLoading", true);
        // config.params.token ='44ba7325-a54a-411e-9950-f43acc8af1ed'
        // console.log(config.params)
        // Object.assign(config.headers,{'token':'44ba7325-a54a-411e-9950-f43acc8af1ed'})
        // console.log(config)
        // if (localStorage.token) {
        //     config.headers.token = localStorage.token;
        // }
        // config.header.token = ;
        return config;
    },
    function (error) {
        // console.log(error)
        // Do something with request error
        return Promise.reject(error);
    }
);

// //respone拦截器
_axios.interceptors.response.use(
    response => {
        console.log(1111)

        if (response.status != 200) {
            return Promise.reject("error");
        } else {
            //  new Promise(resolve => {
            //     commit('SET_LOAD',loading)

            // }).then()

            // Promise.resolve().then(res => {
                


            // }).then(data => {
                
            // })
            store.dispatch("setLoading", false);
            return response.data;


        }
    },
    error => { //默认除了2XX之外的都是错误的，就会走这里
        let status = error.response.status;
        if (error && status) {
            let errMsg = {
                400: "请求出错",
                401: "请登录后再操作",
                403: "拒绝访问",
                408: "请求超时",
                500: "服务器内部错误",
                501: "服务未实现",
                502: "网关错误",
                503: "服务不可用",
                504: "网关超时",
                505: "http版本不受支持"
            };
            // console.log(errMsg, err.response.status);
            // console.log("err:" + );
            Message.error(errMsg[status]);
        }
        return Promise.reject(error);
    }
)

export default _axios;