<template>
  <div class="discount">
    <h4>지금 결제하면 {{percent}}% 할인</h4>
  </div>
</template>

<script>
export default {
  name: 'DiscountCom',
  data() {
    return {
      percent : 30,
    }
  },
  mounted() {
    var interval = setInterval(() => {
      if(this.percent <= 0) {
        clearInterval(interval);
        return;
      };
      this.percent--;
    }, 1000);
  },
}
</script>

<style>

</style>
