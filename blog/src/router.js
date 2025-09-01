import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue';
import List from './components/List.vue';
import Detail from './components/Detail.vue';
import Author from './components/Author.vue';
import Comment from './components/Comment.vue';

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/list",
        component: List,
    },
    {
        path: "/detail/:id",
        component: Detail,
        // 특정 페이지 내에서 하위 경로를 만들고 싶을 때 children 사용
        children: [
            {
                // path를 /author로 하면 루트/author(localhost:5173/author)가
                // 되기 때문에 슬래쉬를 빼고 author만 작성해줘야 함
                // path: "/author",
                path: "author",
                component: Author,
            },
            {
                path: "comment",
                component: Comment,
            },
        ]
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 