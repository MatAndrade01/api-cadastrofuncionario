import { error } from "console";
import { HttpResponse } from "../model/http-response-model"

export const ok = async(data:any): Promise<HttpResponse> => { 
    return{
        statusCode: 200,
        body: data
    }
};

export const okDelete = async():Promise<HttpResponse> => {
    return {
        statusCode: 200,
        body: {
            menssage: "Delete"
        }
    }
};

export const okUpdate = async():Promise<HttpResponse> => {
    return {
        statusCode: 200,
        body: {
            message: "Update!"
        }
    }
};

export const create = async(): Promise<HttpResponse> => {
    return {
        statusCode: 201,
        body: {
            menssage: "successfully "
        }
    }
};

export const badRequest = async(error: Error): Promise<HttpResponse> => {
    return{
        statusCode: 400,
        body: error,
    }
}

export const noContent = async(): Promise<HttpResponse> => { 
    return{
        statusCode: 204,
        body: null
    }
};