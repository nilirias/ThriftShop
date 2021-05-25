<template>
<div>
  <div>
    <Navbar @show-cart="showCart = true"/>
    <main class="container mt-5">
      <router-view
        :details="purchaseDetails"
        @add-to-cart="addToCart"
        @buy-now="buyNow"
      />
    </main>
    <CartModal
      :active="showCart"
      :cart="cart"
      :processing="processingPayment"
      @hide-cart="showCart = false"
      @decrement-product="decProduct"
      @increment-product="incProduct"
      @remove-from-cart="removeFromCart"
    />
  </div>
  <br>
  <div style="height: 300px; text-align:center; padding-top: 100px; background-color:#E0E0E0"> Copyright Equipo BLT (c) 2021</div>
  </div>
</template>

<style lang="scss">
@import './app.scss';
@import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
@import "../node_modules/vue-toastification/dist/index.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.title {
  text-align: center;

  span {
    position: relative;
    padding-bottom: 6px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 20%;
      right: 20%;
      border-bottom: 1px solid #000;
    }
  }
}
</style>

<script>
import findIndex from 'lodash/findIndex';
import { useToast } from 'vue-toastification';

import Navbar from './components/Navbar';
import CartModal from './components/CartModal';
import {createOrder} from './js/api';

export default {
  name: 'App',
  components: { Navbar, CartModal },
  data() {
    return {
      showCart: false,
      cart: [],
      processingPayment: false,
      purchaseDetails: null
    }
  },
  setup() {
    const toast = useToast();
    return { toast }
  },
  mounted() {
    const script = document.createElement('script');
    const client_id = "AXFPT_lcsqyLVZMlim4-vddSPtQS4546tcPShCZezgGPDdWtzVZvpHPR2CoP53jNbesps4p1Br3PhN0k";
    script.src = `https://www.paypal.com/sdk/js?client-id=${client_id}&currency=MXN`;
    script.addEventListener('load', this.preparePaypal);
    document.body.appendChild(script);
  },
  methods: {
    addToCart({ pid, name, prices, images, quantity }) {
      const index = findIndex(this.cart, { pid });

      if (index === -1) {
        this.cart.push({
          pid,
          name,
          total: prices,
          image: images[0],
          amount: quantity
        });
      } else {
        this.cart[index] = {
          ...this.cart[index],
          amount: this.cart[index].amount + quantity
        }
      }

      this.toast.success(`${name} fue agregado al carrito!`);
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    decProduct(index) {
      this.cart[index].amount--;
    },
    incProduct(index) {
      this.cart[index].amount++;
    },
    buyNow({ pid, name, prices, images, quantity }) {


      if (window.$cookies.get('user')){
        this.cart.length = 0;
        this.cart.push({
        pid,
        name,
        total: prices,
        image: images,
        amount: quantity
      });
      this.showCart = true;
      }
      else {
              this.toast.error(`No has iniciado sesión`);
              this.$router.push("/account")

      }
      
    },
    preparePaypal() {
      window.paypal.Buttons({
        enableStandardCardFields: true,
        createOrder: (_, actions) => {
          console.log()
          const subtotal = this.cart.reduce((accum, { total, amount }) => accum + total * amount, 0);

          return actions.order.create({
            purchase_units: [{
              description: "Orden de Jacobo Design",
              amount: {
                value: subtotal,
                currency_code: 'MXN'
              },
              payee: {
                email: "sb-z47i713811493@business.example.com",
                merchant_id: "SGE5T6SK4JQGU"
              }
            }]
          })
        },
        onApprove: (_, actions) => {
          this.processingPayment = true;
          actions.order.capture()
            .then(details => {
              createOrder(this.cart).then(resp => {
                console.log(resp);
              this.processingPayment = false;
              this.cart.length = 0;
              this.purchaseDetails = details;
              this.showCart = false;
              this.$router.push('/success');
              })
              .catch(err => console.error(err))
              
            })
        },
        onError: err => console.error(err)
      }).render('#pay-with-paypal')
    }
  }
}
</script>
