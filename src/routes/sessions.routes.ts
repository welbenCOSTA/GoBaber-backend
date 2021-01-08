import { Router } from 'express';

import AutheticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new AutheticateUserService();

  const { user, token } = await authenticateUser.excute({
    email,
    password,
  });

  const User = {
    id: user.id,
    name: user.name,
    email: user.email,
    avatar: user.avatar,
    created_at: user.created_at,
    updated_at: user.updated_at,
  };

  return response.json({ User, token });
});

export default sessionsRouter;
