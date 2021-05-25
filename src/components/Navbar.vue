<template>
  <div class="navbar is-spaced">
    <div class="navbar-brand">
      <!-- TODO: Add logo -->
      <router-link class="navbar-item" to="/">
        <img src="../assets/unnamed.png" >
      </router-link>
      <a role="button" class="navbar-burger" :class="{ 'is-active': showNav }" @click="showNav = !showNav" aria-label="menu" aria-expanded="true">
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
      </a>
      <a class="navbar-burger" style="margin-left: 0" @click="$emit('show-cart')">
        <i class="fas fa-shopping-cart navbar-burger-cart"></i>
      </a>
    </div>
    <div class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-end">
        <router-link class="navbar-item" to="/">Menu</router-link>
        <router-link class="navbar-item" to="/peluches">Ultimo</router-link>
        <router-link class="navbar-item" to="/patrones">Popular</router-link>
        <router-link class="navbar-item" to="/contacto">Contacto</router-link>
        <router-link class="navbar-item" to="/account">Mi Cuenta</router-link>
        <a class="navbar-item navbar-cart" @click="$emit('show-cart')">
          <i class="fas fa-shopping-cart"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  border-bottom: 1px solid #0003;
}

.navbar-burger-cart {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media screen and (max-width: 1023px) {
  .navbar-cart {
    display: none;
  }
}
</style>

<script>
export default {
  name: 'Navbar',
  data() { return { showNav: false }}
}
</script>
