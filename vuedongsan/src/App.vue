<template>
  <div class="black-bg" v-if="modalFlag">
    <div class="white-bg">
      <h4>상세페이지임</h4>
      <p>상세페이지 내용임</p>
    </div>
  </div>
  <div class="menu">
    <a v-for="(menu, idx) in menus" :key="idx">{{menu}}</a>
  </div>

  <div>
    <img src="./assets/room0.jpg" class="room-img">
    <h4 @click="modalFlag = true">{{products[0]}}</h4>
    <p>50 만원</p>
    <button @click="increase(0)">허위매물신고</button>
    <span>신고수 : {{ declare[0] }}</span>
  </div>
  <div>
    <img src="./assets/room1.jpg" class="room-img">
    <h4>{{products[1]}}</h4>
    <p>70 만원</p>
    <button @click="increase(1)">허위매물신고</button>
    <span>신고수 : {{ declare[1] }}</span>
  </div>
  <div>
    <img src="./assets/room2.jpg" class="room-img">
    <h4>{{products[2]}}</h4>
    <p>90 만원</p>
    <button @click="increase(2)">허위매물신고</button>
    <span>신고수 : {{ declare[2] }}</span>
  </div>
</template>

<script>
export default {
  name : 'App',
  data() {
    return {
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