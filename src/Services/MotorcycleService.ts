import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private createCarDomain(motorcycle: IMotorcycle | null): Motorcycle | undefined {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
  }

  public async createNewMotorcycle(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create(motorcycle);
    return this.createCarDomain(newMotorcycle);
  }
}