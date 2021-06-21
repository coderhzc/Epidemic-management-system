<template>
  <div>
    <get-login-view :get-login-data="LoginData"/>
  </div>
</template>

<script>
import getLoginView from "./childrenLoginView/getLoginView";
export default {
  name: "LoginView",
  components:{
    getLoginView
  },
  data(){
    return{
      LoginData:{
        swiperimg:[
          require('assets/img/LoginImg/loginimage01.jpg'),
          require('assets/img/LoginImg/loginimage03.jpg'),
          require('assets/img/LoginImg/loginimage04.jpg'),
        ],
        User: {
          vicetitle: [
            "为共同抗击疫情，请您配合居民疫情调查工作",
            "众志成城，群防群控，共抗疫情",
            "拒绝团聚，拒绝走访，保护您我",
            "戴口罩，勤洗手，对疫情说不",
            "坚定信心，同舟共济，科学防治，精准施策，坚决打赢疫情防控阻击战"
          ],
        },
        Admin:{
          vicetitle:[
            "欢迎使用管理人员界面登录",
            "同舟共济，坚守岗位",
            "戴口罩，勤洗手，对疫情说不",
            "众志成城，群防群控，共抗疫情",
          ]
        }
      }
    }
  },
}
</script>

<style scoped>

</style>
