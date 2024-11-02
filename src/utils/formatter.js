import moment from "moment";
import "moment/locale/en-gb.js";

const formatPrice = (input) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(input);
};

const formatDate = () => {
  const momentObj = moment();
  return `${momentObj.format("LL")}`;
};

export { formatPrice, formatDate };
