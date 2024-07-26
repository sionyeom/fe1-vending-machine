import { observer } from "mobx-react-lite";
import vendingMachineStore from "../store/VendingMachineStore";

const InputContainer: React.FC = observer(() => {
  const { input, setInput, deposit, repayment } = vendingMachineStore;

  return (
    <div className="flex gap-4">
      <input
        id="input"
        className="border text-center"
        type="number"
        value={input}
        onChange={setInput}
      />
      <div id="btn-container" className="flex gap-2">
        <div
          id="insert"
          className="border p-4 cursor-pointer bg-gray-400 hover:bg-gray-600 active:bg-gray-700 text-white"
          onClick={() => deposit(input as number)}
        >
          투입
        </div>
        <div
          id="repayment"
          className="border p-4 cursor-pointer bg-gray-400 hover:bg-gray-600 active:bg-gray-700 text-white"
          onClick={repayment}
        >
          반환
        </div>
      </div>
    </div>
  );
});

export default InputContainer;
