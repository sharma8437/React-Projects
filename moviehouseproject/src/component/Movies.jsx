import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import { movies } from "./data";

import { useState } from "react";

const Movies = () => {
  const [movieList, setMovieList] = useState(movies);


  const filterByCategory = (cat) => {
    setMovieList(movies.filter((data) => data.category == cat));
  };


  ``

  return (
    <>
      <div>
        <div className="button-div">
          <Button
            onClick={() => setMovieList(movies)}
            variant="outline-primary"
            className="btn"
          >
            All
          </Button>
          <Button
            onClick={() => filterByCategory("Action")}
            variant="outline-secondary"
            className="btn"
          >
            Action
          </Button>
          <Button
            onClick={() => filterByCategory("Thriller")}
            variant="outline-success"
            className="btn"
          >
            Thriller
          </Button>
          <Button
            onClick={() => filterByCategory("Horror")}
            variant="outline-danger"
            className="btn"
          >
            Horror
          </Button>
          <Button
            onClick={() => filterByCategory("Animation")}
            variant="outline-warning"
            className="btn"
          >
            Animation
          </Button>
          <Button
            onClick={() => filterByCategory("Drama")}
            variant="outline-info"
            className="btn"
          >
            Drama
          </Button>
          <Button
            onClick={() => filterByCategory("Sci-Fi")}
            variant="outline-light"
            className="btn"
          >
            Sci-Fi
          </Button>
        </div>
      </div>

      <div className="movie-con">
        {movieList.map((data) => (
          <div key={data.id} className="iner-box">
            <div className="hovereffect">
              <img src={data.poster_path} width="200px" height="280px"/>
            </div>
            <h6>{data.title}</h6>
            <p>{data.release_date}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;
