import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | undefined {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
  }

  public async createNewMotorcycle(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async findMotorcycle() {
    const motorcycleODM = new MotorcycleODM();
    const foundMotorcycle = await motorcycleODM.findMotorcycle();
    const motorcycles = foundMotorcycle.map((motorcycle) => 
      this.createMotorcycleDomain(motorcycle));
    return motorcycles;
  }

  public async findMotorcycleById(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const foundMotorcycle = await motorcycleODM.findMotorcycleById(id);
    return this.createMotorcycleDomain(foundMotorcycle);
  }

  public async updateMotorcycleById(id: string, motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const foundMotorcycle = await motorcycleODM.updateMotorcycleById(id, motorcycle);
    return this.createMotorcycleDomain(foundMotorcycle);
  }

  public async deleteMotorcycleById(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const foundMotorcycle = await motorcycleODM.deleteMotorcycleById(id);
    return this.createMotorcycleDomain(foundMotorcycle);
  }
}