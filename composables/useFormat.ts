export const useFormat = () => {
  const formatCurrency = (
    value: number,
    currencyCode: string = "USD",
    locale: string = "en-US",
  ) => {
    try {
      const formatter = new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currencyCode,
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    } catch (error) {
      console.error(`Error formatting currency: ${error}`);
      return value.toString(); // Fallback to the original value if formatting fails
    }
  };

  return {
    formatCurrency,
  };
};
