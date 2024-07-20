import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import FetchItems from "../components/fetchItems";
import { useSelector } from "react-redux";
import Loading from "../components/loadingSpinner";


function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header></Header>
      <FetchItems />
      {fetchStatus.currentlyFetching ? <Loading /> : <Outlet />}
      <Footer></Footer>
    </>
  );
}

export default App;
