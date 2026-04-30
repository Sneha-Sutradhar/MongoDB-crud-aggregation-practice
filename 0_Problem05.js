db.watchlist.insertOne({
  movie_id: 1,
  title: "Inception",
  genre: "Sci-Fi",
  release_year: 2010,
  imdb_rating: 8.8,
  watched: false
});

db.watchlist.insertMany([
  { movie_id: 2, title: "Titanic", genre: "Romance", release_year: 1997, imdb_rating: 7.8, watched: true },
  { movie_id: 3, title: "Avengers", genre: "Action", release_year: 2012, imdb_rating: 8.0, watched: false },
  { movie_id: 4, title: "Interstellar", genre: "Sci-Fi", release_year: 2014, imdb_rating: 8.6, watched: false },
  { movie_id: 5, title: "Joker", genre: "Drama", release_year: 2019, imdb_rating: 8.5, watched: true },
  { movie_id: 6, title: "Frozen", genre: "Animation", release_year: 2013, imdb_rating: 7.4, watched: false }
]);

db.watchlist.find({ watched: false });

db.watchlist.find({}, { _id: 0, title: 1, genre: 1, imdb_rating: 1 });

db.watchlist.deleteOne({ movie_id: 6 });
