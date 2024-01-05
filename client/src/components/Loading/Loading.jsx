/* eslint-disable react/prop-types */
import "./Loading.scss";

const Loading = ({ loading, completed, isError }) => {
  return (
    <div id="processing">
      <div className="loader">
        {loading && !completed && !isError && (
          <div className="circle-loader">
            <div className="checkmark draw"></div>
            <p>Please wait processing...</p>
          </div>
        )}
        {completed && (
          <>
            <div className="circle-loader load-complete">
              <div
                className="checkmark draw"
                style={{ display: "block" }}
              ></div>
            </div>
          </>
        )}
        {isError && (
          <>
            <div className="red-cross"></div>
            <p>Opps ! Something went wrong...</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Loading;
