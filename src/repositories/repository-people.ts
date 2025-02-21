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

export const findAndModifyPeople = async(id:number, update: PeopleModel): Promise<PeopleModel> => {
    try {
        await client.query(
            `UPDATE people SET name = ?, surname = ?, number_phone = ?, cpf = ?, rg = ?, uf = ?, zipcode = ?, address = ?,
             house_number = ?, commercial_relationship = ? WHERE id = ?
            `,
            [update.name, update.surname, update.number_phone, update.cpf, update.rg, update.uf, update.zipcode, 
                update.address, update.house_number, update.commercial_relationship, id
            ]
        );

        const [result] = await client.query('SELECT * FROM people WHERE id = ?', [id]);

        if(Array.isArray(result) && result.length > 0) {
            return result[0] as PeopleModel;
        }else {
            throw new Error('Pessoa não encontrado');
        }
    }catch (error: unknown) {
        if (error instanceof Error) {
          console.error('Erro ao atualizar produto: ', error.message);
          throw new Error('Erro ao atualizar produto no banco de dados');
        }
        console.error('Erro desconhecido ao atualizar produto: ', error);
        throw new Error('Erro desconhecido ao atualizar produto');
    }
}