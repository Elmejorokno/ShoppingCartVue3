import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
    shoppingCart: [],
  },
  getters: {
    getTotalAmount(state) {
      return state.shoppingCart.reduce((acc, { amount }) => acc + amount, 0);
    },
    getTotalPrice(state) {
      return state.shoppingCart.reduce(
        (acc, { amount, price }) => acc + price * amount,
        0
      );
    },
  },
  mutations: {
    GET_PRODUCTS(state, { products }) {
      state.products = products;
    },
    ADD_PRODUCT_AMOUNT(state, { product }) {
      const index = state.shoppingCart.findIndex(
        (productItem) => productItem.id === product.id
      );

      if (index === -1) {
        product.amount = 1;
        state.shoppingCart.push(product);
      } else {
        state.shoppingCart[index].amount += 1;
      }
    },
    DECREASE_PRODUCT_AMOUNT(state, { product }) {
      const index = state.shoppingCart.findIndex(
        (productItem) => productItem.id === product.id
      );

      if (state.shoppingCart[index].amount === 1) {
        state.shoppingCart.splice(index, index + 1);
      } else {
        state.shoppingCart[index].amount -= 1;
      }
    },
    CLEAR_PRODUCT_SHOPPING(state) {
      state.shoppingCart = [];
    },
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const res = await fetch("api.json");
        const data = await res.json();

        commit("GET_PRODUCTS", { products: data });
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
