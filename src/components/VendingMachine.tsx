import ItemContainer from "./ItemContainer";
import Balance from "./Balance";
import LogContainer from "./LogContainer";
import InputContainer from "./InputContainer";

const VendingMachine: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="p-4 m-4 border">
        <Balance />
        <ItemContainer />
      </div>
      <div className="p-4">
        <InputContainer />
        <LogContainer />
      </div>
    </div>
  );
};

export default VendingMachine;
