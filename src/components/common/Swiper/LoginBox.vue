<template>        <!--轮播图-->
  <div class="login-box-style">
    <div class="login-left-style">
      <transition-group class="group" name="fade" tag="div" @after-leave="getSwiperIndex">
          <div class="login-left-for" v-for="(item,index) in getSwiperImg" :key="index" v-show="index===swiperindex">
            <div class="left-login-img">
              <img :src="item" alt="">
            </div>
          </div>
      </transition-group>
      <div class="choose-box">
        <ul class="choose-ul" v-for="(item,index) in Object.keys(getSwiperImg).length" :key="index">
          <li :class="{active:index===swiperindex}"></li>
        </ul>
      </div>
    </div>
    <div class="login-right-style">
      <slot name="right-login-message"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginBox",
  props: {
    getSwiperImg:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      swiperindex: 0,
      chooseindex: 0,
    }
  },
  methods:{
  },
  computed:{
    //轮播图定时器
    getSwiperIndex(){
      setInterval(() => {
        this.swiperindex ++
        if(this.swiperindex>this.getSwiperImg.length-1){
          this.swiperindex = 0
        }
      },8000)
    }
  }
}
</script>

<style scoped>
.login-box-style{
  display: flex;
  width: 650px;
  height: 60vh;
  overflow: hidden;
  background-color: #ffffff;
}
.login-left-style{
  position: relative;
  width: 40%;
  height: 100%;
  overflow: hidden;
}
.login-right-style{
  position: relative;
  flex: 1;
}
.login-left-for{
  position: absolute;
  flex: 1;
}
.left-login-img img{
  width: 100%;
}
.choose-box{
  position: absolute;
  right: 100px;
  bottom: 10px;
  display: flex;
}
.choose-ul{
  flex: 1;
  width: 8px;
  height: 8px;
  margin-left: 10px;
  list-style-type: none;
  border-radius: 8px;
  overflow: hidden;
  background-image: linear-gradient(to left bottom, #4b62ff, #0080ff, #0099ff, #00aeff, #00c0ff, #00c0ff, #00c0ff, #00c0ff, #00adff, #0097ff, #0f7bff, #6e56ff);
  border: 1px solid #00daff;
}
.active{
  width: 12px;
  height: 12px;
  background-image: linear-gradient(to left bottom, #008cff, #00adff, #00c7fe, #00dde1, #00eebd, #29f5a4, #54fb83, #7eff5b, #a5ff5f, #c4ff68, #deff73, #f3ff82);
}

/*Animation*/
.group{
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  background-color: rgba(217, 217, 217, 0.49);
}
.fade-enter-active{
  transform: translateX(100%);
  transition: all .5s ease;
}

.fade-enter-to{
  transform: translateX(0);
}
.fade-leave-active{
  transform:translateX(0);
  transition: all .5s ease;
}
.fade-leave-to{
  transform: translateX(-100%);
}
</style>
