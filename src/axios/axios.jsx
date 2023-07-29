import axios from "axios";
const products_url = "https://course-api.com/react-store-products";

const fetchAllProducts = async () => {
  try {
    let resp = await axios.get(products_url);
    resp = await resp.data;
    return resp;
  } catch (error) {
    // console.log(error.message);
    return error.message;
  }
};

export { fetchAllProducts };
