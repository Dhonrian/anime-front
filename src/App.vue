<template>
  <div id="app" class="container">
    <div id="nav" class="row text-center">
      <router-link to="/"> Home </router-link>
      <router-link to="/login"> Login </router-link>
      <router-link to="/animes"> Animes </router-link>
    </div>
    <router-view/>
  </div>
</template>
