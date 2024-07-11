//this page imports all schemas so they can be exported as once file
import user from "./user-schema";
import product from "./product-schema";
import order from "./order-schema";
import comment from "./comment-schema";
import contact from "./contact-schema";
import bannerImage from "./banner-schema";
import bannerText from "./bannerText-schema";

const schemas = [
  user,
  product,
  order,
  comment,
  contact,
  bannerImage,
  bannerText,
];

export default schemas;
