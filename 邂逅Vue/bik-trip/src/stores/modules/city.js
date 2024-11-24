const { default: axios } = require("axios");
const { defineStore } = require("pinia");

const groupData = defineStore("city", {
  state: () => {
    return {
      allCities: {},
    };
  },
  actions: {
    fetchAllCitiesData() {
      axios({
        url: "http://123.207.32.32:1888/api/city/all",
        method: "get",
      }).then((res) => {
        console.log(res);
      });
    },
  },
});

export default groupData;
