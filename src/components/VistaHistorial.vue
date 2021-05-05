<template>
<!--Borrar este div, solo puse los botones para probar si el cambio jala  -->
    <div v-if="isAdmin">
      <button class="button is-secondary" @click="changeU()"> Cambio</button>
    </div>
    <div class = "is-multiline " >
      <div v-for="purchase in purchases" style=" width: 100%" v-bind:key="purchase.oid" class = "column is-one-quarter box" >

      <h2 class="title is-4"><span> Pedido: {{ purchase.oid }}</span></h2>
        <p>{{purchase.date}}</p>
          <p>{{purchase.status}}</p>
          <p>{{purchase.total}}</p>

        <div v-show="!userComp" class = "has-text-centered">
          <button class="button is-secondary" @click="guardarStatus(purchase.oid,0)"> En Proceso </button>
          <button class="button is-warning" @click="guardarStatus(purchase.oid,1)"> En Tránsito </button>
          <button class="button is-primary" @click="guardarStatus(purchase.oid,2)"> Entregado </button>
        </div>
      </div>
    </div>
</template>

<script>
import 'vue-snap/dist/vue-snap.css'
import { useToast } from 'vue-toastification';
import {updateStatus} from '../js/api';

export default {
    name: "Purchases",
    props:["purchases"],
    components: {},
  setup() {
       const toasts = useToast();
       return { toasts }
  },
  data() {
      return {
        isAdmin: false,
       userComp : true,
       selected: 'En Proceso', //aqui iria el estatus que esta ahorita pero no se como ponerlo
      options: [ //no se como poner los estatus los puse hardcodeados no se si sirvan.. pequeño detalle... se cambia
        { text: 'En Proceso', value: 'En Proceso' },
        { text: 'En Transito', value: 'En Transito' },
        { text: 'Entregado', value: 'Entregado' }
      ]
    }
  },
  created(){
    if(window.$cookies.get('isAdmin') != "Client"){
      this.isAdmin = true;
    }
  },
  methods: {
      changeU: function(){
          this.change();
      },
      guardarStatus: function(oid,status){
          this.sendStatus(oid,status);
      },
    change(){
      this.userComp = !this.userComp
    },
    sendStatus(oid,status){ // guardar y mandar el estatus nuevo :)
      updateStatus(oid,status).then(resp => {
        console.log(resp)
        this.toasts.success(`Cambiado de estatus`)})
      }
  }
}

</script>

<style scoped>
</style>