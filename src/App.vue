<template>
  <PrimeiroComponente />
  <p>O nome do app é : {{ titulo }}</p>
  <LifeCycle />
  <Pessoa />
  <Form />
</template>

<script>
import PrimeiroComponente from './components/PrimeiroComponente'
import LifeCycle from './components/LifeCycle.vue';
import Pessoa from './components/Pessoa.vue';
import Form from './components/Form.vue';

export default {
  name: 'App',
  components: {
    PrimeiroComponente,
    LifeCycle,
    Pessoa,
    Form
  },
  data() {
    return {
      titulo: 'Primeiro Componente',
      subtitulo: 'Exemplo de componente Vue.js'
    }
  }
}
</script>
