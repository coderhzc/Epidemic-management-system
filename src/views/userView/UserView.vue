<template>
  <div class="base">
    <get-nav-bar :navBarItem="navBarItem"/>
    <get-user-body/>
  </div>
</template>

<script>
import getUserBody from "./childrenUserView/getUserBody";
import getNavBar from "./childrenUserView/getNavBar";
export default {
  name: "UserView",
  components:{
    getUserBody,
    getNavBar
  },
  data(){
    return{
      //页面数据
      navBarItem:[
        {
          item:[
          {
            navBarItem: '粤康码',
            QrHorHealth: {
              livingCity: ["广州市", "深圳市", "珠海市", "汕头市", "佛山市", "韶关市", "河源市", "梅州市", "惠州市", "汕尾市", "东莞市",
                "中山市", "江门市", "阳江市", "湛江市", "茂名市", "肇庆市", "清远市", "潮州市", "揭阳市", "云浮市", "现居省外",]
            }
          },
          {
            navBarItem: '粤核酸'
          },
          {
            navBarItem: '新冠疫苗预约'
          },
          {
            navBarItem: '健康申报'
          },
          {
            navBarItem: '疫情危险区域'
          },
          {
            navBarItem: '防疫商品'
          }
        ]
        },
        {
          RightNavbarItem:[
              {
                msg:["联系方式", "客服解答", "问题反馈", "Bug提交",]
              },
              {
                msg:["客服解答","联系方式", "问题反馈", "Bug提交",]
              },
              {
                msg:["问题反馈","联系方式", "客服解答", "Bug提交",]
              },
          ]
        }
    ],
    }
  }
}
</script>

<style scoped>
.base{
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: rgba(85,157,246,.4);
}
</style>
