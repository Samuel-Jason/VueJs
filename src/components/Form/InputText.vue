<template>
    <div>
      <input type="text" id="firstName" v-model="firstName" placeholder="Digite seu nome">
    </div>
    <div>
      <input type="text" id="secondName" v-model="secondName" placeholder="Digite seu segundo nome">
    </div>
  </template>
  
  <script>
  export default {
    name: 'InputText'
  };
  </script>
  