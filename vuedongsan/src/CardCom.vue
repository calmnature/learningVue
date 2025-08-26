<template>
  <div>
    <img :src="oneroom.image" class="room-img">
    <!-- <h4 @click="modalFlag = true; clickedIdx = idx;">{{oneroom.title}}</h4> -->
    <h4>{{oneroom.title}}</h4>
    <p>{{oneroom.price}}</p>
  </div>
</template>

<script>
export default {
  name: 'CardCom',
  props: {
    oneroom: Object,
  }
}
</script>

<style>

</style>
