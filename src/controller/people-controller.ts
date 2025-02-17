import * as Service from '../service/service-people';
import { Request, Response } from 'express';

export const getAllFuncionarios =  async(_req: Request, res: Response) => {
    try {
        const httpResponse = await Service.getAllPeopleService();
        return res.status(httpResponse.statusCode).json(httpResponse.body);
    }catch (error){
        if (error instanceof Error) {
            console.error('Erro ao buscar usuarios:', error.message);
            return res.status(500).json({
              message: error.message || 'Erro desconhecido ao recuperar usuarios.'
            });
        }
    }
};