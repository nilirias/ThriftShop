<template>
  <div class="box p-6 has-text-centered">
    <i class="checkmark fas fa-check fa-7x has-text-success"/>
    <h4 class="title is-4">¡Tu pedido ha sido procesada!</h4>
    <p class="subtitle">Muchas gracias, {{ details.payer.name.given_name }}</p>
    <p>Costo total: ${{ details.purchase_units[0].payments.captures[0].amount.value }}</p>
    <router-link class="button is-primary" to="/">Regresar al página principal</router-link>
  </div>
</template>

<style lang="scss" scoped>
.checkmark {
  padding: 2rem;
  border: 0 solid;
  margin: 2rem 0;
  border-radius: 50%;
  animation: ring-pop .5s cubic-bezier(0.34, 1.56, 0.64, 1) .75s 1;
  animation-fill-mode: forwards;
}

@keyframes ring-pop {
  from { border-width: 0rem; }
  to { border-width: 2rem; }
}
</style>

<script>
export default {
  name: 'PaymentSuccess',
  props: { details: Object }
}
</script>
