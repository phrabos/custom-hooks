import React, { useState, useEffect } from 'react';
import CharacterList from '../components/animalCrossing/CharacterList';
import { fetchAllCharacters } from '../services/apiUtils';
import style from './main.css';


const AnimalCrossingContainer = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchAllCharacters(page)
      .then(setCharacters)
      .finally(() => setLoading(false));
  }, [page]);

  const handleError = (e) => {
    // console.log('image error', name);
    e.target.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1d0155d9-6365-4974-9454-a0c3115dd492/dcmkbon-1cb186ff-aec7-45dc-b7ed-42640c073578.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFkMDE1NWQ5LTYzNjUtNDk3NC05NDU0LWEwYzMxMTVkZDQ5MlwvZGNta2Jvbi0xY2IxODZmZi1hZWM3LTQ1ZGMtYjdlZC00MjY0MGMwNzM1NzgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.K-W4WuNtY6Dbjs8gyzxzsv7MvNHl4dU-mBEvZ5sjdA8';
  };
  
  if(loading) return <h1>Loading...</h1>;
  
  return (
    <div className={style.characterWrapper}>
      <button onClick={() => {
        if(page === 1) return;
        else setPage((prevPage) => prevPage - 1);
      }}>Prev</button>
      <button onClick={() => {
        if(page === 8) return;
        setPage((prevPage) => prevPage + 1);
      }}>Next</button>
      <CharacterList characters={characters} handleError={handleError}/>
    </div>
  );
};


export default AnimalCrossingContainer;
