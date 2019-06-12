import { request } from '@/utils/request'
function login(params) {
    return request("POST", "/api/auth/login", params)
  }
export default {
    login
} 