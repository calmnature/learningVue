<template>
  <Modal @closeModal="modalFlag = false;" :원룸들="원룸들" :clickedIdx="clickedIdx" :modalFlag="modalFlag"/>

  <div class="menu">
    <a v-for="(menu, idx) in menus" :key="idx">{{menu}}</a>
  </div>

  <Discount/>

  <Card @openModal="modalFlag = true; clickedIdx = $event;" :oneroom="원룸" v-for="(원룸, idx) in 원룸들" :key="idx"/>

</template>

<script>
import data from './assets/oneroom.js';
import Discount from './DiscountCom.vue';
import Modal from './ModalCom.vue';
import Card from './CardCom.vue';

export default {
  name : 'App',
  data() {
    return {
      clickedIdx : 0,
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
    // Discount: Discount,
    Discount, // import 한 것과 사용할 컴포넌트의 이름이 같으면 하나로 축약 가능
    Modal : Modal,
    Card,
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

  .discount{
    background-color: #eee;
    padding: 10ox;
    margin: 10px;
    border-radius: 5px;
  }
</style>
