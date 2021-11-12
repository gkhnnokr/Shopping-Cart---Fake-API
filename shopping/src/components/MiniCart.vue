<template>
  <div>
    <b-dropdown-item style="min-width:320px; right:0, left:auto">
      <div v-for="item in cart" :key="item.product.id">
        <div class="d-flex justify-content-between">
          <div>
            <strong> {{ item.product.title }} </strong>
            <br />
            {{ item.quantity }} x {{ item.product.price }}
          </div>
          <b-button size="sm" @click.prevent="removeProductFromCart(item.product)">Kaldır</b-button>
        </div>
      </div>
      <hr />
      <div class="d-flex justify-content-between">
        <span> Total : ${{ cartTotalPrice }} </span>
        <b-button size="sm" @click.prevent="clearCartItems()">Temizle</b-button>
      </div>
    </b-dropdown-item>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      product: [],
    };
  },
  computed: {
    
    ...mapState(["cart"]),

    ...mapGetters(["cartTotalPrice"])
  },

  methods: {

    ...mapActions(["removeProductFromCart","clearCartItems"])
    
  }

  // mounted() {
  //   this.$store.dispatch('getCartItems');
  // },
};
</script>

<style>
</style>