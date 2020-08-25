export const formatBudget = (budget) => {
  return Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
  }).format(budget);
};
