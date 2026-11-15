import type { FiscalSellerCalcInput } from "@/lib/fiscal-seller-calculator";
import { FISCAL_SELLER_EXCEL_FIXTURE } from "@/lib/fiscal-seller-calculator";

/** Mismos datos que el fixture de referencia del motor; solo cambian nombres (público). */
export const FISCAL_SELLER_PUBLIC_EXAMPLE_FIXTURE: FiscalSellerCalcInput = {
  ...FISCAL_SELLER_EXCEL_FIXTURE,
  owners: FISCAL_SELLER_EXCEL_FIXTURE.owners.map((o, i) => ({
    ...o,
    name: i === 0 ? "Titular ficticio A" : "Titular ficticio B",
  })),
};