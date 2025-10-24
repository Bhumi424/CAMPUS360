// bank.tsx (or bank.ts if you're not using JSX)
type CustomerType = "Gold" | "Preferred" | "Regular";

const bank = {
  customer: {
    currentBalance: 1000,

    deductCharges(charges: number, customerType: CustomerType): number {
      if (customerType === "Gold") {
        return this.currentBalance - (charges - (charges * 10) / 100);
      } else if (customerType === "Preferred") {
        return this.currentBalance - (charges - (charges * 5) / 100);
      } else {
        return this.currentBalance - charges;
      }
    },

    addQuarterlyInterest(customerType: CustomerType): number {
      if (customerType === "Gold") {
        return this.currentBalance + (this.currentBalance * 3.5) / 100;
      } else if (customerType === "Preferred") {
        return this.currentBalance + (this.currentBalance * 2.5) / 100;
      } else {
        return this.currentBalance + (this.currentBalance * 1.5) / 100;
      }
    },
  },
};

console.log(bank.customer.deductCharges(25, "Preferred"));
console.log(bank.customer.addQuarterlyInterest("Gold"));
