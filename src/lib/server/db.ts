import { DATABASE_URL } from '$env/static/private';
import pg from 'pg'

const pool = new pg.Pool({
    connectionString: DATABASE_URL,
});

export default pool;