<template>
  <div class="user">
    <div class="thumb"><i class="fas fa-user"></i></div>
    <div class="info">
      <slot name="username">
        <!-- 상위 컴포넌트에서 정의할 영역 -->
      </slot>
      <slot name="time">
        <!-- time: {{ info.created }}--> 
        <!-- 상위 컴포넌트에서 정의할 영역 -->
      </slot>
      <slot name="karma">
        <!-- 상위 컴포넌트에서 정의할 영역 -->
        <!-- <p>karma: {{ userInfo.karma }}</p> -->
      </slot>
    </div>
  </div>  
</template>

<script>
export default {
  props: {
    info: Object
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
}
</script>

<style scoped>
.user {
  display: flex;
  /* justify-content: center; */
  align-items: center; 
  padding-bottom:30px;
}
.user .thumb {
  padding-right:10px;
}
.user .thumb .fas{
  font-size: 50px;
}
.user .info{
  font-size: 14px;
}
</style>