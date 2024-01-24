export const numberWithCommas = (n: number): string => {
  return n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
