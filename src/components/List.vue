<template>
  <div class="list">

    <div class="container col-lg-8">
        <div class="row">
            <Product v-for="index in 8" :key="index" class="col-lg-3 mb-4" />
        </div>
    </div>

    <b-modal id="modal-1" title="Do you wanna buy it?">
        <input type="text" class="form-control mb-2" placeholder="Username">
        <input type="password" class="form-control" placeholder="Password">
        
        <template v-slot:modal-footer="{ ok, cancel }">
            <!-- Emulate built in modal footer ok and cancel button actions -->
            <b-button size="sm" variant="secondary" @click="cancel()">
                CANCEL
            </b-button>
            <b-button size="sm" variant="dark" @click="ok()">
                CONFIRM
            </b-button>
            
        </template>

    </b-modal>

  </div>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Product from './Product.vue'

import 'material-icons/iconfont/material-icons.css';

export default {
  name: 'List',
  data(){
    return {
        
    }
  },

  components: {
    Product
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

button{
    width:48%;
}

</style>
