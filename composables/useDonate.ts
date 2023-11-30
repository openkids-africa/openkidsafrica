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
      studentsEnabled = Math.floor(amount / 2.5) * 12;

      if (amount >= 25) {
        laptopsDeployed = Math.floor(amount / 25) * 6;
      }
    }

    const statement =
      `Because of your ${formatCurrency(amount)} ${
        mode === "monthly" ? "monthly " : ""
      }donation,` +
      `${
        laptopsDeployed > 0
          ? ` we can make a tangible difference by deploying ${formatNumber(
              laptopsDeployed,
            )} additional laptops. This means that `
          : ""
      }` +
      `we can enable ${formatNumber(studentsEnabled)} more students` +
      `${
        mode === "monthly" ? " every year," : ","
      } opening up new possibilities and opportunities for their education and future.`;

    return { studentsEnabled, laptopsDeployed, statement };
  };

  return {
    calculateDonationImpact,
  };
};
