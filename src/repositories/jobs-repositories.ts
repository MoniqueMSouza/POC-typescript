import { Movie, MovieEntity } from "../protocols/Movie.js";
import { connection } from "../database/databse.js";
import { QueryResult } from "pg";

function findMany(): Promise<QueryResult<MovieEntity>> {
  return connection.query(`SELECT * FROM movies`);
   
}

async function insertUnique(movie: Movie):Promise<QueryResult<MovieEntity>> {
return connection.query(`
INSERT INTO movies (name, aplication, genus, stats)
    VALUES ($1, $2, $3, $4)
    `, [movie.name, movie.aplication, movie.genus, movie.stats])

}

async function deleteMovieId(movie: MovieEntity):Promise<QueryResult<MovieEntity>>{
  return connection.query(`
  DELETE FROM movies WHERE id = $1`, [movie.id]
  )

}
async function updateMovieId(movie: MovieEntity):Promise<QueryResult<MovieEntity>>{
  return connection.query(`
  UPDATE movies SET stats=$1 `, [true]
  )

}

export {
    findMany,
    insertUnique,
    deleteMovieId,
    updateMovieId
}

