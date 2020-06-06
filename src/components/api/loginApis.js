import  { fetchGet, fetchPost } from '../../https.js'

function loginPost(params) {
    let url = '/admin/auth/v1/login';
    return fetchPost(url,params)
}
function addUser(params) {
    let url = '/admin/user/v1/add';
    return fetchPost(url,params)
}

export default{
    loginPost,
    addUser
}
