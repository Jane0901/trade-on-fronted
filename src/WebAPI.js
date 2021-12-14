import axios from 'axios'
const config = {
  apiHost1: 'http://localhost:8081',
  apiHost2: 'https:/cosdelus.tw/tradeon/api',
}

export const instance = axios.create({
  baseURL: config.apiHost2,
})

/***************
   常見問題相關
***************/

export const getAllFaqs = instance.get(`/commonqnas/all`)

export const getFaq = (id) => instance.get(`/commonqnas/${id}`)

export const addFaq = (data) => instance.post('/commonqnas/new', data)

export const updateFaq = (id, data) => instance.put(`/commonqnas/${id}`, data)

export const deleteFaq = (id) => instance.delete(`/commonqnas/${id}`)

export const getLimitFaq = (page, limit) =>
  instance.get(`/commonqnas/all?page=${page}&size=${limit}`)

/***************
   分類相關
***************/

// 取得分類
export const getAllCategories = instance.get(`/category/all`)

// 取得特定一筆分類
export const getCategory = (id) => instance.get(`/category/${id}`)

// 新增分類
export const addCategory = (data) => instance.post('/category/new', data)

// 編輯分類
export const updateCategory = (id, data) =>
  instance.put(`/category/${id}`, data)

// 刪除分類
export const deleteCategory = (id) => instance.delete(`/category/${id}`)

/***************
   贈物文相關
 ***************/

// 取得贈物文
export const getAllPosts = (limit) => instance.get(`/posts/all?size=${limit}`)

// 取得特定一筆贈物文
export const getPost = (id) => instance.get(`/posts/${id}`)

// 取得特定某幾筆贈物文（篩選：頁碼、每頁多少筆、發文者、上下架）
export const getLimitPost = (page, limit, owner, isPublic) =>
  instance.get(
    `/posts/all?page=${page}&size=${limit}&user=${owner}&isPublic=${isPublic}`
  )

// 新增贈物文
export const addPost = (data) => instance.post('/posts/new', data)

// 編輯贈物文
export const updatePost = (id, data) => instance.put(`/posts/${id}`, data)

// 刪除贈物文
export const deletePost = (id) => instance.delete(`/posts/${id}`)

// 上架或下架贈物文
export const PostPublishStatus = (id) => instance.put(`/posts/${id}/status`)

/***************
   留言相關
***************/

// 取得留言
export const getAllMessages = (limit) =>
  instance.get(`/messages/all?size=${limit}`)

// 取得該刊登的留言，包含問題和申請索取
export const getPostMessage = (id) => instance.get(`/messages/post/${id}`)

// 取得該交易進程的留言。
export const getDealMessage = (id) => instance.get(`/messages/deal/${id}`)

// 取得該留言或回覆
export const getMessage = (id) => instance.get(`/messages/${id}`)

// 新增留言
export const addMessage = (data) => instance.post('/messages/new', data)

// 新增回覆
export const replyMessage = (id, data) =>
  instance.post(`/messages/${id}/new`, data)

// 編輯留言
export const updateMessage = (id, data) => instance.put(`/messages/${id}`, data)

// 刪除留言
export const deleteMessage = (id) => instance.delete(`/messages/${id}`)

// export default instance
