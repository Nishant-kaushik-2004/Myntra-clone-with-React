import { IoPerson } from "react-icons/io5";
import { FaRegFaceGrinHearts } from "react-icons/fa6";
import { PiShoppingCartBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoSearch } from "react-icons/io5";
import { useRef } from "react";
import { searchActions } from "../store/searchSlice";
const Header = () => {
  const bagItems = useSelector((store) => store.bagItems);
  const dispatch = useDispatch();
  let searched_item = useRef("");
  const updateSearchedItem = () => {
    dispatch(searchActions.updateSearchedItem(searched_item.current.value));
  };
  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar" tabIndex={0}>
          {" "}
          {/* tabIndex property is used to make any non-focusable element to focusable (here div) ,so that we can use :focus pseudo CSS property */}
          <span className="search_icon">
            <IoSearch />
          </span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
            ref={searched_item}
            onChange={updateSearchedItem}
          />
        </div>
        <div className="action_bar">
          <div className="action_container header-right">
            <IoPerson />
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
            <FaRegFaceGrinHearts />
            <span className="action_name">Wishlist</span>
          </div>

          <Link className="action_container bag" to="/bag">
            <PiShoppingCartBold />
            <span className="action_name">Cart</span>
            <span className="bag-item-count">{bagItems.length}</span>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
