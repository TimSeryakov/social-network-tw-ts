import axios from "axios";

const SAMURAI_API = axios.create({
      baseURL: 'https://social-network.samuraijs.com/api/1.0/',
      withCredentials: true,
      headers: {'API-KEY': process.env.REACT_APP_SAMURAI_API_KEY}
    }
)

export const USERS_API = {
  getUsersData (pageNumber: number = 1, pageSize: number = 5) {
    return SAMURAI_API.get(`users?page=${pageNumber}&count=${pageSize}`)
        .then(response => response.data)
  },

  followUser(userID: number) {
    return SAMURAI_API.post(`follow/${userID}`)
  },

  unFollowUser(userID: number) {
    return SAMURAI_API.delete(`follow/${userID}`)
  }
}

export const PROFILE_API = {
  getProfileData (userID: string) {
    return SAMURAI_API.get(`profile/${userID}`)
        .then(response => response.data)
  },
  getProfileUserStatus (userID: string) {
    return SAMURAI_API.get(`profile/status/${userID}`)
        .then(response => response.data)
  },
  updateProfileUserStatus (status: string) {
    return SAMURAI_API.put(`profile/status`, { status })
        .then(response => response.data)
  },
}

export const AUTH_API = {
  getAuthStatus() {
    return SAMURAI_API.get(`auth/me`)
        .then(response => response.data)
  }
}
