import mysql from 'mysql2';
import { loadEnv } from 'vite';

const env = loadEnv("development", process.cwd(), 'NODE');

const my_sql_config = JSON.parse(env.NODE_SQL_CONNECT);
const con = mysql.createPool(my_sql_config);

export default con;