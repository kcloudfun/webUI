import { fetchGet, fetchPost } from '../../https.js'

//发布博客
function addBlog(params) {
    let url = '/blog/blog/v1/add';
    return fetchPost(url, params)
}

//查询我的博客列表
function getMyBlogs(params) {
    let url = '/blog/blog/v1/param/writerId';
    let obj = {
        writerId: params
    };
    return fetchGet(url, obj)
}

//根据学科类型查询博客列表
function getBlogsByType(params) {
    let url = '/blog/blog/v1/param/type';
    let obj = {
        type: params
    };
    return fetchGet(url, obj)
}

//删除博客
function deleteBlog(params) {
    let url = '/blog/blog/v1/delete/' + params;
    let obj = {
    };
    return fetchPost(url, obj)
}

export default {
    addBlog,
    getMyBlogs,
    deleteBlog,
    getBlogsByType
}
