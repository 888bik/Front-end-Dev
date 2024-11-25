import { defineStore } from "pinia";
import { getAllCity } from "@/service/request/getAllCities";
const UseCityStore = defineStore("city", {
  state: () => {
    return {
      allCities: {},
      hotSuggests: {},
      currentCity: [],
    };
  },
  actions: {
    async fetchAllCitiesData() {
      const res = await getAllCity();
      this.allCities = res.data;
    },
  },
});

export default UseCityStore;
