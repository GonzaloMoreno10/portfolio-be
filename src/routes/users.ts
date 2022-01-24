import { Router } from 'express';
import { usersController } from '../controllers/users';

const router = Router();

router.post('/', usersController.createUser);

router.get('/:id?', usersController.getUsers);

router.put('/:id', usersController.updateUsers);

export const usersRoute = router;
