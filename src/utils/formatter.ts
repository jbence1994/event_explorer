import moment = require("moment");
import "moment/locale/en-gb.js";

const formatPrice: (input: number) => string = (input: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(input);
};

const formatDate: () => string = (): string => {
  const momentObj: any = moment();
  return `${momentObj.format("LL")}`;
};

export { formatPrice, formatDate };
