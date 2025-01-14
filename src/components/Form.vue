<template>
    <form action="">
        <input type="text">
        <input type="text">
        <input type="text">

    </form>
    <div>
        <H2>Meu Fomulario</H2>
        <Form action="" @submit="enviarFormulario()">
            <div>
                <input type="text" v-model="name"
            </div>
            <div>
                <input type="text" v-model="email"
            </div>
            <div>
                <Submit />
            </div>
        </Form>
        <p>Conteudo</p>
        <p>Conteudo</p>
        <p>Conteudo</p>
    </div>
</template>

<script>    
    import InputText from './Form/InputText.vue';
    import Submit from './Form/Submit.vue';

    export default {
        name: 'Form',
        components: {
            InputText,
            Submit
        },
        data(){
            return{
                name: 'Samuel',
                email: 'Samuelljason@Gmail.com'
            }
        },
        methods:{
            enviarFormulario(e){
                e.preventDefault();  // Para prevenir o comportamento padrão do formulário
                
                const name = this.name;
                const email = this.email;

                console.log('Formulário enviado');
                console.log('NOME:' + name);
                console.log('EMAIL:' + email);

            }
        }
    }
</script>

<style>
    p{
        margin: 50px;
    }
</style>