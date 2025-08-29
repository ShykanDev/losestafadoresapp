import { defineStore } from 'pinia'

export const sysValues = defineStore('sysVals', {
  state: () => ({
    userLogged: false,
    cookiesAccepted: false,
    userName: '',
    userColor: '',
    userUid: '',
  }),
  getters: {
    getUserLogged: (state) => state.userLogged,
    getCookiesAccepted: (state) => state.cookiesAccepted,
    getUserName: (state) => state.userName,
    getUserColor: (state) => state.userColor,
    getUserUid: (state) => state.userUid,
  },
  actions: {
    setUserLogged(value: boolean) {
      this.userLogged = value
    },
    setCookiesAccepted(value: boolean) {
      this.cookiesAccepted = value
    },
    setUserName(value: string) {
      this.userName = value
    },
    setUserColor(value: string) {
      this.userColor = value
    },
    setUserUid(value: string) {
      this.userUid = value
    },
  },
  persist:true
})
