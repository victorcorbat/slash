<template>
  <div id="app">
    
    <nav class="navbar navbar-dark bg-dark mb-5">
      <a class="navbar-brand" href="#">
        <img src="./assets/logoslash.png" alt="">
      </a>
    </nav>

    <List />

    <nav class="navbar navbar-inverse navbar-fixed-bottom">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand">@ Slashmobility 2018</a>
        </div>
      </div>
    </nav>

  </div>
</template>

<script>
import List from './components/List.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  components: {
    List
  }
}
</script>

<style>

*{
  font-family:"Courier New", Courier, monospace;
}

.navbar{
  background-color:black;
  color:white;
  padding:15px;
}

.navbar-header{
  margin:auto;
}

a{
  font-size:0.9em !important;
}


</style>
