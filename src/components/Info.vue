<template>
    <div>
        <p v-if="esta_Trabalhando">Estou trabalhando no momento</p>
        <p v-else>Eu não estou trabalhando</p>
        <p>Utilizo as seguintes tecnologias:</p>
        <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
        <p>Para acessar meu portfolio <a v-bind:href="meu_link" target="_blank">CLICA AQUI!</a></p>
        <div>
            <button @click="ShowEmail">Mostrar EMAIL</button>
        </div>
        <ul v-for="(items, index) in lista" v-bind:key="index">
            <li>{{ items }}</li>
        </ul>

        <p>Utilizo as seguintes tecnologias para o FRONT</p>
        <ul>
            <li v-for="tech in front_tecnologias" :key="tech.id">
                <p><strong>ID:</strong> {{ tech.id }}</p>
                <p><strong>Technology:</strong> {{ tech.language }}</p>
            </li>
        </ul>
        <Picture />
    </div>
</template>

<script>
    import Picture from './Picture.vue'

    export default {
        name: 'Info',
        components: {
            Picture
        },
        props: {
            email: String,
            esta_Trabalhando: Boolean
        },
        data() {
            return {
                mostrar_email: true,
                meu_link: 'http://google.com',
                lista: ["João", "Samuel", "Dalila", "Ana"],
                front_tecnologias: [
                    { id: "1", language: "html" },
                    { id: "2", language: "css" },
                    { id: "3", language: "js" }
                ]
            }
        },
        methods: {
            ShowEmail() {
                alert("MOSTRAR EMAIL");
            }
        }
    }
</script>
