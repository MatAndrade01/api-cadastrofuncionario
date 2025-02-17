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
