<template>
    <img v-show="foto" :src="avatar" :alt="descricao">
</template>

<script>
export default {
    name: 'Picture',
    data() {
        return {
            avatar: '/img/avatar.png',
            descricao: 'Samuel Jason',
            foto: false
        }
    }
}
</script>
