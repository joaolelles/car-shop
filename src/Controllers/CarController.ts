import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

const carNotFound = 'Car not found';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.createNewCar(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async findCars() {
    const foundCars = await this.service.findCars();
    return this.res.status(200).json(foundCars);
  }

  public async findCarById() {
    const { id } = this.req.params;
    try {
      const carFound = await this.service.findCarById(id);
      if (!carFound) {
        return this.res.status(404).json({ message: carNotFound });
      }
      return this.res.status(200).json(carFound);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateCarById() {
    const car: ICar = {
      ...this.req.body,
    };
    const { id } = this.req.params;
    try {
      const carFound = await this.service.updateCarById(id, car);
      if (!carFound) {
        return this.res.status(404).json({ message: carNotFound });
      }
      return this.res.status(200).json(carFound);
    } catch (error) {
      this.next(error);
    }
  }

  public async deleteCarById() {
    const { id } = this.req.params;
    try {
      const carFound = await this.service.deleteCarById(id);
      if (!carFound) {
        return this.res.status(404).json({ message: carNotFound });
      }
      return this.res.status(200).json(carFound);
    } catch (error) {
      this.next(error);
    }
  }
}