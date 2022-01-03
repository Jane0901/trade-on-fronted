import axios from 'axios'
import { getAuthToken } from './utils'

const config = {
  apiHost1: 'http://localhost:8081',
  apiHost2: 'https:/cosdelus.tw/tradeon/api',
}

const instance = axios.create({
  baseURL: config.apiHost2,
  headers: { withCredentials: true, Authorization: `Bearer ${getAuthToken()}` },
})

// user
export const register = async (email, nickname, password, confirmPassword) =>
  await instance.post('/users/register', {
    email,
    nickname,
    password,
    confirmPassword,
  })

export const login = async (email, password) =>
  await instance.post('/users/login', { email, password })

export const getMe = async () => await instance.get(`/users/me`)

export const logout = async () => await instance.get('/users/logout')

// transaction
export const getAllTransactions = async (limit) =>
  instance.get(`/transactions/all?size=${limit}`)

export const getTransaction = async (id) => instance.get(`/transactions/${id}`)

export const cancelTransaction = async (id) =>
  instance.put(`/transactions/${id}/cancel`)

// faq
export const getAllFaqs = (limit) =>
  instance.get(`/commonqnas/all?size=${limit}`)

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
export const getAllCategories = (limit) =>
  instance.get(`/category/all?size=${limit}`)

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

// 更新使用者頭像
export const PutAvatar = (id, data) => instance.put(`/users/${id}/avatar`, data)

// 更新使用者資料
export const updateUserInfo = (id, data) => instance.put(`/users/${id}`, data)
