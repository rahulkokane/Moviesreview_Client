import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";  


const Hero = ({ movies }) => {
  return (
    <div className="movie-carousel-container">
      <Carousel>
        {
            movies?.map((movie) =>{
                return(
                <Paper >
                    <div className="movie-card-container">
                        <div className="movie-card" style={{
                      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,1)), url(${movie.backdrops?.[0]})`
                    }}>
                          <div className="movie-detail" >
                            <div className="movie-poster">
                                <img src={movie.poster} alt={movie.title} />
                            </div>
                            <div className="movie-title">
                              <h4>{movie.title}</h4>
                            </div>
                            
                            <div className="movie-buttons-container">
                            <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length-11)}`}>
                            <div className="play-button-icon-container">
                              <FontAwesomeIcon className="play-button-icon"
                                icon={faCirclePlay}
                              />
                              </div>
                            </Link >
                            </div>

                          </div>
                        </div>
                    </div>
                </Paper>)
            })
        }
      </Carousel>
    </div>
  );
};

export default Hero;
