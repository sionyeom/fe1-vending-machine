import { makeAutoObservable } from "mobx";
import { item } from "../constants/constant";

class VendingMachineStore {
  balance: number;
  input: number | "";
  logs: string[];
  temporaryBalance: number | null;

  constructor() {
    this.balance = 0;
    this.input = "";
    this.logs = [];
    this.temporaryBalance = null;
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setInput(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = Number(e.target.value);
    this.input = newValue;
  }

  deposit(value: number) {
    if (value > 0) {
      this.balance += value;
      this.logs.push(`${value.toLocaleString()}원이 투입되었습니다.`);
    }
    this.input = "";
  }

  repayment() {
    if (this.balance > 0) {
      this.logs.push(`${this.balance.toLocaleString()}원이 반환되었습니다.`);
      this.balance = 0;
    } else {
      this.logs.push(`반환할 금액이 없습니다.`);
    }
  }

  purchase(itemValue: number) {
    if (this.balance >= itemValue) {
      this.balance -= itemValue;
      this.logs.push(`FE${itemValue}을 구매했습니다.`);

      if (this.balance !== 0 && this.balance < item.MIN_PRICE) {
        this.repayment();
      }
    } else {
      this.logs.push(`잔액이 부족합니다.`);
    }
  }

  setTemporaryBalance(value: number | null) {
    if (this.balance === 0) this.temporaryBalance = value;
  }
}

const vendingMachineStore = new VendingMachineStore();
export default vendingMachineStore;
