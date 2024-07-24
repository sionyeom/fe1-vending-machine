import Item from "./Item";

const ItemContainer = () => {
  // Create an array of values from 300 to 1100, incremented by 100
  const values = Array.from(
    { length: (1100 - 300) / 100 + 1 },
    (_, i) => 300 + i * 100
  );

  return (
    <div className="grid grid-cols-3 gap-4 pt-4">
      {values.map((value) => (
        <Item key={value} value={value} />
      ))}
    </div>
  );
};

export default ItemContainer;
