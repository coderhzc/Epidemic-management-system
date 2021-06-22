<template>        <!--HeadNavBar右边的图标和下拉菜单-->
  <div class="base"  @mouseleave="mDropDownLeave">
    <div class="iconfont-style">
      <div class="iconfont-inside" @mouseenter="serverEnter" :class="{mouseActive:iconindex===0,unmouseActive:iconindex!==0}">
        <i class="iconfont">&#xe623;</i>
        <div class="icon"><p>客服</p></div>
      </div>
      <div class="iconfont-inside" @mouseenter="messageEnter" :class="{mouseActive:iconindex===1,unmouseActive:iconindex!==1}">
        <i class="iconfont">&#xe624;</i>
        <div class="icon"><p>消息</p></div>
      </div>
      <div class="iconfont-inside" @mouseenter="profileEnter" :class="{mouseActive:iconindex===2,unmouseActive:iconindex!==2}">
        <i class="iconfont">&#xe61e;</i>
        <div class="icon"><p>个人</p></div>
      </div>
    </div>
    <div class="drop-down-box">
      <transition name="tDropDown">
      <div class="drop-down-all-box" v-show="isShowDropDown" :class="{servebox:showDropDown===0,messagebox:showDropDown===1,profilebox:showDropDown===2}"
       @mouseenter="isShowDropDown=true">
        <div class="drop-down-for" v-for="(item,index) in navBarItem[1].RightNavbarItem[showDropDown].msg" :key="index"
        @mouseenter="mSaveIndex(index)" :class="{mouseActive:index === itemindex,unmouseActive:index !== itemindex}">
          <p>{{item}}</p>
        </div>
      </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs:true,
  name: "RightUserBarItem",
  components:{
  },
  props:{
    navBarItem:{
      type:Array,
      default(){
        return []
      }
    },
  },
  data(){
    return{
      //每个图标下拉菜单对应的位置
      showDropDown:0,
      //是否展示动画
      iconindex:null,
      //作用于每次切换时变量赋值为null
      itemindex:null,
      //展示下拉菜单
      isShowDropDown:false,
    }
  },
  methods:{
    //客服动画
    serverEnter(){
      this.showDropDown = 0
      this.iconindex = 0
      this.itemindex = null
      this.isShowDropDown = true
    },
    messageEnter(){
      this.showDropDown = 1
      this.iconindex = 1
      this.itemindex = null
      this.isShowDropDown = true
    },
    profileEnter(){
      this.showDropDown = 2
      this.iconindex = 2
      this.itemindex = null
      this.isShowDropDown = true
    },
    mDropDownLeave(){
      this.iconindex = null
      this.itemindex = null
      this.isShowDropDown = false
    },
    //获取下拉菜单item的索引值
    mSaveIndex(index){
      this.itemindex = index
    }
  }
}
</script>

<style scoped>
/*right*/
.base{
  width: 100%;
  height: 200px;
}
.iconfont-style{
  position: relative;
  z-index: 5;
  display: flex;
  width: 100%;
  height: 20%;
  padding-left: 10pt;
  background-color: #55a1ff;
}
.iconfont-inside{
  width: 20%;
  height: 100%;
  margin-left: 10px;
  padding-top: 10px;
  text-align: center;
  color: #c1e8f5;
}
.iconfont{
  font-size: 20px;
  line-height: 20px;
}
.icon{
  width: 100%;
  height: 100%;
}
.icon p{
  font-weight: 300;
}

/*drop-down*/
.drop-down-box{
  position: absolute;
  top: 0;
  width: 100%;
  height: 200px;
}
.drop-down-all-box{
  position: absolute;
  top: 48px;
  width: 55%;
  height: 75%;
  background-color: #55a1ff;
  box-shadow: 0 4px 5px rgba(40, 82, 132, 0.6);
}

.servebox{
  right: 86px;
  transition: all .5s ease;
}
.messagebox{
  right: 50px;
  transition: all .5s ease;
}
.profilebox{
  right: 0;
  transition: all .5s ease;
}
.drop-down-for{
  width: 70%;
  margin:5px auto;
  color: #c1e8f5;
}
.drop-down-for:not(:last-child){
  border-bottom: 1px solid rgba(40, 82, 132, 0.3);
}
.drop-down-for p{
  width: 100%;
  height: 25px;
  font-weight: 300;
  line-height: 30px;
  text-align: center;
  margin-bottom: 5px;
}
/*animation*/
.mouseActive{
  color: #026c7f;
  transition: all .5s ease;
}
.unmouseActive{
  color: #c1e8f5;
  transition: all 2s ease;
}
/*transition*/
.tDropDown-enter-active,
.tDropDown-leave-active{
  transition: all .3s ease;
}
.tDropDown-enter-from,
.tDropDown-leave-to{
  transform: translateY(-500%);
}
</style>
