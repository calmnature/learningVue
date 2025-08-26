<template>
  <div class="black-bg" v-if="modalFlag">
    <div class="white-bg">
      <img :src="원룸들[clickedIdx].image">
      <h4>{{원룸들[clickedIdx].title}}</h4>
      <p>{{ 원룸들[clickedIdx].content }}</p>
      <!-- <input @input="month = $event.target.value;"> -->
      <input v-model="month">
      <p>{{ month }}개월 선택함 : {{ 원룸들[clickedIdx].price * month }} 원</p>
      <!-- 숙제 : 닫기 버튼 구현 -->
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
  props: {
    원룸들 : Array,
    clickedIdx : Number,
    modalFlag : Boolean,
  }
}
</script>

<style>

</style>
