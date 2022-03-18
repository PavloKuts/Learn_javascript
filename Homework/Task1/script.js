"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже прсмотрели?", 0),
      lastWatchedMovie = prompt("Один из последних просмотренных фильмов?", 0),
      filmScore = prompt("Насколько оцените его?", 0);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[lastWatchedMovie] = filmScore;
console.log(personalMovieDB); 
    



