import * as express from 'express';

import userRoute from './user/user.route';

const router = express.Router();

router.use('/user', userRoute);

export default router;
