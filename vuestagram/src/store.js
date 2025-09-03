import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state() {
        return {
            name: 'kim',
            age: 20,
            likes: [30, 25, 17],
            likesClick: [false, false, false],
            more: {},
        }
    },
    mutations: {
        changeName(state) {
            state.name = 'park';
        },
        increamentAge(state, data){
            state.age += data;
        },
        clickedPicture(state, 게시글번호) {
            if(state.likesClick[게시글번호]) state.likes[게시글번호]--;
            else state.likes[게시글번호]++;
            state.likesClick[게시글번호] = !state.likesClick[게시글번호]
        },
        setMore(state, data) {
            state.more = data;
        },
    },
    // actions : ajax 요청에 관련된 곳
    actions: {
        // actions의 파라미터는 이곳의 전쳬(store)를 의미함.
        // 관습적으로 context를 사용한다고 힘
        getData(context) {
            axios.get('https://codingapple1.github.io/vue/more0.json')
            .then((res) => {
                // axios로 받은 데이터를 state.more에 저장해야 함
                console.log(res.data);
                // actions 후에 state 변경?
                // 반드시 mutations가 해야만 함
                context.commit('setMore', res.data);
            })
        }
    },
})

export default store;