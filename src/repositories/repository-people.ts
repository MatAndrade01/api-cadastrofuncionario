import client from "../config/datanase";

export const findAllPeople = async () => {
    const [result] = await client.query('SELECT * FROM people');

    if(Array.isArray(result)) {
        return result;
    }else {
        console.log('Erro ao buscar Pessoa');
    }
}