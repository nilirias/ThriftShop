<template>
<div v-show="sign">
   <div v-show="isSignIn">
      <div style="height: 300px; text-align: center; vertical-align: middle; font-size:80px;" >
         <div style="vertical-align: middle; padding-top: 100px">Iniciar Sesión</div>
      </div>
      <div  style="width: 50%; align-content: center" class = " container box" >
         <div class="columns is-fluid" >
            <div class="column">
               <input class="input"  placeholder="email" type="email" v-model="email" >
               <br>       <br>
               <input class="input" placeholder="password" type="password" v-model="password" >
               <br>
               <br>
               <button class="button is-primary" @click="login()"> Iniciar Sesión </button>

               <button class="button is-secondary" @click="changeR()">  Crear cuenta </button>
            </div>
         </div>
      </div>
      <br>
      <br></div>
      <div v-show="!isSignIn">
        {{!isSignIn}}
         <div style="height: 300px; text-align: center; vertical-align: middle; font-size:80px;" >
         <div style="vertical-align: middle; padding-top: 100px">Registrar</div>
         </div>
      <div  style="width: 50%; align-content: center" class = " container box" >
         <div class="columns is-fluid" >
            <div class="column">
               <input class="input"  placeholder="Username" type="text" v-model="username" >
               <br>       <br>
               <input class="input" placeholder="Nombre" type="text" v-model="firstName" >
               <br>       <br>
               <input class="input" placeholder="Apellido" type="text" v-model="lastName" >
               <br>       <br>
               <input class="input"  placeholder="email" type="email" v-model="email" >
               <br>       <br>
               <input class="input" placeholder="password" type="password" v-model="password" >
               <br>
               <br>
               <button class="button is-primary" @click="register()"> Crear Usuario </button>

               <button class="button is-secondary" @click="changeS()"> Iniciar Sesión </button>
            </div>
         </div>     
          </div>

      </div>
      <br>
</div>
<div v-if="!sign">
   <div style="height: 300px; color:white; text-align: center; vertical-align: middle; font-size:80px;background-image: url('pink2.jpg')" >
    <div style="vertical-align: middle; padding-top: 100px">MI CUENTA</div>
  </div>
 <br>
  <div style=" width: 100%" class = "column is-one-quarter box" >
      <h2 class="title is-4"><span> Cuenta </span></h2>
        <div class = "has-text-centered">
          <p>Hola,{{username}}</p>
          <p>{{email}}</p>
          <button class="button is-secondary" @click="close()"> Cerrar Sesión </button>
        </div>
   </div>
    <br>
    <Purchases></Purchases>
</div>
</template>
<script>
import {setToken,setUser, registerUser} from '../js/api';
import { useToast } from 'vue-toastification';
import Purchases from '../components/Purchases';
import 'vue-snap/dist/vue-snap.css'

   export default {
     name: 'Account',
     components: { Purchases},
     setup() {
       const toast = useToast();
       return { toast }
     },
  
     data() {
      return {
       email : null,
       password : null,
       lastName :null,
       firstName:null,
       username :null,
       isSignIn :true,
       isAdmin: false,
       sign : true,
       purchases : []
     }
     },

     created(){
      if(window.$cookies.get('user')){
        this.sign = false;
        this.username = window.$cookies.get('name')
        this.mail = window.$cookies.get('mail')
      }
     },
      methods: {
       login: function(){
          if (!this.email || !this.password){
             this.toast.error(`Email o password incorrectos`)
          }
          else{
             this.submit();
          }
       },
       register: function(){
          if (!this.email || !this.password || !this.username || !this.firstName || !this.lastName){
             this.toast.error(`Faltan campos por llenar`)
          }
          else{
            this.createUs();
          }
       },
       changeR: function(){
        this.changeRTo();
       },
       changeS: function(){
        this.changeSTo();
       },
       close: function(){
          this.closeSign();
          window.$cookies.set('isAdmin',"Client")
       },
        submit () {
            setToken(this.email,this.password).then(resp => {
           this.toast.success(`Inicio exitoso`);
          window.$cookies.set('token',resp.data.token)
          window.$cookies.set('mail',this.email)
          setUser(this.email).then(resp => {
            console.log(`setting ${resp.data.id}`)
            this.email=resp.data.mail;
            window.$cookies.set('isAdmin',resp.data.type)
            this.username = resp.data.name.replace("(","").replace(")","").replace('"',"").replace(","," ")
            window.$cookies.set('name',this.username)
            window.$cookies.set('user',resp.data.id)
            this.sign = false;
  })
.catch(err => console.error(err))
        }).catch(err => {
          console.log(err);
          this.toast.error(`Error al Iniciar Sesión`);
        })
       },
      createUs() {
           setToken(this.email,this.password).then(resp => {
              this.toast.error(`Ya existe el usuario`);
              console.log(resp);
        }).catch(err => {
          console.log(err);
          registerUser(this.username,this.firstName,this.lastName,this.password,this.email);
          this.toast.success(`Registro exitoso`);
        })
       },
       changeRTo(){
        this.isSignIn = false;
       },
       changeSTo(){
        this.isSignIn = true;
       },
       closeSign(){
        window.$cookies.set('token',null);
        this.toast.info(`Sesión cerrada exitosamente`);
        this.sign = true;
       }
   },
       
   }
</script>
<style scoped>
</style>