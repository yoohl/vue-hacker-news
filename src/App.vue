<template>
  <div id="app">
    <Header />
    <div class="wrap">
      <div id="nav" class="menu">
        <ul>
          <li>
            <router-link to="/news">
            <i class="fas fa-newspaper"></i>
            News 
            </router-link>
          </li>
          <li>
            <router-link to="/ask">
            <i class="fas fa-volume-up"></i>
            Ask 
            </router-link>
          </li>
          <li>
            <router-link to="/jobs">
            <i class="fas fa-child"></i>
            Jobs 
            </router-link>
          </li>
        </ul>        
      </div>
      <article class="contents">
        <transition name="fade">
          <router-view/>
        </transition>
      </article>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>


<style>
/* reset */
html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,a,address,em,img,strong,
dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,video{
  margin:0;padding:0;font-size:100%;border:0;vertical-align:baseline
}
html{overflow-y:scroll}
body {
  color:#000;font-size:12px;line-height:1.5;
  font-family:"맑은 고딕",malgun gothic, dotum,Helvetica,'Apple SD Gothic Neo',sans-serif;
  background:#fafafa;-webkit-text-size-adjust:none;-webkit-font-smoothing:antialiased
}
address,em{font-style:normal}
input{color:#000;font-size:12px;padding:0;margin:0}
legend,.blind{position:absolute;font-size:0;visibility:hidden}
ol,ul{list-style:none}
a{text-decoration:none}
a:hover{text-decoration:underline;cursor:pointer}
img{vertical-align:top}
/* reset */

.wrap{
  display: flex;
  min-height: calc(100vh - 5vh);
  width:960px;
  margin:0 auto;
  padding-top:45px;
}
.contents{
  flex: 1;
  background-color: #fff;
  border-left: 1px solid #f1f1f1;
  border-right: 1px solid #f1f1f1;
  padding: 30px 25px 12px 30px;
}

.menu {
  flex: 0 0 265px;
  width: 265px;
  padding-left: 30px;
  padding-top: 50px;
}

.menu li {
  line-height:22px;
  font-size: 14px;
  color: #333;
  list-style: none;
  cursor: pointer;
  -webkit-transition: color .1s ease-in,background-color .1s ease-in;
  transition: color .1s ease-in,background-color .1s ease-in;
  line-height: 1.25;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.menu a {
  display: block;
  width:100%;
  font-size: 14px;
  color: #333;
  text-decoration: none;
  list-style: none;
  border-radius: 3px;
  padding: 9px 16px 9px 5px;
}
.menu a.router-link-exact-active {
  background: #fff;
  font-weight: bold;
}
.menu li .item_icon {
  width: 28px;
  vertical-align: -6px;
  margin-right: 5px;
  font-size: 14px;
}
.item_counter {
    display: inline-block;
    color: #777;
    font-size: 11px;
    margin-left: 5px;
}
.light_icon {
  color: #fff;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
