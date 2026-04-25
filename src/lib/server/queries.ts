import pool from '$lib/server/db';

export async function getTags() {
    const result = await pool.query('SELECT * FROM tags');
    return result.rows;
}

export async function getProjects() {
    const result = await pool.query(`
    SELECT * FROM projects ORDER BY display_order
  `);
    return result.rows;
}

export async function getProjectTags() {
    const result = await pool.query(`
    SELECT pt.project_id, t.id, t.name 
    FROM project_tags pt
    JOIN tags t ON pt.tag_id = t.id
  `);
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