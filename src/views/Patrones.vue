<!--- PATRONES POPULAR--->

<template>
  <div style="height: 300px; color:white; text-align: center; vertical-align: middle; font-size:80px;background-image: url('blue.jpg')" >
    <div style="vertical-align: middle; padding-top: 100px">POPULARES</div>
  </div>
  <br>
  <div>
    <h1 class="title"><span>Las más populares </span></h1>
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
      arrPatron : [
        {pid: '1', images: ['https://cdn.shopify.com/s/files/1/0341/0444/3016/products/308-4A_clipped_rev_1_1024x1024@2x.jpg?v=1621629220','https://cdn.shopify.com/s/files/1/0341/0444/3016/products/308-4B_clipped_rev_1_1024x1024@2x.jpg?v=1621629220'], name: 'VESTIDO MAXI NEGRO CON ESTAMPADO FLORAL', prices: '500MXN'},
        {pid: '2', images: ['https://cdn.shopify.com/s/files/1/0341/0444/3016/products/171-78A_clipped_rev_1_1024x1024@2x.jpg?v=1621032416','https://cdn.shopify.com/s/files/1/0341/0444/3016/products/171-78B_clipped_rev_1_1024x1024@2x.jpg?v=1621032416'], name: 'VESTIDO A LA RODILLA DE ENCAJE MAGENTA', prices: '710MXN'},
        {pid: '3', images: ['https://cdn.shopify.com/s/files/1/0341/0444/3016/products/307-25A_clipped_rev_1_360x.jpg?v=1621033397','https://cdn.shopify.com/s/files/1/0341/0444/3016/products/307-25B_clipped_rev_1_1024x1024@2x.jpg?v=1621033397'], name: 'VESTIDO SKATER ROSA', prices: '275MXN'},
        {pid: '4', images: ['https://cdn.shopify.com/s/files/1/0341/0444/3016/products/14-32A_clipped_rev_1_1024x1024@2x.jpg?v=1620420213','https://cdn.shopify.com/s/files/1/0341/0444/3016/products/14-32B_clipped_rev_1_1024x1024@2x.jpg?v=1620420213'], name: 'VESTIDO MIDI COLOR BLANCO', prices: '240MXN'},]
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
