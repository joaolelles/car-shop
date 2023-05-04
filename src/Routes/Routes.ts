import { Router } from 'express';
import CarController from '../Controllers/CarController';
import MotorcycleController from '../Controllers/MotorcycleController';

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

routes.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).findMotorcycleById(),
);
routes.put(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).updateMotorcycleById(),
);
routes.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);
routes.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).findMotorcycle(),
);

export default routes;