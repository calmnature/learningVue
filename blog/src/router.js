import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue';
import List from './components/List.vue';
import Detail from './components/Detail.vue';

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
        // 파라미터 문법
        // :id로 설정하면 $route.params.id로 URL의 파라미터를 꺼낼 수 있음
        // 정규표현식 작성 가능 : /detail/:id(\\d+)
        // /detail/:id*
        // /:anything(.*) : 모든 페이지 → 이걸 활용하여 404페이지 생성 가능
        path: "/detail/:id(\\d+)",
        component: Detail,
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 