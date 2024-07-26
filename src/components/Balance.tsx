import { observer } from "mobx-react-lite";
import vendingMachineStore from "../store/VendingMachineStore";

const Balance: React.FC = observer(() => {
  const { balance, temporaryBalance } = vendingMachineStore;

  return (
    <div id="balance" className="border p-4 text-center">
      {temporaryBalance !== null ? temporaryBalance : balance.toLocaleString()}
    </div>
  );
});

export default Balance;
