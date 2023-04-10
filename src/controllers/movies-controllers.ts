import { Request, Response } from "express";
import { findMany, insertUnique, deleteMovieId, updateMovieId } from "../repositories/jobs-repositories.js";
import { Movie, MovieEntity } from "../protocols/Movie.js";
import { movieSchema } from "../schemas/movie-schema.js";

async function insert(req: Request, res: Response) {
    const newMovie = req.body as Movie

    const { error } = movieSchema.validate(newMovie);

    if (error) {
        return res.status(400).send({
            message: error.message
        })
    }

    const resultado = await insertUnique(newMovie)
    return res.send(`Movie inserted ${resultado.rowCount}`)


}
async function listAll(req: Request, res: Response) {
    const resultado = await findMany();

    return res.send(resultado.rows)
}
async function updateMovie(req: Request, res: Response) {
    const id = req.body as MovieEntity

    try{
        const result = await updateMovieId(id);
        return res.send('Atualizado!' + result)
    }catch{
        return res.sendStatus(500)
    }
}

async function deleteMovie(req: Request, res: Response) {
    const id = req.body as MovieEntity

    try{
        const result = await deleteMovieId(id);
        return res.send('Excluido!' + result)
    }catch{
        return res.sendStatus(500)
    }

}

export {
    listAll,
    insert,
    updateMovie,
    deleteMovie
}