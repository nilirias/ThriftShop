<!--- PATRONES POPULAR--->

<template>
  <div style="height: 300px; color:white; text-align: center; vertical-align: middle; font-size:80px;background-image: url('blue.jpg')" >
    <div style="vertical-align: middle; padding-top: 100px">POPULARES</div>
  </div>
  <br>
  <div>
    <h1 class="title"><span>Lo más vendido. </span></h1>
      <br>
      <VistaPeluches v-bind:arrPatron="arrPatron"/>
  </div>
</template>

<script>
import VistaPeluches from '../components/VistaPatrones';
import {getProducts} from '../js/api';

export default {
  name: 'Peluches',

  components: { 
    VistaPeluches 
  },

  data(){
      return{
      arrPatron : []
      }
    },

    async created(){
      let{data} = await getProducts()
      for(let i = 0; i < data.length; i++){
        data[i].images = data[i].images.split("@")
      }
      this.arrPatron = (data.filter(elt=>elt.pType === "Patron"))
      console.log(this.arrPatron)

    }

}
</script>
