import { Router } from "express";
import * as FuncionarioController from "../controller/people-controller";

const asyncHandler = (fn: Function) => (req: any, res: any, next: any) =>
    Promise.resolve(fn(req, res, next)).catch(next);

const router = Router();

router.get("/getPeople", asyncHandler(FuncionarioController.getAllFuncionarios));

export default router;