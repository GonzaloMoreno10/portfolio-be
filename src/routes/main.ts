import { Router } from 'express';
import { usersRoute, projectRoute, authRoute } from '.';

const router = Router();

router.use('/projects', projectRoute);

router.use('/users', usersRoute);

router.use('/auth', authRoute);

export const mainRouter = router;
