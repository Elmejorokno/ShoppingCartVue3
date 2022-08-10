<template>
  <div class="my-5">
    <h4>Shop cart</h4>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Amount</th>
          <th scope="col">Action</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody id="items">
        <ItemCart
          v-for="product of shoppingCart"
          :key="product.id"
          :product="product"
        />
      </tbody>
      <tfoot>
        <tr id="footer-shopcart">
          <th v-if="shoppingCart.length === 0" scope="row" colspan="5">
            Empty Shop Cart
          </th>
          <FooterCart v-else />
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import ItemCart from "./ItemCart.vue";
import FooterCart from "./FooterCart.vue";
export default {
  name: "ShoppingCart",
  setup() {
    const store = useStore();
    const shoppingCart = computed(() => store.state.shoppingCart);
    return { shoppingCart };
  },
  components: { ItemCart, FooterCart },
};
</script>

<style></style>
