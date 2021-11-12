<template>
  <div class="d-flex align-items-stretch flex-wrap">
    <product-card
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import routes from "../routes";
import ProductCard from "./ProductCard.vue";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      routes,
    };
  },
  components: {
    ProductCard,
  },
  computed:{
    ...mapState(["products"])
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    ...mapActions(["getProducts"])
  }
};
</script>

<style>
</style>