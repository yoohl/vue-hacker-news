<template>
  <div>
    <user-profile>
      <div slot="username">name: {{ userInfo.id }}</div>
      <span slot="time">{{ 'Joined ' + userInfo.created }}, </span>
      <span slot="karma">{{ userInfo.karma }}</span>
    </user-profile>
  </div>
</template>

<script>
// import axios from 'axios';
// import { fetchUserInfo } from '../api/index.js';
// import { mapState, mapGetters } from 'vuex';

import userProfile from '../components/UserProfile.vue'

export default {
  // data() {
  //   return {
  //     userDate:{} ,
  //   }
  // },
  computed: {
    // ...mapGetters([
    //   'fetchedUser'
    // ])
    userInfo() {
      return this.$store.state.user;
    }

  },
  created() {
    const userName = this.$route.params.id;
    // axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`)
    // .then((res) => {
    //   this.userDate = res.data;
    //    console.log(res,this.userDate)
    // })
    
    this.$store.dispatch('FETCH_USER', userName)
  },
  components: {
    userProfile,
  }
}
</script>

<style>

</style>