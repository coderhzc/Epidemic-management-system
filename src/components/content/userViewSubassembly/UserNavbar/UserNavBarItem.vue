<template>        <!--Head-NavBar中间的Item-->
  <div class="item-box">
    <div class="item-for" v-for="(item,index) in navBarItem[0].item" :key="index">
      <div class="title-border"
           :class="{itemActive:index===saveItemIndex,itemUnActive:index!==saveItemIndex,
           titleActive:isTitleMove===index && saveItemIndex !== isTitleMove}"
           @click="mitemClick(index)" @mouseenter="mitemEnter(index)" @mouseleave="mitemLeave">
        <span>{{item.navBarItem}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs:true,
  name: "UserNavBarItem",
  props:{
    navBarItem:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      //保存title点击的索引值
      saveItemIndex:0,
      //获取鼠标悬浮动画的索引值
      isTitleMove:null,
    }
  },
  methods:{
    //点击后禁止悬浮动画
    mitemClick(index){
      this.saveItemIndex = index
      this.isTitleMove = null
    },
    //获取悬浮索引值
    mitemEnter(index){
        this.isTitleMove = index
    },
    //离开悬浮变量赋值为空
    mitemLeave(){
      this.isTitleMove = null
    }
  }
}
</script>

<style scoped>
.item-box{
  display: flex;
  width: 100%;
  height: 100%;
}
.item-for{
  width: 25%;
  height: 55%;
  margin-top: 15px;
}
.title-border{
  width: 60%;
  height: 35px;
  line-height: 25px;
  margin: auto;
  color: #c1e8f5;
  text-align: center;
  font-weight: 300;
  font-size: 13px;
}
.item-for:not(:first-child){
  border-left: 1px solid rgba(40, 82, 132, 0.3);
}
.itemActive{
  color: #026c7f;
  transition: all .5s ease;
}
.itemUnActive{
  color: #c1e8f5;
  transition: all .5s ease;
}

/*Animation*/
.titleActive{
  animation: 2s ease;
  animation-name: titleActiveAnimation;
  animation-iteration-count: infinite;
}
@keyframes titleActiveAnimation {
  0%{
    color: #c1e8f5;
  }
  50%{
    color: #89d1f5;
    transform: scale(.9);
  }
  100%{
    color: #c1e8f5;
  }
}
</style>
