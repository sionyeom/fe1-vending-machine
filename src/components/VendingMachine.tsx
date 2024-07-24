// type Props = {}
import ItemContainer from "./ItemContainer";
import Balance from "./Balance";
import ButtonContainer from "./ButtonContainer";
import LogContainer from "./LogContainer";
const VendingMachine = () => {
  return (
    <div className="flex justify-center">
      <div className="p-4 m-4 border">
        <Balance />
        <ItemContainer />
      </div>
      <div className="p-4">
        <div className="flex gap-4">
          <input id="input" className="border text-center" type="number" />
          <ButtonContainer />
        </div>
        <LogContainer />
      </div>
    </div>
  );
};

export default VendingMachine;
