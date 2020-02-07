<template>
  <div>
    <!-- <div v-for="job in this.$store.state.jobs">
      <div class="list">
        <a :href="job.url" target="_blank">{{ job.title }} </a>
        <small>{{ job.time_ago }}, {{ job.domain }}</small>
      </div>
    </div> -->
    <list-item></list-item>
  </div>
</template>

<script>
// import { fetchJobsList } from '../api/index.js'
import ListItem from '../components/ListItem.vue';

export default {
  // data() {
  //   return {
  //     jobs: []
  //   }
  // },
  created() {
    
    // this.$store.dispatch('FETCH_JOBS')
    // console.log('호출전', this)
    // fetchJobsList()
    //   .then((response) => {
    //     console.log('호출후', this)
    //     this.jobs = response.data
    //   })
    //   .catch()
  },
  components: {
    ListItem,
  }

}
</script>

<style>

</style>
