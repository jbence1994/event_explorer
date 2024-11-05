const formatPrice: (input: number) => string = (input: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(input);
};

const formatDate: (date: Date) => string = (date: Date): string => {
  return date.toLocaleDateString("en-US");
};

export { formatPrice, formatDate };
