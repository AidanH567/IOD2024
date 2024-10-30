"use client";
import React, { useState } from "react";
import { AddMovieForm } from "../components/AddMovie";


function Movie({ title, year, synopsis }) {
  return (
    <li>
      <h3>{title}</h3> <span>({year})</span>
      <div>{synopsis}</div>
    </li>
  );
}

const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    synopsis: "Two imprisoned men find redemption.",
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    synopsis: "Batman fights the menace known as the Joker.",
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    synopsis: "Explorers travel through a wormhole in space.",
  },
];

function SortButton({ onClick, label }) {
  return <button onClick={onClick}>{label}</button>;
}

export default function MoviesList() {
  const [currentMovies, setCurrentMovies] = useState(movies);

  const handleAddMovie = (newMovie) => {
    newMovie.id = currentMovies.length + 1; // unreliable but succinct
    setCurrentMovies([...currentMovies, newMovie])
    }

  const handleReverseMovies = () => {
    let newMovies = [...currentMovies];
    newMovies.reverse();
    setCurrentMovies(newMovies);
  };

  const handleYearMovies = () => {
    let newMovies = [...currentMovies];
    newMovies.sort((a, b) => a.year - b.year);
    setCurrentMovies(newMovies);
  };

  return (
    <>
      <h1>Movie List</h1>
      <ul>
        {currentMovies.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            year={movie.year}
            synopsis={movie.synopsis}
          />
        ))}
      </ul>
      <div className="MoviesList">
        <SortButton onClick={handleReverseMovies} label="Reverse List" />
        <SortButton onClick={handleYearMovies} label="Sort By Year" />
        <div><AddMovieForm onAddMovie={handleAddMovie}/></div>
      </div>
    </>
  );
}
