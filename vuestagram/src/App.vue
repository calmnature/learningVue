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

    <h4>안녕 {{ $store.state.name }}</h4>
    <!-- 
      아래와 같이 state에 있는 변수의 값을 변경이 가능하나,
      Vuex 국룰) 컴포넌트 내에서 직접 수정 금지 (추적이 매우 어려워짐)
        state를 수정하려면?
        1. 미리 store.js에 수정 방법을 정의
        2. 그 방법을 컴포넌트에서 소환하여 수정
      -->
    <button @click="$store.state.name = 'park'">버튼</button>

    <Container :인스타데이터="인스타데이터" :step="step" :imageUrl="imageUrl" @write="userWrite = $event" :선택된필터="선택된필터"/>
    <button @click="more">더보기</button>

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
    };
  },
  components: {
    Container: Container,
  },
  // 다른 컴포넌트에서 mitt 같은 걸 수신하는 건 일반적으로 mounted에 작성
  // 단 많이쓰면 어디서 보냈는지 등 관리가 어려워지기 때문에 Vuex를 사용
  mounted() {
    // 숙제 : 필터를 눌렀을 때, 스텝1, 스텝2에도 모두 적용시켜 줄 것
    this.emitter.on('selectedFilter', (filter)=>{
      this.선택된필터 = filter;
    });
  },
  methods: {
    more() {
      if (this.moreIdx > 1) this.moreIdx -= 2;
      axios
        .get(`https://codingapple1.github.io/vue/more${this.moreIdx}.json`)
        .then((result) => {
          // 요청 성공 시 실행할 코드
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