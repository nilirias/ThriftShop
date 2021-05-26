<template>
<div>
  <div class="center" style="height: 300px; color:white; text-align: center; vertical-align: middle; font-size:80px;background-image: url('pink2.jpg')" >
    <div style="vertical-align: middle; padding-top: 100px"> THRIFT-SHOP</div>
  </div>

  <div>
    <h1 class="title"><span> Prendas </span></h1>
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
      arrProducto : [
        {pid: '1', images: ['https://cdn.shopify.com/s/files/1/0341/0444/3016/products/315-12_clipped_rev_1_360x.jpg?v=1621631027','https://cdn.shopify.com/s/files/1/0341/0444/3016/products/315-12B_clipped_rev_1_1024x1024@2x.jpg?v=1621631027'], name: 'BLUSA ROSA POP', prices: '300MXN'},
        {pid: '2', images: ['https://cdn.shopify.com/s/files/1/0341/0444/3016/products/314-30A_clipped_rev_1_1024x1024@2x.jpg?v=1621630486','https://cdn.shopify.com/s/files/1/0341/0444/3016/products/314-30B_clipped_rev_1_1024x1024@2x.jpg?v=1621630486'], name: 'BLUSA COLOR BABYBLUE', prices: '150MXN'},
        {pid: '3', images: ['https://cdn.shopify.com/s/files/1/0341/0444/3016/products/314-31A_clipped_rev_1_1024x1024@2x.jpg?v=1621630553','https://cdn.shopify.com/s/files/1/0341/0444/3016/products/314-31B_clipped_rev_1_1024x1024@2x.jpg?v=1621630552'], name: 'BLUSA DE TIRANTES ROSA', prices: '280MXN'},
        {pid: '4', images: ['https://cdn.shopify.com/s/files/1/0341/0444/3016/products/314-18A_clipped_rev_1_1024x1024@2x.jpg?v=1621630224','https://cdn.shopify.com/s/files/1/0341/0444/3016/products/314-18B_clipped_rev_1_1024x1024@2x.jpg?v=1621630224'], name: 'BLUSA AZUL REY', prices: '230MXN'},
        {pid: '5', images: ['https://cdn.shopify.com/s/files/1/0341/0444/3016/products/314-25A_clipped_rev_1_1024x1024@2x.jpg?v=1621630384','https://cdn.shopify.com/s/files/1/0341/0444/3016/products/314-25B_clipped_rev_1_1024x1024@2x.jpg?v=1621630384'], name: 'TOP DE TIRANTES NEGRO', prices: '110MXN'},
        {pid: '6', images: ['https://cdn.shopify.com/s/files/1/0341/0444/3016/products/314-11A_clipped_rev_1_1024x1024@2x.jpg?v=1621630137','https://cdn.shopify.com/s/files/1/0341/0444/3016/products/314-11B_clipped_rev_1_1024x1024@2x.jpg?v=1621630137'], name: 'SUETER KNIT GRIS', prices: '240MXN'},
        {pid: '7', images: ['https://cdn.shopify.com/s/files/1/0341/0444/3016/products/316-11A_clipped_rev_1_1024x1024@2x.jpg?v=1621631320','https://cdn.shopify.com/s/files/1/0341/0444/3016/products/316-11B_clipped_rev_1_1024x1024@2x.jpg?v=1621631320'], name: 'BLUSA SUELTA SIN MANGAS COLOR BLANCO', prices: '170MXN'},
        {pid: '8', images: ['https://cdn.shopify.com/s/files/1/0341/0444/3016/products/308-3A_clipped_rev_1_360x.jpg?v=1621629216','https://cdn.shopify.com/s/files/1/0341/0444/3016/products/308-3B_clipped_rev_1_1024x1024@2x.jpg?v=1621629217'], name: 'TOP DE MANGA CORTA MULTICOLOR', prices: '160MXN'},
        {pid: '9', images: ['https://cdn.shopify.com/s/files/1/0341/0444/3016/products/268-23A_clipped_rev_1_110x110@2x.jpg?v=1621629099','https://cdn.shopify.com/s/files/1/0341/0444/3016/products/268-23B_clipped_rev_1_1024x1024@2x.jpg?v=1621629099'], name: 'BLUSA DE TIRANTES ESTAMPADO FLORAL', prices: '145MXN'},
        ]
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
