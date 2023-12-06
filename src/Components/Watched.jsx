/* eslint-disable react/prop-types */
import Summary from "./Summary";
import WatchList from "./WatchList";
const Watched = ({
  onClick,
  isOpen2,
  watched,
  avgImdbRating,
  avgUserRating,
  avgRuntime,
}) => {
  return (
    <div className="box">
      <button className="btn-toggle" onClick={onClick}>
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <Summary
            watched={watched}
            avgImdbRating={avgImdbRating}
            avgUserRating={avgUserRating}
            avgRuntime={avgRuntime}
          />
          <WatchList watched={watched} />
        </>
      )}
    </div>
  );
};

export default Watched;
