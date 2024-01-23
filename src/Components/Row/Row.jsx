import React, { useEffect, useState } from "react";
import Youtube from "react-youtube";
import "./Row.css";
import axios from "../../Axios";
import { API_KEY, imageUrl } from "../../Constants/Constants";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    // axios.get(`/movie/${id}/460465/videos?api_key=${API_KEY}&language=en-US`)
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)

      .then((response) => {
        console.log(response.data);
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("empty array");
        }
      });
  };
  return (
    <>
      <div className="row">
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((e) => (
            <img
              onClick={() => handleMovie(e.id)}
              src={`${imageUrl + e.backdrop_path}`}
              alt=""
              className={props.isSmall ? "smallPoster" : "poster"}
            />
          ))}
        </div>
        {urlId && <Youtube videoId={urlId.key} opts={opts} />}
      </div>
    </>
  );
}

export default Row;
