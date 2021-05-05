<template>

 <br>
   <div>
     <h1 class="title"><span> Historial de pedidos </span></h1>
       <br>
             <VistaHistorial v-bind:purchases="purchases"/>
   </div>
 </template>

 <script>
 import VistaHistorial from '../components/VistaHistorial';
 import {getPurchases} from '../js/api';


 export default {
   name: 'Purchases',
   components: { VistaHistorial },

   data(){
       return{
       purchases : []
       }
     },

     async created(){
       let{data} = await getPurchases()
       console.log(data)
       this.purchases = data
     }
 }
 </script>