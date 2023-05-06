import { Router } from 'express';
import CarController from '../Controllers/CarController';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();

const motorcycleIdRoute = '/motorcycles/:id';
const carIdRoute = '/cars/:id';

routes.get(
  carIdRoute,
  (req, res, next) => new CarController(req, res, next).findCarById(),
);
routes.put(
  carIdRoute,
  (req, res, next) => new CarController(req, res, next).updateCarById(),
);
routes.delete(
  carIdRoute,
  (req, res, next) => new CarController(req, res, next).deleteCarById(),
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
  motorcycleIdRoute,
  (req, res, next) => new MotorcycleController(req, res, next).findMotorcycleById(),
);
routes.put(
  motorcycleIdRoute,
  (req, res, next) => new MotorcycleController(req, res, next).updateMotorcycleById(),
);
routes.delete(
  motorcycleIdRoute,
  (req, res, next) => new MotorcycleController(req, res, next).deleteMotorcycleById(),
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