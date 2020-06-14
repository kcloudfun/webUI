import { fetchGet, fetchPost } from '../../https.js'

function addBlog(params) {
    let url = '/blog/blog/v1/add';
    return fetchPost(url, params)
}
function getMyBlogs(params) {
    let url = '/blog/blog/v1/param/writerId';
    let obj = {
        writerId: params
    };
    return fetchGet(url, obj)
}

export default {
    addBlog,
    getMyBlogs
}
