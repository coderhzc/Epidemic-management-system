<template>
  <div class="nav-bar-location">
    <div class="left">
      <slot name="left"></slot>
    </div>

    <div class="center">
      <slot name="center"></slot>
    </div>

    <div class="right">
    <slot name="right"></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: "UserNavBarLocation"
}
</script>

<style scoped>
.nav-bar-location{
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #6fb0ff;
}
.left{
  position: relative;
  width: 13%;
  background-color: #55a1ff;
  box-shadow: 2px 0 4px rgba(40, 82, 132, 0.71);
}
.right{
  position: relative;
  width: 15%;
  background-color: #55a1ff;
  box-shadow: -2px 0 4px rgba(40, 82, 132, 0.71);
}
.center{
  position: relative;
  flex: 1;
}
</style>
