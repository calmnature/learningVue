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
  // input에 문자 입력을 하면 경고문을 띄우고 싶음
  // => watcher : data 감시 함수
  watch: {
    // data의 이름과 동일하게 함수를 생성하면
    // month라는 데이터가 변할 때마다 month() 내의 코드가 실행
    // 데이터명(a, b) : a = 변경 후 데이터 / b = 변경 전 데이터
    month(inputData, prevData) {
      if(inputData >= 13) {
        alert('13개월이상 입력 불가!!');
      }
      // 숙제 : 문자를 입력하면 경고창과 month를 1로 바꿈
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
