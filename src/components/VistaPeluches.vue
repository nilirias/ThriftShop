<template>
  <div class = "columns is-multiline">
    <div v-for="{ pid, name, prices, images } in arrPeluche" :key="pid" class="column is-one-quarter box">
      <Carousel>
        <slide v-for="img in images" :key="img" class="image is-1by1">
          <router-link :to="`/producto/${pid}`">
            <img :src="img">
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

export default {
    name: "VistaPeluches",
    props: ["arrPeluche"],
    components: { Carousel, Slide }
}
</script>
