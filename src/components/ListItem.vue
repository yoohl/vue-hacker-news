<template>
  <div>
    <div v-for="li in listdata" class="list">
      <div class="number" v-if="li.points">{{ li.points }}</div>
      <div class="text">
        <h3 class="title">
          <a :href="li.url" target="_blank" 
            v-if="li.domain">
            {{ li.title }} 
          </a>
          <router-link v-bind:to="`/item/${li.id}`" 
            v-else>
            {{ li.title }}
          </router-link>
        </h3>

        <small>
          {{ li.time_ago }} by 

          <a :href="li.url" target="_blank" 
            v-if="li.domain">
            {{ li.domain }} 
          </a>
          <router-link v-bind:to="`/user/${li.user}`"
            v-else
          >
            {{ li.user }}
          </router-link> 
       </small>
      </div>
    </div> 
  </div> 
  
</template>

<script>
// import { fetchNewsList } from '../api/index.js';

export default {
  computed: {
    listdata() {
      if (this.$route.name === 'news') {
        return this.$store.state.news;
      } else if (this.$route.name === 'ask') {
        return this.$store.state.ask;
      } else if (this.$route.name === 'jobs') {
        return this.$store.state.jobs;
      }
    },
  },
  created() {
    
    // this.$store.dispatch('FETCH_NEWS');
    // fetchNewsList()
    // .then((res) => {
    // console.log(this)
    // this.users = res.data;
    // }).catch(function() {
    //   console.log('error')
    // })

    // console.log(this.$route.name)
    if (this.$route.name === 'news') {
      this.$store.dispatch('FETCH_NEWS');
    } else if (this.$route.name === 'ask') {
      this.$store.dispatch('FETCH_ASK');
    } else if (this.$route.name === 'jobs') {
      this.$store.dispatch('FETCH_JOBS');
    }


  }
}
</script>

<style>

.list {
  display: flex;
  position:relative;
  border-bottom:1px solid #eee;
  padding:15px 0;
}
.list .number {
  font-size: 16px;
  text-align: center;
  width:80px;
  margin:auto 0;
}
.text .title {
  font-size: 16px;
  letter-spacing: -1px;
  font-weight: normal;
  line-height: 29px;
}
.text a {
  color:#000;
}
.text small {
  display: block;
}
.text small a{
  text-decoration: underline
}


</style>