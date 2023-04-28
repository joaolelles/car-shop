import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain(car: ICar | null): Car | undefined {
    if (car) {
      return new Car(car);
    }
  }

  public async createNewCar(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async findCars() {
    const carODM = new CarODM();
    const foundCars = await carODM.findCars();
    const cars = foundCars.map((car) => 
      this.createCarDomain(car));
    return cars;
  }

  public async findCarById(id: string) {
    const carODM = new CarODM();
    const foundCar = await carODM.findCarById(id);
    return this.createCarDomain(foundCar);
  }
}