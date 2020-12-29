import axios from "axios";

axios.defaults.baseURL =
  "https://orazbay-ualesh-cors.herokuapp.com/metaweather.com/api/";

axios.interceptors.response.use(
  res => res,
  async error => {
    await alert("Some error occured. Please, reload the page.");
    location.reload();
    return Promise.reject(error);
  },
);

const ApiService = {
  async getLocation(woeid) {
    return (await axios.get(`location/${woeid}`)).data;
  },
  async searchLocation(query, lattlong) {
    return (
      await axios.get(`location/search/`, { params: { query, lattlong } })
    ).data;
  },
};

export { ApiService };
