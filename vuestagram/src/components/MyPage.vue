<template>
  <div style="padding: 10px">
    <!-- 숙제 follower에 있는 정보를 아래에 모두 찍어줄 것 -->
    <h4>팔로워</h4>
    <input placeholder="🔍" />
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">{{ follower }}</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { onMounted, ref } from 'vue';

export default {
  name: "MyPage",
  setup() {
    let follower = ref([]);
    // 1. ref([])의 형태로 선언
    // 2. return {} 형태로 리턴
    // 3. ref 변수.value에 저장
    // 4. Composition API에서 LifeCycle Hook을 사용하려면 onMounted(()=>{실행할 코드})로 사용
    //    → onMounted Import 필요

    onMounted(() => {
        axios.get('follower.json').then((result) => {
            // .value 라고 해야 조작이 가능
            follower.value = result.data;
        });
    });

    // return {}의 형태로 해야 위에서 사용 가능
    return {follower};
  },
  data() {
    return {
        
    }
  }
};
</script>

<style>
</style>