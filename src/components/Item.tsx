type Props = {
  value: number;
};

const Item = ({ value }: Props) => {
  return (
    <div
      id="item"
      className="p-4 text-center bg-yellow-200 hover:bg-yellow-600 active:bg-yellow-700 cursor-pointer"
      data-value={value}
    >
      FE{value}
    </div>
  );
};

export default Item;
