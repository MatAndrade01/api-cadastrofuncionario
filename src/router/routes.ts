import { Router } from "express";
import * as PeopleController from "../controller/people-controller";

const asyncHandler = (fn: Function) => (req: any, res: any, next: any) =>
    Promise.resolve(fn(req, res, next)).catch(next);

const router = Router();

router.get("/getPeople", asyncHandler(PeopleController.getAllFuncionarios));
router.get("/getPeople/:id", asyncHandler(PeopleController.getPeopleById));
router.post("/createPeople", asyncHandler(PeopleController.creatPeople));
router.patch("/updatePeople/:id", asyncHandler(PeopleController.updatePeople));
router.delete("/deletePeople/:id", asyncHandler(PeopleController.deletePeople));
export default router;