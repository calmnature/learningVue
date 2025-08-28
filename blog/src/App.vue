<template>
  <div class="text-center">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container mt-4">
      <router-link to="/">홈페이지</router-link>
      <router-link to="/list">리스트페이지</router-link>
      <!-- /detail 클릭 시 글 상세페이지로 이동 -->
      <div class="mt-5">
        <router-view :블로그글="블로그글"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import boardData from './assets/board.js'

export default {
  name: 'App',
  data() {
    return {
      블로그글 : boardData,
    }
  },
  components: {
  },
}
</script>

<style>

</style>