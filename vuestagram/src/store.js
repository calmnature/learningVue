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
    actions: {
        getData(context) {
            axios.get('https://codingapple1.github.io/vue/more0.json')
            .then((res) => {
                console.log(res.data);
                context.commit('setMore', res.data);
            })
        }
    },
})

export default store;