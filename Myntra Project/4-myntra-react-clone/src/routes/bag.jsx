import BagItem from "../components/bagItem";
import BagSummary from "../components/bagSummary";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagItems = useSelector((store) => store.bagItems);
  const items = useSelector((store) => store.items);
  let finalItems = items.filter((item) => {
    if (bagItems.includes(item.id)) {
      return item;
    }
  });
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item, idx) => (
            <BagItem
              item={item}
              key={idx}
            />
          ))}
        </div>
        <BagSummary finalItems={finalItems}/>
      </div>
    </main>
  );
};

export default Bag;
