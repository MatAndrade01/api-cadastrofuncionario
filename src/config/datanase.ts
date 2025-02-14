import mysql from 'mysql2/promise';
import 'dotenv/config';

const client = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

const checkConnection = async() => {
    try{
        const conenection = await client.getConnection();
        console.log('Conecxão feita com Sucesso!👨‍💻')
        conenection.release();
    }catch(error) {
        if(error instanceof Error) {
            console.error('Erro ao conenctar ao banco de dados:', error.message);
        }else {
            console.error('Erro desconhecido ao conectar banco de dados!')
        }
    }
}

checkConnection();

export default client;