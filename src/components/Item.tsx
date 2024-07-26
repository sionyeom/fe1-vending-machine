import { observer } from "mobx-react-lite";
import vendingMachineStore from "../store/VendingMachineStore";

type Props = {
  value: number;
};

const Item: React.FC<Props> = observer(({ value }) => {
  const { purchase, setTemporaryBalance } = vendingMachineStore;

  const handleMouseDown = () => {
    setTemporaryBalance(value);
  };

  const handleMouseUp = () => {
    setTemporaryBalance(null);
  };

  return (
    <div
      id="item"
      className="p-4 text-center bg-yellow-200 hover:bg-yellow-600 active:bg-yellow-700 cursor-pointer"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={() => purchase(value)}
    >
      FE{value}
    </div>
  );
});

export default Item;
