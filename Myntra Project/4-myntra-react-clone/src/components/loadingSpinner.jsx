const Loading = () => {
  return (
    <>
      <center>
        <div
          style={{ height: "4rem", width: "4rem" }}
          className="spinner-border text-primary loading-spinner"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </center>
    </>
  );
};

export default Loading;