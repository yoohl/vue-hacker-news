<template>
  <div>
    <list-item></list-item>
  </div> 
  
</template>

<script>

import ListItem from '../components/ListItem.vue';

export default {
  // data() {
  //   return {
  //     users: []
  //   }
  // },
  created() {
    // this.$store.dispatch('FETCH_NEWS')
    // fetchNewsList()
    // .then((res) => {
    // console.log(this)
    // this.users = res.data;
    // }).catch(function() {
    //   console.log('error')
    // })
  },
  components: {
    ListItem,
  }

}
</script>

<style>

</style>
