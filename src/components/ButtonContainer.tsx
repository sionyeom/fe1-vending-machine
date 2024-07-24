const InputButton = () => {
  return (
    <div
      id="insert"
      className="border p-4 cursor-pointer bg-gray-400 hover:bg-gray-600 active:bg-gray-700 text-white"
    >
      투입
    </div>
  );
};

const RepaymentButton = () => {
  return (
    <div
      id="repayment"
      className="border p-4 cursor-pointer bg-gray-400 hover:bg-gray-600 active:bg-gray-700 text-white"
    >
      반환
    </div>
  );
};

const ButtonContainer = () => {
  return (
    <div id="btn-container" className="flex gap-2">
      <InputButton />
      <RepaymentButton />
    </div>
  );
};

export default ButtonContainer;
