export const getLastTenDaysDateRange = (): {
  startDate: string;
  endDate: string;
} => {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - 10);

  return {
    startDate: startDate.toISOString().split("T")[0],
    endDate: endDate.toISOString().split("T")[0],
  }
};
