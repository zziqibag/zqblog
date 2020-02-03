const isProd = process.env.NODE_ENV === 'production'
let ipUrl = 'http://127.0.0.1:5000/api/blog/' 

if(isProd){
    ipUrl = 'http://bapi.zziqi.com/api/blog/'
}

let servicePath = {
    login:ipUrl + 'login' ,  //  登录
}

export default servicePath;