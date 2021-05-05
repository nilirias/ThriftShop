<template>
  <div>
    <h1 class="title"><span>Contáctanos</span></h1>
  <div class="container is-fluid">
    <form class="form" @submit="enviarDatos">
      <div class="columns">
        <div class="column">
          <div class="field">
            <label for="nombre" class="label">Nombre</label>
            <div class="control">
              <input class="input" type="text" placeholder="Nombre">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label for="apellidos" class="label">Apellidos</label>
            <div class="control">
              <input class="input" type="text" placeholder="Apellidos">
            </div>
          </div>
        </div>
      </div>
      <div class="field">
        <label for="correo" class="label">Correo electrónico</label>
        <div class="control">
          <input class="input" type="text" placeholder="Correo electrónico">
        </div>
      </div>
      <div class="field">
        <label for="mensaje" class="label">Mensaje</label>
        <div class="control">
          <textarea class="textarea is-fixed" rows="7" placeholder="Mensaje"/>
        </div>
      </div>
      <div class="field">
        <div class="control has-text-centered">
          <button class="button is-primary" type="submit" >Enviar</button>
        </div>
      </div>
    </form>
  </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  width: 100%;
  max-width: 900px;
  padding: 2em;
  border: 1px solid #0004;
  border-radius: 1.5em;
  margin: 0 auto;
}
</style>

<script>

import { useToast } from 'vue-toastification';

export default {
  name: 'Contacto',
  setup() {
    const toast = useToast();
    return { toast }
  },
  methods:{
    enviarDatos(e){
      e.preventDefault();
      this.toast.success(` Datos enviados correctamente`);
      e.target.reset();  
    }
  }
    
}

</script>
