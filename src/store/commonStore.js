import { defineStore, acceptHMRUpdate } from "pinia";

export const useMainStore = defineStore({
  id: "mainStore",
  state: () => ({
    items: [],
  }),

  actions: {
    updateItem(id, payload) {},

    deleteItem(id) {},

    findIndexById(id) {},
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot));
}
