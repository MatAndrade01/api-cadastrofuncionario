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


export const getPeopleById = async (id:number) => {
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