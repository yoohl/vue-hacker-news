<template>
  <div>
    <!-- <div v-for="item in fetchedAsk">
      <div class="list">
        <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
        <small>
          {{ item.time_ago }} by 
          <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
        </small>
      </div>
    </div> -->
    <list-item></list-item>
  </div>  
</template>

<script>
// import { fetchAskList } from '../api/index.js'
import { mapState, mapGetters } from 'vuex';
import ListItem from '../components/ListItem.vue';

export default {
  // data() {
  //   return {
  //     ask: []
  //   }
  // },
  computed: {
    // ...mapGetters({
    //   askItems: 'fetchedAsk'
    // })
    // ...mapGetters([
    //   'fetchedAsk'
    // ])

    // #3-2 mapState를 이용해서 vuex의 state.ask 내용을 ask에 담아준 것
    // ...mapState({
    //   ask: state => state.ask
    // }),

    // #3-1
    // ask() {
    //   return this.$store.state.ask;
    // }

  },
  created() {
    // 2.vuex 사용하여 가져오기
    // Vuex는 단일 상태 트리 를 사용합니다. 
    // 즉, 이 단일 객체는 모든 애플리케이션 수준의 상태를 포함하며 "원본 소스" 역할을 합니다. 
    // 이는 각 애플리케이션마다 하나의 저장소만 갖게 된다는 것을 의미합니다.
    // this.$store.dispatch('FETCH_ASK')

    // 1. axios를 이용한 api 호출 방법, 해당 컴포넌트에서만 데이터가 사용가능함
    // fetchAskList()
    //   .then((response) => {
    //     this.ask = response.data
    //     console.log(this.ask)
    //   })
    //   .catch();
  },
  components: {
    ListItem,
  }
}
</script>

<style>
</style>
