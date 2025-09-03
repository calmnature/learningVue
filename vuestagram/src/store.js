import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            name: 'kim',
            // Q1. App.vue 어딘가에 age를 데이터 바인딩
            // Q2. 버튼 만들고 그거 누르면 age + 1
            age: 20,
        }
    },
    // 1. store.js에 state 수정 방법 정의
    mutations: {
        changeName(state) {
            state.name = 'park';
        },
        increamentAge(state, data){
            state.age += data;
        },
    }
})

export default store;