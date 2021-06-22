<template>        <!--Head-NavBar-View-->
  <div class="base-box">
    <user-nav-bar-location>
      <template v-slot:left>
        <div class="title-box">
          <span>疫情居民调查</span>
        </div>
      </template>
      <template v-slot:center>
        <user-nav-bar-item :="$attrs"/>
      </template>
      <template v-slot:right>
          <right-user-bar-item :="$attrs"/>
      </template>
    </user-nav-bar-location>
  </div>
</template>

<script>
import UserNavBarLocation from "../../../components/content/userViewSubassembly/UserNavbar/UserNavBarLocation";
import UserNavBarItem from "../../../components/content/userViewSubassembly/UserNavbar/UserNavBarItem";
import RightUserBarItem from "../../../components/content/userViewSubassembly/UserNavbar/RightUserBarItem";
export default {
  inheritAttrs: true,
  name: "getNavBar",
  components: {
    UserNavBarLocation,
    UserNavBarItem,
    RightUserBarItem
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
.base-box{
  width: 100%;
  height: 8%;
}
/*left*/
.title-box{
  width: 100%;
  height: 70%;
  line-height: 30px;
  margin-top: 8px;
  text-align: center;
  border-right: 1px;
  font-size: 15px;
  font-weight: 300;
}
</style>
