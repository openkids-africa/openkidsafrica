interface DonationResult {
  childrenEnabled: number;
  laptopsDeployed: number;
  statement: string;
}

const { formatNumber, formatCurrency } = useFormat();

const _50_STATEMENT =
  "With your $50 monthly donation, we can provide 4 free tech lessons and resources to rural schools every month. This enables 15 more children in rural schools annually to gain technology skills, opening up new possibilities and opportunities for their education and future.";
const _100_STATEMENT =
  "With your $100 monthly donation, we can provide 8 free tech lessons and resources  to rural schools every month. This enables 30 more children in rural schools annually to gain technology skills, opening up new possibilities and opportunities for their education and future";
const _150_STATEMENT =
  "With your $150 monthly donation, we can provide 12 free tech lessons to rural schools every month. This enables 45 more children in rural schools annually to gain technology skills, opening up new possibilities and opportunities for their education and future.";
const _500_STATEMENT =
  "With your $500 monthly donation, we can provide 16 free tech lessons to rural schools every month. This enables 150 more children in rural schools annually to gain technology skills, opening up new possibilities and opportunities for their education and future.";
const _CUSTOM_STATEMENT =
  "Your custom donation empowers children in rural African schools with essential tech lessons and resources, shaping their educational journey and future opportunities.";

export const useDonate = () => {
  const calculateDonationImpact = (
    amount: number,
    mode: "once" | "monthly",
  ): DonationResult => {
    let childrenEnabled = 0;
    let laptopsDeployed = 0;
    let statement = "";

    if (mode === "once") {
      childrenEnabled = amount < 4 && amount > 0 ? 1 : Math.floor(amount / 4);

      if (amount >= 100) {
        laptopsDeployed = Math.floor(amount / 50) * 2;
      }
    } else if (mode === "monthly") {
      childrenEnabled = Math.floor(amount / 2.5) * 12;

      if (amount >= 25) {
        laptopsDeployed = Math.floor(amount / 25) * 6;
      }

      if (amount === 50) {
        statement = _50_STATEMENT;
      }
      if (amount === 100) {
        statement = _100_STATEMENT;
      }
      if (amount === 150) {
        statement = _150_STATEMENT;
      }
      if (amount === 500) {
        statement = _500_STATEMENT;
      }
      if (amount > 500) {
        statement = _CUSTOM_STATEMENT;
      }
    } else {
      statement =
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
        `we can enable ${formatNumber(
          childrenEnabled,
        )} more children in rural schools` +
        `${
          mode === "monthly" ? " every year," : ","
        } opening up new possibilities and opportunities for their education and future.`;
    }

    return { childrenEnabled, laptopsDeployed, statement };
  };

  return {
    calculateDonationImpact,
  };
};
