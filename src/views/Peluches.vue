<!--- PELUCHES = LO ULTIMO--->
<template>
<div style="height: 300px; color:white; text-align: center; vertical-align: middle; font-size:80px;background-image: url('pink.jpg')" >
    <div style="vertical-align: middle; padding-top: 100px">LO ULTIMO</div>
  </div>
  <br>
  <div>
    <h1 class="title"><span>Todo lo nuevo</span></h1>
      <br>
      <VistaPeluches v-bind:arrPeluche="arrPeluche"/>
  </div>
</template>

<script>
import VistaPeluches from '../components/VistaPeluches';
import {getProducts} from '../js/api';

export default {
  name: 'Peluches',

  components: { 
    VistaPeluches 
  },

  data(){
      return{
      arrPeluche : []
      }
    },

    async created(){
      let{data} = await getProducts()
      for(let i = 0; i < data.length; i++){
        data[i].images = data[i].images.split("@")
      }
      this.arrPeluche = (data.filter(elt=>elt.pType === "Mu\u00f1eco"))
      console.log(this.arrPeluche)

    }

}
</script>
