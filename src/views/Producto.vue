<template>
  <div class="ola">
    <br>
  <div v-if="loading" class="has-text-centered">
    Cargando...
  </div>
  <div v-else class="columns main-container">
    <div class="column">
      <Carousel>
        <slide v-for="image in data.images" v-bind:key="image" class="image is-3by2">
            <img :src="image">
        </slide>
      </Carousel>
    </div>
    <div class="column is-4 content has-text-centered">
      <div class="box product-details">
        <h2 class="title is-4"><span>{{ data.name }}</span></h2>
      </div>
      <p>{{ data.description }}</p>
      <div class="field">
        <label for="quantity" class="label">Cantidad:</label>
        <div class="control">
          <input
            type="number"
            class="input"
            :class="{ 'is-danger': !valid }"
            id="quantity"
            name="quantity"
            v-model.number="quantity"
            min="1"
            required
          >
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button add-to-cart" :disabled="!valid" @click="$emit('add-to-cart', { ...data, quantity })">Agregar a carrito</button>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button buy-now" :disabled="!valid" @click="$emit('buy-now', { ...data, quantity })">Comprar ahora</button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  margin-bottom: 100px;
}

.product-details {
  margin-top: 80px;
}

#quantity {
  width: 100px;
}

.add-to-cart {
  color: green;
  width: 140px;
}

.buy-now {
  background-color: #00CC66;
  color: white;
  width: 140px;
}
</style>

<script>

import { Carousel, Slide } from 'vue-snap';
import 'vue-snap/dist/vue-snap.css'

import { getProduct } from '../js/api';
export default {
  name: 'Producto',
  components: {
    Carousel,
    Slide
    },
  data() {
    return {
      data: {
        pid: '1', images: ['https://cdn.shopify.com/s/files/1/0341/0444/3016/products/308-4A_clipped_rev_1_1024x1024@2x.jpg?v=1621629220','https://cdn.shopify.com/s/files/1/0341/0444/3016/products/308-4B_clipped_rev_1_1024x1024@2x.jpg?v=1621629220'], name: 'VESTIDO MAXI NEGRO CON ESTAMPADO FLORAL', prices: 500
      },
      quantity: 1,
      loading: true,
      valid: true
    }
  },
  mounted() {
    getProduct(this.$route.params.id)
      .then(data => {
        data.images = data.images.split("@");
        this.data = data;
      })
      .finally(() => { this.loading = false });
  },
  watch: {
    quantity: function(val) {
      this.valid = Number.isInteger(val);
    }
  }
}
</script>
