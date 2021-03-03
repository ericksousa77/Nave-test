import { Router } from 'express';
import { NaverController } from './controllers/NaverControllers';
import { ProjectController } from './controllers/ProjectController';
import { ProjectNaverController } from './controllers/ProjectNaverController';




const router = Router();

const naverController = new NaverController();
const projectController = new ProjectController();
const projectNaverController = new ProjectNaverController();

router.post("/storenaver", naverController.store);
router.get("/indexnavers", naverController.index);
router.get("/showespecificnaver/:id",naverController.showespecific);

router.post("/storeproject", projectController.store);
router.get("/indexprojects", projectController.index);
router.get("/showespecificproject/:name",projectController.showespecific);


router.post("/storeprojectnaver", projectNaverController.execute);


export{ router };
