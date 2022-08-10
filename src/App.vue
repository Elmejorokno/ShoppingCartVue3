<template>
  <div class="container">
    <h1>Shopping Cart</h1>

    <div class="row">
      <Product
        v-for="product of products"
        :key="product.id"
        :product="product"
      />
    </div>

    <ShoppingCart />
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import Product from "./components/Product.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
export default {
  name: "App",
  components: { Product, ShoppingCart },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("getProducts");
    });

    const products = computed(() => store.state.products);

    return { products };
  },
};
</script>

<style></style>
