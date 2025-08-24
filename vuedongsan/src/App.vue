<template>
  <div class="black-bg" v-if="modalFlag">
    <div class="white-bg">
      <h4>상세페이지임</h4>
      <p>상세페이지 내용임</p>
      <button @click="modalFlag = false">닫기</button>
    </div>
  </div>
  <div class="menu">
    <a v-for="(menu, idx) in menus" :key="idx">{{menu}}</a>
  </div>

  <div>
    <img src="./assets/room0.jpg" class="room-img">
    <h4 @click="modalFlag = true">{{원룸들[0].title}}</h4>
    <p>50 만원</p>
  </div>
  <!-- 숙제 : 원룸들의 데이터 6개 모두 출력 -->
</template>

<script>
// import {apple, app2} from './asset/oneroom.js';
// console.log(apple, app2);

import data from './assets/oneroom.js';

export default {
  name : 'App',
  data() {
    return {
      원룸들 : data,
      modalFlag : false,
      declare: [0, 0, 0],
      menus: ['Home', 'Shop', 'About'],
      products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
      
    }
  },
  methods: {
    increase(idx) {
      this.declare[idx]++;
    }
  },
  components : {
  }
}
</script>

<style>
  body {
    margin: 0px;
  }

  div {
    box-sizing: border-box;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .menu {
    background: darkslateblue;
    padding: 15px;
    border-radius: 5px;
  }

  .menu a {
    color: white;
    padding: 10px;
  }
  
  .room-img{
    width: 100%;
    margin-top: 400px;
  }
  
  .black-bg {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    padding: 20px;
  }

  .white-bg {
    width: 100%;
    background: white;
    border-radius: 8px;
    padding: 20px;
  }
</style> 