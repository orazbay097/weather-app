import axios from "axios";

axios.defaults.baseURL =
  "https://cors-anywhere.herokuapp.com/metaweather.com/api/";

const ApiService = {
  async getLocation(woeid) {
    try {
      return (await axios.get(`location/${woeid}`)).data;
    } catch (e) {
      console.error(e);
    }
  },
  async searchLocation(query, lattlong) {
    try {
      return (
        await axios.get(`location/search/`, { params: { query, lattlong } })
      ).data;
    } catch (e) {
      console.error(e);
    }
  },
};

export { ApiService };
