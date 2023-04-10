import jobs from '../database/data.js';
function findMany() {
    return jobs;
}
function insertUnique(job) {
    job.id = jobs.length + 1;
    jobs.push(job);
    return job;
}
export { findMany, insertUnique };
