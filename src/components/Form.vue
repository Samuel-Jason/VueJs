<template>
    <form action="">
        <input type="text">
        <input type="text">
        <input type="text">

    </form>
    <div>
        <H2>Meu Fomulario</H2>
        <Form action="">
            <div>
                <InputText />
            </div>
            <div>
                <InputText />
            </div>
            <div>
                <Submit />
            </div>
        </Form>
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
        }
    }
</script>