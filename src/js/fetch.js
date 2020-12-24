import imageLi from "../templates/item.hbs";
import refs from "./refs";

export default {
  query: "dog",
  page: 1,
  perPage: 4,
  baseUrl: "https://api.pexels.com/v1",

  get queryValue() {
    return this.query;
  },

  set queryValue(val) {
    return (this.query = val);
  },

  getFetch(val, place) {
    this.queryValue = val;
    let key = "563492ad6f917000010000016e4fd836ee81457fb18ea7174db3fdc5";
    let params = `/search?query=${this.query}&`;
    let url = this.baseUrl + params;
    let options = {
      method: "GET",
      headers: {
        Authorization: key,
      },
    };
    return fetch(url, options)
      .then((res) => res.json())
      .then((data) => data.photos)
      .then((result) => {
        const items = imageLi(result);
        place.insertAdjacentHTML("afterbegin", items);
      });
  },
};
