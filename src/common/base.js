export default {
  //判断类型
  OmTypeOf: (val) => {
    let toStr = Object.prototype.toString;
    let res = {
      "[object Array]": "array",
      "[object Object]": "object",
      "[object Number]": "obj_number",
      "[object String]": "obj_string",
      "[object Boolean]": "obj_boolean",
      "[object Date]": "date",
      "[object RegExp]": "regexp"
    };
    let type = typeof val;
    if (val === null) {
      return "null";
    } else if (type === "object") {
      let ret = toStr.call(val);
      return res[ret];
    } else {
      return type;
    }
  },
  //获取query参数
  getQueryString: data => {
    var reg = new RegExp('(^|&)' + data + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) {
      var url = unescape(r[2])
      var tok = url.indexOf('/')
      if (tok != -1) {
        return url.substring(0, tok)
      } else {
        return url
      }
    }
    return null
  },
  //数字动画效果
  Progressively: (elem, cds) => {
    let json = cds || {};
    let from = json.from || 0;
    let time = json.time || 2000;
    let speed = json.speed || 100;
    if (elem.length) {
      elem.forEach(item => {
        let to = Number(item.innerText);
        // console.log(to);
        if (to != NaN) {
          this.NumberAdd(from, to, time, speed, item);
        }
      });
    } else {
      let to = Number(elem.innerText);
      if (to != NaN) {
        this.NumberAdd(from, to, time, speed, item);
      }

    }
  },
  //数字自增
  NumberAdd: (from, to, time, speed, item) => {
    let d = parseInt(time / speed);
    let diff = parseInt((to - from) / d);
    // console.log(diff);
    let inter = setInterval(() => {
      if (to - diff > from) {
        from += diff;
        // console.log(from);
        item.innerText = from;
      } else {
        from = to;
        item.innerText = from;
        clearInterval(inter);
      }
    }, speed);
  }
};
