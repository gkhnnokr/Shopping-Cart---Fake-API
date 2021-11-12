<template>
  <div>
    <nav class="navbar fixed-top navbar-expand navbar-dark bg-dark">
      <div class="nav navbar-nav">
        <router-link @click="goToHome" to="/" class="nav-item nav-link active">
          Anasayfa
        </router-link>
        <router-link to="/Products" class="nav-item nav-link">
          Ürünler
        </router-link>
      </div>

      <div class="position-absolute top-10 end-0 m-4">
        <b-dropdown
          @click="$event.stopPropogation()"
          id="dropdown"
          text="Sepet"
          class="m-md-2"
        >
          <mini-cart />
        </b-dropdown>
      </div>
    </nav>
  </div>
</template>

<script>
import MiniCart from "./MiniCart.vue";
import routes from "../routes";
export default {
  data() {
    return {
      routes,
    };
  },
  components: {
    MiniCart,
  },
  methods: {
    goToHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style>
</style>