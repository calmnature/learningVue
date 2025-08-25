<template>
  <div class="black-bg" v-if="modalFlag">
    <div class="white-bg">
      <img :src="원룸들[clickedIdx].image">
      <h4>{{원룸들[clickedIdx].title}}</h4>
      <p>{{ 원룸들[clickedIdx].content }}</p>
      <p>가격 : {{ 원룸들[clickedIdx].price }}</p>
      <Discount/>
      <button @click="modalFlag = false">닫기</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
