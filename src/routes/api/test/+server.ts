import pool from '$lib/server/db';

export async function GET() {
    try {
        const result = await pool.query('SELECT * FROM tags');
        return new Response(JSON.stringify(result.rows), {
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: String(error) }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}