import axios from "axios";
const products_url = "https://course-api.com/react-store-products";
const single_product_url = `https://course-api.com/react-store-single-product?id=`;

const fetchAllProducts = async () => {
  let resp = await axios.get(products_url);
  resp = await resp.data;
  return resp;
};

const fetchSingleProducts = async (id) => {
  let resp = await axios.get(`${single_product_url}${id}`);
  resp = await resp.data;
  return resp;
};

export { fetchAllProducts, fetchSingleProducts };
