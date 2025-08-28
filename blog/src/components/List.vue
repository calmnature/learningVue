<template>
    <div>
        <div v-for="(board, idx) in 블로그글" :key="idx">
            <h5>{{ board.title }}</h5>
            <p>{{ board.content }}</p>
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