/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import styles from "./page.module.css";
import { pageActions } from "../store/pageslice";

const Page = ({searchResultItems}) => {
  const dispatch = useDispatch();
  const totalPages = Math.ceil(searchResultItems.length / 3); // Adjust itemPerPage accordingly
  const currentPage = useSelector((store) => store.pageNo);

  const handleOnChange = (event) => {
    const pageNo = parseInt(event.target.id.match(/\d+/)[0], 10); // to find the first number in the string in decimal
    dispatch(pageActions.updatePage(pageNo));
  };

  return (
    <div className={styles.pageChangeBox}>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        {[...Array(totalPages)].map((_, index) => {
          const pageNo = index + 1;
          return (
            <div key={pageNo}>
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id={`btnradio${pageNo}`}
                checked={currentPage === pageNo}
                onChange={handleOnChange}
              />
              <label className="btn btn-outline-primary" htmlFor={`btnradio${pageNo}`}>
                {pageNo}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;











// import { useDispatch } from "react-redux";
// import styles from "./page.module.css";
// import { pageActions } from "../store/pageslice";
// const Page = () => {
//   const dispatch = useDispatch();
//   const handleOnChange = (event) => {
//     const pageNo = parseInt(event.target.id.match(/\d+/)[0], 10); //to find first number in the string in decimal.
//     dispatch(pageActions.updatePage(pageNo));
//   };
//   return (
//     <div className={styles.pageChangeBox}>
//       <div
//         className="btn-group"
//         role="group"
//         aria-label="Basic radio toggle button group"
//       >
//         <input
//           type="radio"
//           className="btn-check"
//           name="btnradio"
//           id="btnradio1"
          
//           onChange={handleOnChange}
//         />
//         <label className="btn btn-outline-primary" htmlFor="btnradio1">
//           1
//         </label>

//         <input
//           type="radio"
//           className="btn-check"
//           name="btnradio"
//           id="btnradio2"
//           onChange={handleOnChange}
//         />
//         <label className="btn btn-outline-primary" htmlFor="btnradio2">
//           2
//         </label>

//         <input
//           type="radio"
//           className="btn-check"
//           name="btnradio"
//           id="btnradio3"
//           onChange={handleOnChange}
//         />
//         <label className="btn btn-outline-primary" htmlFor="btnradio3">
//           3
//         </label>
//       </div>
//     </div>
//   );
// };

// export default Page;
