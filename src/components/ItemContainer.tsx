import Item from "./Item";
import { item } from "../constants/constant";

const ItemContainer: React.FC = () => {
  const values = Array.from(
    { length: (item.MAX_PRICE - item.MIN_PRICE) / item.PRICE_INCREMENT + 1 },
    (_, i) => item.MIN_PRICE + i * item.PRICE_INCREMENT
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
