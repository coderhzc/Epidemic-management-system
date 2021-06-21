export default {
  //用户登录验证
  UserSendNetWork(context,payload){
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        let user = context.state.UserAccountNumber.filter(res => {
          return res.user === payload.loginuserORemail || res.email === payload.loginuserORemail
        }).filter(resnext => {
          return resnext.userpassword === payload.loginuserpassword
        })
        if (user.length>=1){
          resolve()
        }else{
          reject()
        }
      },500)
    })
  },
  AdminSendNetWork(context,payload){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        let admin = context.state.AdminAccountNumber.filter(res => {
          return res.admin === payload.loginadminORemail || res.email === payload.loginadminORemail
        }).filter(resnext => {
          return resnext.adminpassword === payload.loginadminpassword
        })
        if (admin.length>=1){
          resolve()
        }else{
          reject()
        }
      },500)
    })

  },
  //用户注册保存
  UserSaveRegister(context,payload){
    return new Promise(resolve =>{
      setTimeout(() => {
        context.commit('saveUserRegister',payload)
        resolve()
      },500)
    })
  },
  AdminSaveRegister(context,payload){
    return new Promise(resolve => {
      setTimeout(() => {
        context.commit('saveAdminRegister',payload)
        resolve()
      },500)
    })
  }

}
