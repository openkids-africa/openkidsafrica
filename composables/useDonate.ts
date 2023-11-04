interface DonationResult {
  studentsEnabled: number;
  laptopsDeployed: number;
  statement: string;
}

const { formatNumber, formatCurrency } = useFormat();

export const useDonate = () => {
  const calculateDonationImpact = (
    amount: number,
    mode: "once" | "monthly",
  ): DonationResult => {
    let studentsEnabled = 0;
    let laptopsDeployed = 0;

    if (mode === "once") {
      studentsEnabled = amount < 4 && amount > 0 ? 1 : Math.floor(amount / 4);

      if (amount >= 100) {
        laptopsDeployed = Math.floor(amount / 50) * 2;
      }
    } else if (mode === "monthly") {
      studentsEnabled = Math.floor(amount / 4) * 12;

      if (amount >= 25) {
        laptopsDeployed = Math.floor(amount / 25) * 6;
      }
    }

    const statement =
      `Because of your ${formatCurrency(amount)} ${
        mode === "monthly" ? "monthly " : ""
      }donation, we can enable ${formatNumber(studentsEnabled)} more students` +
      `${
        laptopsDeployed > 0
          ? ` and deploy ${formatNumber(laptopsDeployed)} more laptops`
          : ""
      }` +
      `${mode === "monthly" ? " every year" : "."}`;

    return { studentsEnabled, laptopsDeployed, statement };
  };

  return {
    calculateDonationImpact,
  };
};
