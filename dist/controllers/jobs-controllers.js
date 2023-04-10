import { findMany, insertUnique } from "../repositories/jobs-repositories.js";
//let resultado:boolean | number = true;
//const job: (string | boolean)[] = ['Teach Lead', false]
/*const job: {
    id: number,
    title: string,
    salary: number,
    status: boolean,
    skills: (string | number)[],
    until: string | Date
} = {
    id: 1,
    title: 'Tech Lead',
    salary: 40,
    status: true,
    skills: ['typscript', 'react', 2],
    until: '2023-04-20'
}
*/
var nome = 1;
function listAll(req, res) {
    var resultado = findMany();
    return res.send(resultado);
}
function insert(req, res) {
    var newJob = req.body;
    var insertedJob = insertUnique(newJob);
    return res.send("Job inserted with id ".concat(insertedJob.id));
}
export { listAll, insert };
