<template>
  <div class="columns main-container is-multiline">
    <div v-for="{ pid, images, name, prices } in arrProducto" v-bind:key="pid" class="column is-one-quarter box" style="padding: 30px">
        <Carousel>
          <slide v-for="image in images" v-bind:key="image" class ="image is-1by1">
            <router-link :to="`/producto/${pid}`">
              <img :src="image">
            </router-link>
          </slide>
        </Carousel>
      <div class="has-text-centered">
        <p>{{ name }}</p>
        <p>{{ prices }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-snap';
import 'vue-snap/dist/vue-snap.css'

export default {
    name: "VistaHome",
    props: ["arrProducto"],
    components: { Carousel, Slide }
}
</script>

<style scoped>
.main-container {
  margin-bottom: 100px;
}
</style>
