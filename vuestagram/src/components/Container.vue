<template>
  <div>
    <Post v-for="(data, idx) in 인스타데이터" :게시글="data" :key="idx"/>
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  name: "ContainerCom",
  props: {
    인스타데이터 : Array,
  },
  components: {
    Post,
  },
};
</script>

<style>
</style>