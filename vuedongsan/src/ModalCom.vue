<template>
  <div class="black-bg" v-if="modalFlag">
    <div class="white-bg">
      <img :src="원룸들[clickedIdx].image">
      <h4>{{원룸들[clickedIdx].title}}</h4>
      <p>{{ 원룸들[clickedIdx].content }}</p>
      <p>가격 : {{ 원룸들[clickedIdx].price }}</p>
      <!-- 부모로 받은 데이터는 자식에서 재할당(수정)하면 안 됨 -->
      <!-- <button @click="modalFlag = false">닫기</button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalCom',
  props: {
    // 데이터이름 : 자료형
    // 틀려도 에러는 안 뜬다고 함 - 디버깅용
    원룸들 : Array,
    clickedIdx : Number,
    modalFlag : Boolean,
  }
}
</script>

<style>

</style>
