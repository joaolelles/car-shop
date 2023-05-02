import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).findCarById(),
);
routes.put(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).updateCarById(),
);
routes.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).create(),
);
routes.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).findCars(),
);

export default routes;