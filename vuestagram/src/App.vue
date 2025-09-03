<template>
  <div>
    <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li @click="step++" v-if="step == 1">Next</li>
        <li @click="publish" v-if="step == 2" >발행</li>
      </ul>
      <img src="../public/favicon.ico" class="logo"/>
    </div>

    <p>{{ name }} {{ age }} {{ likes[0] }}</p>
    <p>{{ 내이름 }}</p>

    <h4>너의 나이는 {{ $store.state.age }}</h4>
    <button @click="$store.commit('increamentAge', 10)">나이가 증가하는 버튼(기본)</button>
    <button @click="increamentAge(10)">나이가 증가하는 버튼(vuex)</button>

    <Container :인스타데이터="인스타데이터" :step="step" :imageUrl="imageUrl" @write="userWrite = $event" :선택된필터="선택된필터"/>
    <button @click="more">더보기</button>

    <!-- 
      methods의 now 함수는 버튼이 클릭될 때마다 재 렌더링이 되면서 시간이 초기화 됨
      computed의 now2 함수는 버튼이 클릭되도 재 렌더링이 되지 않고 사이트 첫 로딩 시의 값을 가지고 있음
        - 데이터 결과 저장 공간으로 생각하면 된다 함
        - computed의 함수는 소괄호 ()를 붙이지 않고 함수명만 작성
    -->
    <!-- <p>{{ now() }} {{ 카운터 }}</p>
    <p>{{ now2 }} {{ 카운터 }}</p>
    <button @click="카운터++">버튼</button> -->

    <div class="footer">
      <ul class="footer-button-plus">
        <input @change="upload" type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>

    <div style="margin-top: 400px"></div>
  </div>
</template>

<script>
import Container from "./components/Container.vue";
import instaData from "./assets/data.js";
import axios from "axios";
import {mapMutations, mapState} from "vuex";

export default {
  name: "App",
  data() {
    return {
      인스타데이터: instaData,
      moreIdx: 0,
      step: 0,
      imageUrl: "",
      userWrite: "",
      선택된필터: "",
      // 카운터: 0,
    };
  },
  components: {
    Container: Container,
  },
  mounted() {
    this.emitter.on('selectedFilter', (filter)=>{
      this.선택된필터 = filter;
    });
  },
  computed: { // 계산 결과 저장용 함수들에 주로 사용
    // now2() {
    //   // computed의 함수는 사용해도 실행되지 않음
    //   // 처음 실행하고 값을 간직
    //   return new Date();
    // },

    // mapState를 사용하면 state를 꺼내는 코드가 짧아짐
    name() {
      return this.$store.state.name;
    },
    /**
     * 문법 (vuex의 mapState import 필수)
     * ...mapState(['state변수명', 'state변수명', ...])
     * ...mapState({작명 : 'state변수명', ...})
     */
    ...mapState(['name', 'age', 'likes',]),
    ...mapState({내이름 : 'name',}),
  },
  methods: {
    // now() {
    //   // methods의 함수는 사용할 때마다 실행
    //   return new Date();
    // },

    /**
     * vuex mutations 함수 
     * ...mapMutations([''])
    */
    ...mapMutations(['setMore', 'increamentAge']),

    more() {
      if (this.moreIdx > 1) this.moreIdx -= 2;
      axios
        .get(`https://codingapple1.github.io/vue/more${this.moreIdx}.json`)
        .then((result) => {
          this.인스타데이터.push(result.data);
          this.moreIdx++;
        });
    },

    upload(e) {
      let file = e.target.files;

      let url = URL.createObjectURL(file[0]);

      this.step = 1;
      this.imageUrl = url;
    },

    publish() {
      let 내게시물 = {
        name: "Kim Hyun",
        userImage: "https://picsum.photos/100?random=3",
        postImage: this.imageUrl,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.userWrite,
        filter: this.선택된필터,
      };
      this.인스타데이터.unshift(내게시물);
      this.step = 0;
    },
  },
};
</script>

<style>
.show {
  display: block;
}

.hide {
  display: none;
}

body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>