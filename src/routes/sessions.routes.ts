import { Router } from 'express';

import AutheticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new AutheticateUserService();

  const { user: userData, token } = await authenticateUser.excute({
    email,
    password,
  });

  const user = {
    id: userData.id,
    name: userData.name,
    email: userData.email,
    avatar: userData.avatar,
    created_at: userData.created_at,
    updated_at: userData.updated_at,
  };

  return response.json({ user, token });
});

export default sessionsRouter;
