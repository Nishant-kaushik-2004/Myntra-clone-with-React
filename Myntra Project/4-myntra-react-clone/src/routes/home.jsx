import HomeItem from "../components/homeItem";
import { useDispatch, useSelector } from "react-redux";
import Page from "../components/page";
import { pageActions } from "../store/pageslice";
import { useEffect } from "react";
const Home = () => {
  const dispatch = useDispatch();
  let items = useSelector((store) => store.items);
  let searchedItem = useSelector((store) => store.searchedItem);
  const pageNo = useSelector((store) => store.pageNo);

  let searchResultItems = items.filter((item) => {
    return item.item_name
      .toLowerCase()
      .includes(searchedItem.toLowerCase().trim());
  });

  let itemPerPage = 3;
  console.log(items);
  let searchResultItemsLength = searchResultItems.length;
  useEffect(() => {
    if (searchedItem.trim().length > 0) {
      dispatch(pageActions.updatePage(1));
    }
  }, [searchedItem]);

  let totalPages = Math.ceil(searchResultItemsLength / itemPerPage);
  let pages = [];
  for (let i = 0; i < totalPages; i++) {
    let start = i * itemPerPage;
    let end = start + itemPerPage;
    pages.push(searchResultItems.slice(start, end));
  }

  let currentPage = [];
  if (pageNo > 0 && pageNo <= totalPages) {
    currentPage = [...pages[pageNo - 1]];
  }
  return (
    <>
      <main>
        <div className="items-container">
          {currentPage.length > 0 ? (
            currentPage.map((item, idx) => (
              <HomeItem key={idx} item={item}></HomeItem>
            ))
          ) : (
            <p>No items match your search</p>
          )}
        </div>
        <Page searchResultItems={searchResultItems} />
      </main>
    </>
  );
};

export default Home;
