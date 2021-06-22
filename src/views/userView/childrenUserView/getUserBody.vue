<template>        <!--User-Body-view-->
  <div class="body-box">
    <user-body-location>
      <template v-slot:left>
        <user-body-left-nav-bar/>
      </template>
      <template v-slot:right></template>
    </user-body-location>
  </div>
</template>

<script>
import UserBodyLocation from "../../../components/content/userViewSubassembly/UserBody/UserBodyLocation";
import UserBodyLeftNavBar from "../../../components/content/userViewSubassembly/UserBody/UserBodyLeftNavBar";
export default {
  name: "getUserBody",
  components:{
    UserBodyLocation,
    UserBodyLeftNavBar
  }
}
</script>

<style scoped>
.body-box{
  width: 100%;
  height: 92%;
}
</style>
