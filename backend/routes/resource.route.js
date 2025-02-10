import express from 'express';

import {
  registerResource
} from '../controllers/resource.controller.js'
import { register } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/register', registerResource);

export default router;