
const numberOfFilms = +prompt('how many films did you already see?', '');

const personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};

const a = prompt('one of the last movies watched ?', ''),
      b = prompt('How do you rate it?', ''),
      c = prompt('one of the last movies watched ?', ''),
      d = prompt('How do you rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);