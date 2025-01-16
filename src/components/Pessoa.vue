<template>
    <div>
      <h2>Essa é a descrição da pessoa {{ nome }}</h2>
      <Info :email="email" :esta_Trabalhando="false"/>
    </div>
  </template>
  
  <script>
  import Info from './Info.vue';
  
  export default {
    name: 'Pessoa',
    components: {
      Info
    },
    data() {
      return {
        nome: 'Mateus',
        email: 'Samuell@example.com'
      };
    }
  };
  </script>
  