import getHomeHotSuggest from "@/service/request/getHomeHotSuggest";

import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
  state: () => {
    return {
      hotSuggests: [],
      categories: [],
    };
  },
  actions: {
    async fetchHotSuggestData() {
      const res = await getHomeHotSuggest();
      this.hotSuggests = res.data;
      console.log(this.hotSuggests);
    },
  },
});
export default useHomeStore;
