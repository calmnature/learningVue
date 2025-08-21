<template>
  <img src="./assets/logo.svg" alt="Vue logo" width="300px" height="300px">
  <div>
    <h4>{{products[0]}}</h4>
    <p>50 만원</p>
  </div>
  <div>
    <h4>{{products[1]}}</h4>
    <p>70 만원</p>
  </div>
  <div>
    <h4>{{products[2]}}</h4>
    <p>90 만원</p>
  </div>
</template>

<script>
export default {
  name : 'App',
  data() {
    return {
      products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
    }
  },
  components : {
  }
}
</script>

<style>
</style> 