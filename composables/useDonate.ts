import donate from "~/content/pages/donate.json";

interface DonationResult {
  childrenEnabled: number;
  laptopsDeployed: number;
  statement: string;
}

const { formatNumber, formatCurrency } = useFormat();

/* The monthly statements are the amounts listed on the donate page
   (content/pages/donate.json): an option titled "$50 Monthly Donation"
   describes a $50 monthly gift, and the one without an amount in its
   title describes a custom gift. */
const MONTHLY_STATEMENTS = new Map<number, string>();
let customStatement = "";
for (const option of donate.impact.options) {
  const amount = /^\$([\d,]+)/.exec(option.title)?.[1];
  if (amount)
    MONTHLY_STATEMENTS.set(
      Number(amount.replace(/,/g, "")),
      option.description,
    );
  else customStatement = option.description;
}
const _CUSTOM_STATEMENT = customStatement;

// statement =
// `Because of your ${formatCurrency(amount)} ${
//   mode === "monthly" ? "monthly " : ""
// }donation,` +
// `${
//   laptopsDeployed > 0
//     ? ` we can make a tangible difference by deploying ${formatNumber(
//         laptopsDeployed,
//       )} additional laptops. This means that `
//     : ""
// }` +
// `we can enable ${formatNumber(
//   childrenEnabled,
// )} more children in rural schools` +
// `${
//   mode === "monthly" ? " every year," : ","
// } opening up new possibilities and opportunities for their education and future.`;

export const useDonate = () => {
  const calculateDonationImpact = (
    amount: number,
    mode: "once" | "monthly",
  ): DonationResult => {
    let childrenEnabled = 0;
    let laptopsDeployed = 0;
    let statement = "";

    if (mode === "monthly") {
      childrenEnabled = Math.floor(amount / 2.5) * 12;

      if (amount >= 25) {
        laptopsDeployed = Math.floor(amount / 25) * 6;
      }

      statement = MONTHLY_STATEMENTS.get(amount) ?? "";
      if (amount > 500) {
        statement = _CUSTOM_STATEMENT;
      }
      /* Any other monthly amount is a custom one. */
      if (!statement && amount > 0) {
        statement = _CUSTOM_STATEMENT;
      }
    } else if (mode === "once") {
      childrenEnabled = amount < 4 && amount > 0 ? 1 : Math.floor(amount / 4);

      if (amount >= 100) {
        laptopsDeployed = Math.floor(amount / 50) * 2;
      }

      statement =
        `Because of your ${formatCurrency(amount)} donation,` +
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
        `, opening up new possibilities and opportunities for their education and future.`;
    }

    return { childrenEnabled, laptopsDeployed, statement };
  };

  return {
    calculateDonationImpact,
  };
};
