import { error } from "console";
import client from "../config/datanase";
import { PeopleModel } from "../model/people-model";

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

export const insertPeolpe = async (people: PeopleModel) => {
    try {
        const query = `
        INSERT INTO people (name, surname, number_phone, cpf, rg, uf, zipcode, address, house_number, commercial_relationship)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const values = [
            people.name,
            people.surname,
            people.number_phone,
            people.cpf,
            people.rg,
            people.uf,
            people.zipcode,
            people.address,
            people.house_number,
            people.commercial_relationship
        ];

        const [result] = await client.query(query, values);

        if('insertId' in result) {
            return result.insertId;
        } else {
            console.log("Erro ao inserir pessoa")
        }
    }catch(error) {
        console.error('Erro ao inserir pessoa: ', error);
        throw new Error('Erro ao inserir pessoa no banco de dados');
    }
}