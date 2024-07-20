import { useDispatch, useSelector } from "react-redux";
import { BagSliceActions } from "../store/bagSlice";
import { FaShoppingCart } from "react-icons/fa";
import { CiBookmarkRemove } from "react-icons/ci";
/* eslint-disable react/prop-types */
const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bagItems);
  const elementFound = bagItems.includes(item.id);
  const handleAddToBag = () => {
    dispatch(BagSliceActions.addToBag(item.id));
  };
  const handleRemoveFromBag = () => {
    dispatch(BagSliceActions.removeFromBag(item.id));
  };
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {elementFound ? (
          <button
            type="button"
            className="btn btn-danger btn-add-bag"
            onClick={handleRemoveFromBag}
          >
            Remove <CiBookmarkRemove />
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-success btn-add-bag"
            onClick={handleAddToBag}
          >
            Add to Cart <FaShoppingCart />
          </button>
        )}
      </div>
    </>
  );
};

export default HomeItem;
