<template>
  <div class="black-bg" v-if="modalFlag">
    <div class="white-bg">
      <img :src="원룸들[clickedIdx].image">
      <h4>{{원룸들[clickedIdx].title}}</h4>
      <p>{{ 원룸들[clickedIdx].content }}</p>
      <input v-model="month">
      <p>{{ month }}개월 선택함 : {{ 원룸들[clickedIdx].price * month }} 원</p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalCom',
  data() {
    return {
      month : 1,
    }
  },
  watch: {
    month(inputData) {
      if(inputData >= 13) {
        alert('13개월이상 입력 불가!!');
      }
      else if(isNaN(inputData) || /\s/.test(inputData)) {
        alert('어딜 문자를 적어?!');
        this.month = 1;
      }
    }
  },
  props: {
    원룸들 : Array,
    clickedIdx : Number,
    modalFlag : Boolean,
  }
}
</script>

<style>

</style>
