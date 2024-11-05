const formatPrice = (input) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(input);
};

const formatDate = (date) => {
  return date.toLocaleDateString("en-US");
};

export { formatPrice, formatDate };
