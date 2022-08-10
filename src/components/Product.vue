<template>
  <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3">
    <div class="card">
      <img
        :src="product.thumbnailUrl"
        :alt="product.title"
        class="card-img-top"
      />
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text">{{ product.price }}</p>
        <button class="btn btn-dark" @click="addProduct">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "Product",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const addProduct = () => {
      store.commit("ADD_PRODUCT_AMOUNT", { product: props.product });
    };

    return { addProduct };
  },
};
</script>

<style scoped></style>
