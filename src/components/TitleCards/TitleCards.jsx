import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data';
import blockbusterMovies from '../../assets/blockbuster/blockbusterMovies';
import onlyOnNetflix from '../../assets/netflix/onlyOnNetflix';
import topPicks from '../../assets/topPicks/topPicks';
import upcomingMovies from '../../assets/upcoming/upcomingMovies';

const TitleCards = ({ title }) => {
  const cardsRef = useRef();
  const [movieData, setMovieData] = useState(cards_data); // Default to cards_data

  useEffect(() => {
    switch (title) {
      case 'Blockbuster Movies':
        setMovieData(blockbusterMovies);
        break;
      case 'Only on Netflix':
        setMovieData(onlyOnNetflix);
        break;
      case 'Top Pics for You':
        setMovieData(topPicks);
        break;
      case 'Upcoming':
        setMovieData(upcomingMovies);
        break;
      default:
        setMovieData(cards_data); // Default
    }
  }, [title]);

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    if (cardsRef.current) {
      cardsRef.current.addEventListener('wheel', handleWheel);
    }
    return () => {
      if (cardsRef.current) {
        cardsRef.current.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className="titlecards">
      <h2>{title ? title : 'Popular on NetFlix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {movieData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.name} />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;