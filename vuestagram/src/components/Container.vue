<template>
  <div>
    <Post />
    <Post />
    <Post />
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  name: "ContainerCom",
  components: {
    Post,
  },
};
</script>

<style>
</style>