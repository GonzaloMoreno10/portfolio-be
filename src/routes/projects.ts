import { Router } from 'express';
import { projectController } from '../controllers/project';

const router = Router();

router.get('/:id?', projectController.findAllProjects);

router.post('/', projectController.createProject);

router.delete('/:id', projectController.deleteProject);

router.put('/:id', projectController.updateProject);

export const projectRoute = router;
