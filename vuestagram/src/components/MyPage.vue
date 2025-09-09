<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <!-- 숙제 : 검색창 입력 시 해당 문자를 포함하는 name의 팔로워만 노출 -->
    <input @input="searchName($event)" placeholder="🔍" />
    <div class="post-header" v-for="(followerInfo, idx) in follower" :key="idx">
      <div class="profile" :style="{backgroundImage : `url(${followerInfo.image})`}"></div>
      <span class="profile-name">{{ followerInfo.name }}</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { onMounted, ref } from 'vue';

export default {
  name: "MyPage",
  props: {
    one : Number
  },
  setup() { 
    let follower = ref([]);
    let followerOri = ref([]);

    onMounted(() => {
        axios.get('follower.json').then((result) => {
            follower.value = result.data;
            followerOri.value = [...result.data];
        });
    });

    function searchName(e) {
      follower.value = [...followerOri.value];
      follower.value = follower.value.filter(f => {
        return f.name.indexOf(e.target.value) !== -1;
      });
    }

    return {follower, searchName};
  },
  data() {
    return {
        
    }
  }
};
</script>

<style>
</style>