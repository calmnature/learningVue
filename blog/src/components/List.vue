<template>
    <div>
        <div v-for="(board, idx) in 블로그글" :key="idx">
            <h5>
                <router-link :to="'/detail/' + idx">{{ board.title }}</router-link>
                <router-view :board="board"></router-view>
            </h5>
            <p>{{ board.date }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'boardList',
    props: {
        블로그글: Array,
    },
}
</script>

<style>

</style>