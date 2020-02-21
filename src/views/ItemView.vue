<template>
  <div>
    <!-- 사용자 정보 -->
    <user-profile>
      <router-link  slot="username" v-bind:to="`/user/${item.user}`">
        {{ item.user }}
      </router-link>
      <div slot="time">{{ 'posted ' + item.time_ago }}</div>
    </user-profile>

    <!-- 글 --> 
    <div class="title">{{ item.title }}</div>
    <div class="subtext">
      <span>{{ item.points }} points</span> by 
      <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link> 
      <span>{{ item.comments_count }} comments</span>              
    </div>
    <ul class="comment">
      <li v-for="cmmt in item.comments">
        <i class="far fa-comments"></i>
        <div v-html="cmmt.content"></div>
      </li>
    </ul>
  </div>
</template>

<script>
// import axios from 'axios';
// import { mapState, mapGetters } from 'vuex';

import UserProfile from '../components/UserProfile.vue'

export default {
  // data() {
  //   return {
  //     item: {},
  //   }
  // },

  // computed속성에 item 등록됨
  computed: {
    item() {
      return this.$store.state.item
    }
  },
  created() {
    const itemId = this.$route.params.id;
    // axios.get(` https://api.hnpwa.com/v0/item/${itemId}.json`)
    // .then((res) => {
    //   this.item = res.data;
    //   console.log(this.item)
    // })
    this.$store.dispatch('FETCH_ITEM', itemId)
  },
  components: {
    UserProfile,
  }
}
</script>

<style>
.title{
  font-size: 16px;
  font-weight: bold;
}
.comment{padding-top:50px;}
.comment li{
  padding:10px 0;
  border-bottom:1px solid #eee;
}
</style>