<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <!-- 숙제 : 검색창 입력 시 해당 문자를 포함하는 name의 팔로워만 노출 -->
    <input placeholder="🔍" />
    <div class="post-header" v-for="(followerInfo, idx) in follower" :key="idx">
      <div class="profile" :style="{backgroundImage : `url(${followerInfo.image})`}"></div>
      <span class="profile-name">{{ followerInfo.name }}</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { computed, onMounted, reactive, ref, toRefs, watch } from 'vue';
import {useStore} from 'vuex';

export default {
  name: "MyPage",
  props: {
    one : Number
  },
  // 첫번째 파라미터는 위의 props가 담김
  // 두번째 파라미터는 항상 이상한 $ 표시 변수들이 담김 (emit, attrs, slot)
  setup(props, context) { 
    // 일반적으로 ref는 Primitive Data Type(원시 자료형)인 1, 2 같은 것들을 저장
    // reactive는 Reference Data Type인 Array, Object를 주로 저장
    // 하지만, ref와 reactive 모두 완전 동일한 역할을 해주기 때문에
    // 엄격하게 구분하려는 것이 아니라면 둘 중 하나만 사용해도 무관
    let follower = ref([]);
    // let test = reactive({name : 'kim'});

    // 다음과 같이 사용 시 reactive 하지 않을 수 있음
    // 부모에서 값이 변경 되었을 때 반영이 되지 않을 수 있다는 의미
    // props;

    // Composition API에서 관습적인 props 사용법
    // let {어쩌구} = toRefs(props);
    let {one} = toRefs(props);
    console.log(one.value);
    
    // watch(감시할거, ()=>{실행할 코드})
    watch(one, ()=>{
      // one이 변경될 때마다 코드 실행
    });

    // computed(()=> { return 연산결과});
    let 결과 = computed(()=>{
      return follower.value.length;
    });
    // axios보다 먼저 실행되어 결과가 0이 나오긴 함함함
    console.log(결과.value);

    let store = useStore();
    console.log(store.state.name);
    // Composition API에서는 mapState 사용 불가
    // 아마 Vuex 5버전 이상부터 가능할 거라고 함

    onMounted(() => {
        axios.get('follower.json').then((result) => {
            follower.value = result.data;
        });
    });

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