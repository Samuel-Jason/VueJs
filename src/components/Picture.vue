<template>
    <div>
        <img :src="avatar" :alt="descricao">
        <MudarImagem @mudar-imagem="TrocarImagem"/>
    </div>
</template>
<script>
import MudarImagem from './MudarImagem.vue';

export default {
    name: 'Picture',
    components: {
        MudarImagem
    },
    data() {
        return {
            avatar: '/img/avatar.png',
            descricao: 'Samuel Jason',
            foto: false
        }
    },
    methods: {
        TrocarImagem(newImage) {
            this.avatar = newImage;
        }
    }
}
</script>
