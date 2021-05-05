<template>
<div>
  <div style="height: 300px; color:white; text-align: center; vertical-align: middle; font-size:80px;background-image: url('pink2.jpg')" >
    <div style="vertical-align: middle; padding-top: 100px">JACOBO DESIGN</div>
  </div>

  <div>
    <h1 class="title"><span> Destacados </span></h1>
      <br>
            <VistaHome v-bind:arrProducto="arrProducto"/>
  </div>
  </div>
</template>

<script>
import VistaHome from '../components/VistaHome';
import {getProducts} from '../js/api';


export default {
  name: 'Home',
  components: { VistaHome },

  data(){
      return{
      arrProducto : []
      }
    },

    async created(){
      let{data} = await getProducts()
      for(let i = 0; i < data.length; i++){
        data[i].images = data[i].images.split("@")
      }
      this.arrProducto = data
      console.log(this.arrProducto)

    }
}
</script>
