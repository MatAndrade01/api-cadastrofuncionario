import client from "../config/datanase";

export const findAllPeople = async () => {
    const [result] = await client.query('SELECT * FROM people');

    if(Array.isArray(result)) {
        return result;
    }else {
        console.log('Erro ao buscar Pessoa');
    }
};

export const findPeopleById = async (id: number) => {
    const [result] = await client.query('SELECT * FROM people WHERE id = ?', [id]);

    if (Array.isArray(result) && result.length > 0) {
        return result[0];
    } else {
        console.log('Nenhuma pessoa ecnotrada')
    }
};