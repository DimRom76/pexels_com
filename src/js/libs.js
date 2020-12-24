import { createClient } from "pexels";
import imageLi from "../templates/item.hbs";
import refs from "./refs";

const client = createClient(
  "563492ad6f917000010000016e4fd836ee81457fb18ea7174db3fdc5",
);

const query = "Nature";

client.photos.search({ query, per_page: 5 }).then((result) => {
  const items = imageLi(result.photos);
  console.log(items);
  refs.gallery.insertAdjacentHTML("afterbegin", items);
});
