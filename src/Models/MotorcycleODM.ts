import {
  Schema, UpdateQuery, isValidObjectId,
} from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';
  
export default class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true, default: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(schema, 'motorcycle');
  }
  
  public async create(motorcycle: IMotorcycle): Promise<IMotorcycle> {
    return this.model.create({ ...motorcycle });
  }

  public async findMotorcycle(): Promise<IMotorcycle[]> {
    return this.model.find();
  }

  public async findMotorcycleById(id: string): Promise<IMotorcycle | null> {
    if (!isValidObjectId(id)) throw Error('Invalid mongo id');
    return this.model.findById(id);
  }

  public async updateMotorcycleById(id: string, obj: IMotorcycle): Promise<IMotorcycle | null> {
    if (!isValidObjectId(id)) throw Error('Invalid mongo id');
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...obj } as UpdateQuery<IMotorcycle>,
      { new: true },
    );
  }
}