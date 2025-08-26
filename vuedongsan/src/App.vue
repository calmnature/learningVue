<template>
  <transition name="fade">
    <!-- 숙제2 : 2개월이하면, 3개월부터 가능하다는 알림 -->
    <Modal @closeModal="modalFlag = false;" :원룸들="원룸들" :clickedIdx="clickedIdx" :modalFlag="modalFlag"/>
  </transition>

  <div class="menu">
    <a v-for="(menu, idx) in menus" :key="idx">{{menu}}</a>
  </div>

  <!-- 숙제1 : 1초마다 30%에서 1%씩 감소 -->
  <Discount v-if="showDiscount"/>

  <button @click="priceSortAsc">가격낮은순정렬</button>
  <button @click="sortBack">되돌리기</button>

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
      showDiscount : true,
      원룸들오리지널 : [...data],
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
    },
    priceSortAsc() {
      this.원룸들.sort(function(a, b){
        return a.price - b.price;
      });
    },
    sortBack() {
      this.원룸들 = [...this.원룸들오리지널];
    },
  },
  components: {
    Discount,
    Modal : Modal,
    Card,
  },
  // mounted() {
  //   setTimeout(() =>{
  //     this.showDiscount = false;
  //   },2000);
  // },
}
</script>

<style>
  /* .start {
    opacity: 0;
    transition: all 1s;
  }
  .end {
    opacity: 1;
  } */
  /* 모달창 클릭 시 애니메이션 */
  .fade-enter-from {
    /* opacity: 0; */
    transform: translateY(-1000px);
  }
  .fade-enter-active {
    transition: all 1s;
  }
  .fade-enter-to {
    transform: translateY(0px);
  }
  /* 모달창 닫기 시 애니메이션 */
  .fade-leave-from {
    opacity: 1;
  }
  .fade-leave-active {
    transition: all 1s;
  }
  .fade-leave-to {
    opacity: 0;
  }

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
    margin-top: 100px;
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
