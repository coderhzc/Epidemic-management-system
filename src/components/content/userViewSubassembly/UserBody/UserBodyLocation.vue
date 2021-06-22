<template>
  <div class="body-location">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserBodyLocation"
}
</script>

<style scoped>
.body-location{
  display: flex;
  width: 100%;
  height: 100%;
}
.left{
  width: 13%;
  background-color: #55a1ff;
}
.right{
  flex: 1;
  background-color: orange;
}
</style>
