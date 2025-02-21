import { Router } from "express";
import * as PeopleController from "../controller/people-controller";

const asyncHandler = (fn: Function) => (req: any, res: any, next: any) =>
    Promise.resolve(fn(req, res, next)).catch(next);

const router = Router();

router.get("/getPeople", asyncHandler(PeopleController.getAllFuncionarios));
router.get("/getPeople/:id", asyncHandler(PeopleController.getPeopleById));
router.post("/createPeople", asyncHandler(PeopleController.creatPeople));
export default router;