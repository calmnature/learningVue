<template>
  <!-- 숙제 : 모달창에 HTML 내용 채우기 (이미지, 상품 설명, 가격) -->
  <div class="black-bg" v-if="modalFlag">
    <div class="white-bg">
      <h4>{{원룸들[누른거].title}}</h4>
      <p>상세페이지 내용임</p>
      <button @click="modalFlag = false">닫기</button>
    </div>
  </div>
  <div class="menu">
    <a v-for="(menu, idx) in menus" :key="idx">{{menu}}</a>
  </div>

  <div v-for="(oneroom, idx) in 원룸들" :key="idx">
    <img :src="oneroom.image" class="room-img">
    <h4 @click="modalFlag = true; 누른거 = idx;">{{oneroom.title}}</h4>
    <p>{{oneroom.price}}</p>
  </div>
</template>

<script>
import data from './assets/oneroom.js';

export default {
  name : 'App',
  data() {
    return {
      누른거 : 0,
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