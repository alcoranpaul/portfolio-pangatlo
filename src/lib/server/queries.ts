import pool from '$lib/server/db';

export async function getTags() {
    const result = await pool.query('SELECT * FROM tags');
    return result.rows;
}

export async function getProjects() {
    const result = await pool.query('SELECT * FROM projects');
    return result.rows;
}

export async function getSkills() {
    const result = await pool.query('SELECT * FROM skills');
    return result.rows;
}

export async function getExperience() {
    const result = await pool.query('SELECT * FROM experience');
    return result.rows;
}