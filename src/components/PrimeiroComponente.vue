<template>
    <h1>Ola Vue!</h1>
    <h1>Meu nome é {{ nome }}</h1>
</template>


<script>
    export default {
        name: 'PrimeiroComponente',
        data() {
            return {
                nome: "Samuel"
            }
        }
    }
</script>