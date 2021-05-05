<template>
  <div class="modal" :class="{ 'is-active': active }">
    <div class="modal-background"/>
    <div class="modal-card">
      <div class="modal-card-body">
        <div class="content">
          <h1 class="title"><span>Carrito</span></h1>
          <table class="table is-striped is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th/>
                <th class="thumbnail"/>
                <th>Nombre</th>
                <th>Precio por unidad</th>
                <th>Cantidad</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="({ pid, name, total, image, amount }, i) in cart" :key="pid">
                <td>
                  <button class="button is-white icon x" @click="$emit('remove-from-cart', i)">
                    <i class="fas fa-times-circle"/>
                  </button>
                </td>
                <td class="thumbnail">
                  <img :src="image" class="image is-64x64">
                </td>
                <td>{{ name }}</td>
                <td class="price">{{ total }}</td>
                <td>
                  <button class="button is-small is-ghost icon" :disabled="amount <= 1" @click="$emit('decrement-product', i)">
                    <i class="fas fa-minus"/>
                  </button>
                  <span>{{ amount }}</span>
                  <button class="button is-small is-ghost icon" @click="$emit('increment-product', i)">
                    <i class="fas fa-plus"/>
                  </button>
                </td>
                <td class="price">{{ (Math.round((total * amount * 100) / 100).toFixed(2)) }}</td>
              </tr>
            </tbody>
          </table>
          <p class="subtitle has-text-centered">Subtotal: <span class="price">{{ subtotal.toFixed(2) }}</span></p>
        </div>
      </div>
      <div class="modal-card-foot">
        <div v-show="!cart.length">
          <h5 class="subtitle has-text-grey" style="font-style: italic">No hay nada en tu carrito!</h5>
        </div>
        <div v-show="cart.length" class="card-footer-wrapper">
          <ProcessingSpinner v-if="processing"/>
          
      <button v-if="!isAuth" class="button is-primary" @click="goToSign()"> Iniciar Sesión </button>
      <div v-show="isAuth">
      <div id="pay-with-paypal"/></div>
    </div>
      </div>
    </div>
    <button class="modal-close is-large" @click="$emit('hide-cart')"/>
  </div>
</template>

<style lang="scss" scoped>
td {
  vertical-align: middle !important;
}

button {
  vertical-align: baseline;
}

.modal-card {
  overflow: scroll;
}

.modal-card-body {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.price::before {
  content: '$';
}

.modal-card-foot {
  justify-content: center;
}

.card-footer-wrapper {
  width: 50%;
}

@media screen and (max-width: 769px) {
  .thumbnail {
    display: none;
  }
}
</style>

<script>
import ProcessingSpinner from './ProcessingSpinner';

export default {
  name: 'CartModal',
  components: { ProcessingSpinner },
  props: {
    active: Boolean,
    cart: [Object],
    processing: Boolean
  },
  data() {
    return { subtotal: 0 , isAuth: false}
  },
  beforeUpdate() {
    this.subtotal = this.cart.reduce((accum, { total, amount }) => accum + total * amount, 0);
    this.isAuth = window.$cookies.get('token') != null;
    },
  methods : {
    goToSign : function(){
      this.$router.push({ path: '/account' })
    }

  }
  
}
</script>
