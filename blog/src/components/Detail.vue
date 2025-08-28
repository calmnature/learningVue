<template>
    <div class="container">
    <!-- {{$route.params.id}} -->
    <h4>상세페이지</h4>
    <h3>{{ 블로그글[$route.params.id].title }}</h3>
    <p>{{ 블로그글[$route.params.id].content }}</p>
  </div>
</template>

<script>
export default {
    name: 'boardDetail',
    props: {
        블로그글: Array,
    },
}
</script>

<style>

</style>