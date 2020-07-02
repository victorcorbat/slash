<template>
  <div id="theOuterDiv" class="container">

        <img src="../assets/nutella.png">
        <div id="precio">
            10€
        </div>
        <div id="theInnerDiv">
            Nutela
        </div>
        <button v-b-modal.modal-1 type="button" class="btn btn-dark">BUY</button>
    </div>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'Product',
  components: {
    //Product
  },
  methods: {
    buyProduct(){
        
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    #theOuterDiv {
        position: relative;
        top     : 0px;
        left    : 0px;
        
    }

    *{
        font-size:0.9em;
    }

    #theInnerDiv {
        position: absolute;
        bottom    : 24%;
        right   : 15%;
        padding : 5px;
        background-color: black;
        color:white;
        width:70%;
        text-align:center;
    }

    #precio{
        height: 70px;
        line-height: 70px;
        text-align: center;
        background-color:#D2D2D2;
        font-weight:bold;
    }

    /* for all screens, use 14px font size */
    /* responsive, form small screens, use 13px font size */
    @media (max-width: 479px) {
        #theInnerDiv {
            bottom    : 21%;
        }

        *{
            font-size:1em;
        }

        #precio{
            height: 90px;
            line-height:90px;
        }
    }

    img{
        width:100%;
    }

    button{
        width:100%;
    }

</style>
