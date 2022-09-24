const Movie = require("../../models/movies");

module.exports = {
  movies: async () => {
    try {
      const movies = await Movie.find();
      return movies.map((movie) => {
        return { ...movie._doc, id: movie._doc._id.toString() };
      });
    } catch (err) {
      throw err;
    }
  },

  findMovie: async (args) => {
    const movieId = args.movieFind.id;
    try {
      const movies = await Movie.findById(movieId);
      console.log(movies);
      return movies;
    } catch (err) {
      throw err;
    }
  },

  createMovie: async (args) => {
    const movie = new Movie({
      name: args.movieInput.name,
      description: args.movieInput.description,
      price: +args.movieInput.price,
      image: args.movieInput.image,
      timings: args.movieInput.timings,
      category: args.movieInput.category,
    });
    console.log(movie);
    try {
      const movieSave = await movie.save();
      console.log(movieSave);
      return { ...movieSave._doc, id: movieSave._doc._id.toString() };
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
