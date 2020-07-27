<template>
  <div class="text-center">
    <h1> Bem vindo! </h1>
    <h2  v-if='role === "[ROLE_ADMIN]"'> Você esperava algo normal mas sou eu DIO </h2> 
    <img v-if='role === "[ROLE_ADMIN]"' src="https://i.ytimg.com/vi/HaGkk60kcjQ/maxresdefault.jpg">
    <p> Esta é uma aplicação exemplo que utiliza autenticação com JWT </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapState(['role'])
  }
}
</script>