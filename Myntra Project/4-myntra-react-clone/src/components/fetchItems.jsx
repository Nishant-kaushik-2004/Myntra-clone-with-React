import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus.fetchDone) {
      return;
    }
    const controller = new AbortController(); //  Advanced(good) programmer stuff
    const signal = controller.signal;
    dispatch(fetchStatusActions.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((data) => data.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(itemsActions.addInitialItems(items));
      });
    return () => {
      controller.abort("finished fetching");
    };
  }, [fetchStatus]);

  return <></>; // This is component with no U.I, this type of components are called headless components. used to write logic only.
};

export default FetchItems;
