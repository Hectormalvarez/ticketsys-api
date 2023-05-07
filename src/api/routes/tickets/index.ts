import { Router } from 'express';
import { create, list } from './tickets';

const ticketRouter = Router();

// TODO: Need to review how to properly name endpoints
ticketRouter.post('/', create);
ticketRouter.get('/', list);

export default ticketRouter;
