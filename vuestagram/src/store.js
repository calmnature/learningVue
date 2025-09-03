import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            name: 'kim',
            age: 20,
            // 숙제 : 1번째 사진을 클릭하면 좋아요가 + 1 증가
            // 응용1 : 한 번 더 누르면 좋아요 -1
            // 응용2 : 모든 사진에 좋아요 기능 추가
            likes: [30, 25, 17],
            likesClick: [false, false, false],
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
        }
    }
})

export default store;