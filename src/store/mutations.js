export default {
  //保存用户注册信息
  saveUserRegister(state,payload){
    state.UserAccountNumber.push(payload)
  },
  saveAdminRegister(state,payload){
    state.AdminAccountNumber.push(payload)
}
}
