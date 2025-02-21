import { PeopleModel } from '../model/people-model';
import * as Repositories from '../repositories/repository-people';
import * as HttpResponse from '../util/htttResponse';


export const getAllPeopleService = async () => {
    try{
        const result = await Repositories.findAllPeople();

        if (result && result.length > 0) {
            return HttpResponse.ok(result);
        }else{
            return HttpResponse.noContent();
        }
    }catch(error) {
        console.log('Erro ao buscar funcionários');
        throw new Error('Erro ao buscar funcionários');
    }
}


export const getPeopleByIdService = async (id:number) => {
    try{
        const result = await Repositories.findPeopleById(id);

        if(result) {
            return HttpResponse.ok(result);
        }else {
            return HttpResponse.noContent();
        }

    }catch (error) {
        console.error('Erro ao recuperar pessoa: ', error);
        throw new Error('Erro ao recuperar pessoa da base de dados');
    }
};

export const createPeopleService = async(people: PeopleModel) => {
    try {
        const result = await Repositories.insertPeolpe(people);

        if(result) {
            return HttpResponse.ok(result)
        }else{
            return HttpResponse.noContent()
        }
    }catch(error) {
        console.error('Erro ao inserir pessoa: ', error);
        throw new Error('Erro ao inserir pessoa na base de dados');
    }
}

export const updatePeopleService = async(id: number, update: PeopleModel) => {
    try {
        const result = await Repositories.findAndModifyPeople(id, update);
        if(result){
            return HttpResponse.ok(result);
        }else {
            return HttpResponse.noContent();
        }
    }catch (error) {
        console.error('Erro ao atualizar pessoa: ', error);
        throw new Error('Erro ao atualizar pessoa');
    }
}

export const deletePeopleService = async(id:number) => {
    try {
        await Repositories.deleteOnePeople(id);
        return HttpResponse.ok(id);
    
      }catch (error) {
        if (error instanceof Error) {
          console.error('Erro ao deletar pessoas:', error.message);
          throw new Error(error.message);
        } else {
          console.error('Erro desconhecido:', error);
          throw new Error('Erro desconhecido ao deletar pessoa.');
        }
      }
}