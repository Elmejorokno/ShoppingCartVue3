<template>
  <th scope="row" colspan="2">Total products</th>
  <td>{{ totalAmount }}</td>
  <td>
    <button class="btn btn-danger btn-sm" @click="clearShoppingCart">
      Clear all
    </button>
  </td>
  <td class="fw-bold">{{ totalPrice }}</td>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "FooterCart",
  setup() {
    const store = useStore();

    const totalAmount = computed(() => store.getters.getTotalAmount);
    const totalPrice = computed(() => store.getters.getTotalPrice);

    const clearShoppingCart = () => {
      store.commit("CLEAR_PRODUCT_SHOPPING");
    };

    return {
      totalAmount,
      totalPrice,
      clearShoppingCart,
    };
  },
};
</script>

<style></style>
