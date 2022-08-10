<template>
  <tr>
    <th scope="row">{{ product.id }}</th>
    <td>{{ product.title }}</td>
    <td>{{ product.amount }}</td>
    <td>
      <button class="btn btn-info btn-sm" @click="addOneAmount">+</button>
      <button class="btn btn-danger btn-sm" @click="decreaseOneAmount">
        -
      </button>
    </td>
    <td>{{ totalForProduct }}</td>
  </tr>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "ItemCart",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const totalForProduct = computed(
      () => props.product.price * props.product.amount
    );

    const addOneAmount = () => {
      store.commit("ADD_PRODUCT_AMOUNT", { product: props.product });
    };

    const decreaseOneAmount = () => {
      store.commit("DECREASE_PRODUCT_AMOUNT", { product: props.product });
    };

    return { totalForProduct, addOneAmount, decreaseOneAmount };
  },
};
</script>

<style></style>
