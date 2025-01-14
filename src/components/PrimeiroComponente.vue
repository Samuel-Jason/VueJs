<template>
    <h1>Ola Vue!</h1>
    <h1>Meu nome é {{ nome }}</h1>
    <Reutilizacao />
</template>


<script>
    import Reutilizacao from './Reutilizacao.vue';

    export default {
        name: 'PrimeiroComponente',
        components: {
            Reutilizacao
        },
        data() {
            return {
                nome: "Samuel"
            }
        }
    }
</script>