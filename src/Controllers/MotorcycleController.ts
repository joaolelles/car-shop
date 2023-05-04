import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMotorcycle = await this.service.createNewMotorcycle(motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async findMotorcycle() {
    const foundMotorcycle = await this.service.findMotorcycle();
    return this.res.status(200).json(foundMotorcycle);
  }

  public async findMotorcycleById() {
    const { id } = this.req.params;
    try {
      const motorcycleFound = await this.service.findMotorcycleById(id);
      if (!motorcycleFound) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }
      return this.res.status(200).json(motorcycleFound);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateMotorcycleById() {
    const motorcycle: IMotorcycle = {
      ...this.req.body,
    };
    const { id } = this.req.params;
    try {
      const motorcycleFound = await this.service.updateMotorcycleById(id, motorcycle);
      if (!motorcycleFound) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }
      return this.res.status(200).json(motorcycleFound);
    } catch (error) {
      this.next(error);
    }
  }
}