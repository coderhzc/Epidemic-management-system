<template>        <!--Login-View-->
  <div class="box-location">
    <div class="left-box-location">
        <div class="left-box-for" :class="{active:index===saveLeftActiveIndex,unactive:index!==saveLeftActiveIndex}"
             v-for="(item,index) in bgImage.leftImage" :key="index">
        <img :src="item" alt="">
      </div>
    </div>

    <div class="right-box-location">
      <div class="right-box-for" :class="{active:index===saveRightActiveIndex,unactive:index!==saveRightActiveIndex}"
           v-for="(item,index) in bgImage.rightImage" :key="index">
        <img :src="item" alt="">
      </div>
    </div>

    <div class="box-style">
        <!--轮播图-->
      <login-box :get-swiper-Img="getLoginData.swiperimg">

        <template v-slot:right-login-message>
          <div class="use-introduce" :class="{UserLeaveActive:isUserEnter===false,isClickActive:isUserClick}"
               @click="userIntroduceClick" @mousedown="userIntroduceDown" @mouseleave="userIntroduceLeave" @mouseenter="userEnter">
            <div class="introduce-two">
              <span v-if="isLoginSwitch===0">管理员登录</span>
              <span v-else-if="isLoginSwitch===1">居民登录</span>
              <span v-else-if="isLoginSwitch===2">返回居民登录</span>
              <span v-else-if="isLoginSwitch===3">返回管理登录</span>
            </div>
          </div>

          <!--切换登录界面以及注册页面-->
            <transition-group class="switch-group" tag="div" name="GSwitchLogin">
              <user-login-box class="user-group-item" v-if="isLoginSwitch===0" :get-user-data="getLoginData.User" @registerClick="mUserRegisterSwitch"/>
              <admin-login-box class="admin-group-item" v-else-if="isLoginSwitch===1" :get-admin-data="getLoginData.Admin" @registerClick="mAdminRegisterSwitch"/>
              <user-register-switch class="user-register-group-item" v-else-if="isLoginSwitch===2" @backUserLogin="backUserLogin"/>
              <admin-register-switch class="admin-admin-group-item" v-else-if="isLoginSwitch===3" @backAdminLogin="backAdminLogin"/>
            </transition-group>

          <!--使用说用-->
          <div class="guide-box" :class="{guideIndex:isGuideIndex}">
            <transition-group class="group" tag="div" name="Guide">
              <div v-if="isGuideChoose" :key="1" class="guide-use" @click="miConFontClick" @mouseenter="miConFontEnter" @mouseleave="miConFontLeave">
                <div class="guide-use-arrow">
                  <div class="iconfont" :class="{iConFontActive:isArrow===false,iConFontUnActive:isArrow}"
                  >&#xe601;</div>
                </div>
                <div class="guide-use-span">
                  <span>使用说明</span>
                </div>
              </div>
              <div v-else class="guide-message" :key="2" @mouseleave="mGuideLeave">
                <div class="guide-title">
                  <span>使用说明</span>
                </div>
                <div class="guide-msg">
                  <p>该管理系统内置居民管理员各一位,居民可通过(账号:user 密码:123456)登录,管理员可通过(账号:admin 密码:654321)登录,也可以通过注册登录，该登录页面实现功能较为齐全</p>
                  <p>本产品仅供学习交流,作者:coderhzc 邮箱:1437620263@qq.com</p>
                </div>
              </div>
            </transition-group>
          </div>
        </template>
      </login-box>
    </div>
  </div>
</template>

<script>
import AdminLoginBox from "../../../components/content/loginSubassembly/loginShowBox/AdminLoginBox";
import UserLoginBox from "../../../components/content/loginSubassembly/loginShowBox/UserLoginBox";
import LoginBox from "../../../components/common/Swiper/LoginBox";
import UserRegisterSwitch from "../../../components/content/loginSubassembly/registerSwich/UserRegisterSwitch";
import AdminRegisterSwitch from "../../../components/content/loginSubassembly/registerSwich/AdminRegisterSwitch";
export default {
  name: "getLoginView",
  components:{
    LoginBox,
    UserLoginBox,
    AdminLoginBox,
    UserRegisterSwitch,
    AdminRegisterSwitch,
  },
  props:{
    getLoginData:{
      type:Object,
      default() {
        return {}
      }
    }
  },
  data(){
   return{
     saveLeftActiveIndex:0,     //背景
     saveRightActiveIndex:null,

     mouseStyle:'',       //登录切换
     isLoginSwitch:0,

     isUserEnter:null,        //登录
     isUserClick:null,

     isArrow:null,        //使用说明切换
     isGuideChoose:true,
     isGuideIndex:false,

     bgImage: {
       leftImage: [
         require('assets/img/LoginBG/bg01.jpg'),
         require('assets/img/LoginBG/bg10.jpg'),
         require('assets/img/LoginBG/bg02.jpg'),
         require('assets/img/LoginBG/bg03.jpg'),
         require('assets/img/LoginBG/bg05.jpg'),
       ],
       rightImage:[
         require('assets/img/LoginBG/bg06.jpg'),
         require('assets/img/LoginBG/bg07.jpg'),
         require('assets/img/LoginBG/bg08.jpg'),
         require('assets/img/LoginBG/bg09.jpg'),
         require('assets/img/LoginBG/bg04.jpg'),
       ]
  },
   }
  },
  created() {
    this.setTimeoutIndex()
  },
  methods:{
    //瀑布滚动
    setTimeoutIndex(){
      setInterval(() => {
        if (this.saveLeftActiveIndex>=Object.keys(this.bgImage.leftImage).length-1){
          this.saveLeftActiveIndex = null
          this.saveRightActiveIndex = 0
        }else if(this.saveRightActiveIndex>=Object.keys(this.bgImage.rightImage).length-1){
          this.saveRightActiveIndex = null
          this.saveLeftActiveIndex = 0
        }else if (this.saveLeftActiveIndex !== null){
          this.saveLeftActiveIndex++
        }else if (this.saveRightActiveIndex !== null){
          this.saveRightActiveIndex++
        }
      },2000)
    },

    //切换登录
    userIntroduceClick(){
      this.isUserClick = true
      if (this.isLoginSwitch===0 || this.isLoginSwitch===3){
        this.isLoginSwitch=1
      }else if(this.isLoginSwitch===1 || this.isLoginSwitch===2){
        this.isLoginSwitch=0
      }
    },
    userIntroduceDown(){
      this.isUserClick = false
    },
    userIntroduceLeave(){
      this.isUserClick = false
      this.isUserEnter = false
    },
    userEnter(){
      this.isUserEnter = true
    },

    //显示隐藏图标
    miConFontEnter(){
      this.isArrow = false
    },
    miConFontLeave(){
      this.isArrow = true
    },
    miConFontClick(){
      this.isGuideChoose = false
      this.isGuideIndex = true
    },

    //注册
    mUserRegisterSwitch(n){
      this.isLoginSwitch = n
    },
    mAdminRegisterSwitch(n){
      this.isLoginSwitch = n
    },
    //返回登录
    backUserLogin(n){
      this.isLoginSwitch = n
    },
    backAdminLogin(n){
      this.isLoginSwitch = n
    },
    //说明
    mGuideLeave(){
      this.isGuideChoose = true
      this.isGuideIndex = false
    }
  },
}
</script>

<style scoped>
.box-location {
  position: relative;
  width: 100%;
  /*height: 605px;*/
  height: 100vh;
  background-image: linear-gradient(to bottom, #00d8ff, #77ddff, #abe2ff, #d0e8ff, #eaf0ff, #eaf0ff, #eaf0ff, #eaf0ff, #d0e8ff, #abe1ff, #78dcff, #09d7ff);
  overflow: hidden;
}
.left-box-location{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  column-count: 2;
  column-gap: 5px;
  width: 30%;
  height: 100%;
  margin-left: 10px;
  margin-top: 10px;
}
.left-box-for{
  opacity: .3;
  width: 190px;
}
.left-box-for img {
  width: 100%;
}
.right-box-location{
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  column-count: 2;
  column-gap: 5px;
  width: 30%;
  height: 100%;
  margin-top: 10px;
  margin-right: 10px;
}
.right-box-for{
  opacity: .3;
  width: 190px;
}
.right-box-for img{
  width: 100%;
}

/*login*/
.box-style{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.use-introduce{
  position: absolute;
  z-index: 9;
  top: 5px;
  right: 5px;
  width: 55px;
  height: 45px;
  text-align: center;
  padding-top: 7px;
  cursor:pointer;
  border-radius: 0 0 0 25px;
  box-shadow:-4px 4px 3px rgb(194,194,194);
  background-image: linear-gradient(to left bottom, #0038ff, #007dff, #00aaff, #00d0ff, #51f1ff);
}
.introduce-two{
  width: 40px;
  float: right;
  margin-right: 5px;
  font-size: 12px;
  font-weight: 300;
  color: #ffffff;
}
.guide-box{
  position: absolute;
  bottom:-5px;
  right: 0;
  width: 96%;
  height: 80px;
}
.guideIndex{
  z-index: 3;
}
.guide-use{
  position: absolute;
  z-index: 3;
  bottom: 20px;
  right: 0;
  display: flex;
  width: 25%;
  height: 30px;
  cursor: pointer;
}
.guide-use-arrow{
  width: 35%;
  height: 100%;
  padding-top: 7px;
  padding-left:13px;
}
.iconfont{
  color: #8FCAFE;
}
.guide-use-span{
  flex: 1;
  text-align: center;
  line-height: 30px;
  border-radius:10px 0px 0px 10px;
  background-image: linear-gradient(to right, #8fcafe, #70b8ff, #54a4ff, #418ffe, #3b79f9);
}
.guide-use-span span{
  color: #ffffff;
  font-weight: 300;
}
.guide-msg{
  width: 90%;
  margin: auto;
  line-height: 13px;
  text-indent: 5px;
}
.guide-msg p{
  font-weight: 300;
}
.guide-message{
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px 0px 0px 20px;
  background-image: linear-gradient(to left, #f0f5f9, #b8dafb, #85bcfe, #599cfe, #3b79f9);
}
.guide-title{
  width: 100%;
  text-align: center;
}
.guide-title span{
  font-size: 14px;
  font-weight: 350;
  line-height: 20px;
}
.switch-group{
  background-color: rgba(85,157,246,.25);
  position: relative;
  float: right;
  padding-top: 25px;
  width: 98%;
  height: 100%;
  z-index: 2;
}
.user-group-item{
  position: absolute;
}
.admin-group-item{
  position: absolute;
}
.user-register-group-item{
  position: absolute;
}
.admin-admin-group-item{
  position: absolute;
}
/*active*/
.active{
  opacity: 1;
  transition: all 1s ease;
}
.unactive{
  opacity: .3;
  transition: all 1s ease;
}
/*Animation*/
.UserLeaveActive{
  animation: .3s linear;
  animation-name: isUserLeaveAnimation;
  animation-iteration-count: 2;
}
@keyframes isUserLeaveAnimation {
  0%{
    transform: scale(1);
  }
  25%{
    transform: scale(.99);
  }
  50%{
    transform: scale(.92);
  }
  75%{
    transform: scale(.99);
  }
  100%{
    transform: scale(1);
  }
}
.isClickActive{
  animation: .3s ease;
  animation-name: isUserClickAnimation;
}
@keyframes isUserClickAnimation {
  0%{
    transform: translate(0);
  }
  50%{
    transform: translate(-5px,5px);
    box-shadow: none;
  }
  100%{
    transform: translate(0);
  }
}
.iConFontActive{
  animation: 1s ease;
  animation-name: iConFontAnimationEnter;
  animation-iteration-count: infinite;
}
@keyframes iConFontAnimationEnter {
  0%{
    transform: translateX(0);
    color: #8FCAFE;
  }
  50%{
    transform: translateX(-5px);
    color: #3B79F9;
  }
  100%{
    transform: translateX(0);
    color:#8FCAFE;
  }
}
.iConFontUnActive{
  animation: .5s ease;
  animation-name: iConFontAnimationLeave;
  color: #8FCAFE;
}
@keyframes iConFontAnimationLeave {
  from{
    transform: translateX(-5px);
  }
  to{
    transform: translateX(0);
  }
}

.group{
  position: relative;
  width: 100%;
  height: 100%;
}
.Guide-enter-active{
  transition: all 1s ease;
}
.Guide-leave-active{
  transition: all .3s ease;
}
.Guide-enter-from,
.Guide-leave-to{
  transform: translateX(100%);
}


.GSwitchLogin-enter-active{
  transition: all 1s ease;
}
.GSwitchLogin-leave-active{
  transition: all .5s ease;
}
.GSwitchLogin-enter-from,
.GSwitchLogin-leave-to{
  transform: translateX(100%);
}
</style>
