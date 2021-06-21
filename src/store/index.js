import { createStore } from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default createStore({
  state: {
    //居民用户信息
    UserAccountNumber:[
      {
        user:'user',
        email:'user1',
        userpassword:'123456'
      },
    ],
    AdminAccountNumber:[
      {
        admin:'admin',
        email:'admin1',
        adminpassword:'654321'
      }
    ]
  },
  modules:{

  },
  getters,
  mutations,
  actions,


})
