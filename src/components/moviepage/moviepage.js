import React from "react";
import { useLocation } from "react-router-dom";
import "./movie_page_ele.css";
import { useNavigate } from "react-router-dom";

function Moviepage() {
  let navigate = useNavigate();
  const location = useLocation();
  const movie = location.state.movie;
  const movieTimings = location.state.movie.timings;

  function goBack() {
    navigate("/");
  }

  return (
    <div className="page">
      <div className="rowContainer">
        <div className="circleContainer" onClick={goBack}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/93/93634.png"
            className="backIcon"
          />
        </div>
      </div>
      <div className="rowStart">
        <img src={movie.image} className="ProductImg" />
        <div className="column">
          <div className="text">{movie.name}</div>
          <div className="bodyText">{movie.description}</div>
          <div className="p1">Show Timings</div>
          <div className="timingsRow">
            {movieTimings.map((x, i) => (
              <div className="showTimingsContainer" key={i}>
                {movieTimings[i]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Moviepage;
