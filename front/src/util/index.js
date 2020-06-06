export const { format: formatPrice } = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
});

// export const formatDate = (date) => {
//   return format(date, "dd'/'MM'/'yyyy", { locale: pt });
// };
