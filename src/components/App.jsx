import React from "react";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";
import Filter from "./Filter";

function App() {
  return (
    <div>
      <MovieCard />
      <MovieList />
      <Filter />
    </div>
  );
}

export default App;
