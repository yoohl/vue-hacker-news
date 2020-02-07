<template>
  <div>
    <p>user: {{ fetchedUser.id }}</p>
    <p>created: {{ fetchedUser.created }}</p>
    <p>karma: {{ fetchedUser.karma }}</p>
    <p>about: {{ fetchedUser.about }}</p>
  </div>  
</template>

<script>
// import axios from 'axios';
// import { fetchUserInfo } from '../api/index.js';
import { mapState, mapGetters } from 'vuex';
export default {
  // data() {
  //   return {
  //     userDate:{} ,
  //   }
  // },
  computed: {
    ...mapGetters([
      'fetchedUser'
    ])
  },
  created() {
    const userName = this.$route.params.id;
    // axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`)
    // .then((res) => {
    //   this.userDate = res.data;
    //    console.log(res,this.userDate)
    // })
    
    this.$store.dispatch('FETCH_USER', userName)
  }
}
</script>

<style>

</style>