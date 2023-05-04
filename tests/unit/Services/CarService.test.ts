import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';
import { carPostMockInput, carPostMockOutput, carGetMockOutput,
  carGetByIdMockOutput, carPutByIdMockOutput } from './mocks/carMock';

describe('Testando a service Car', function () {
  it('Deveria cadastrar um carro com SUCESSO', async function () {
    // Arrange
    const carInput: ICar = carPostMockInput;
    const carOutput: Car = new Car(carPostMockOutput);
    sinon.stub(Model, 'create').resolves(carOutput);

    // Act
    const service = new CarService();
    const result = await service.createNewCar(carInput);

    // Assert
    expect(result).to.be.deep.equal(carOutput);
    sinon.restore();
  });
  it('Deveria listar os carros com SUCESSO', async function () {
    // Arrange    
    sinon.stub(Model, 'find').resolves(carGetMockOutput);

    // Act
    const service = new CarService();
    const result = await service.findCars();

    // Assert
    expect(result).to.be.deep.equal(carGetMockOutput);
    sinon.restore();
  });
  it('Deveria listar um carro com SUCESSO', async function () {
    // Arrange    
    sinon.stub(Model, 'findById').resolves(carGetByIdMockOutput);

    // Act
    const service = new CarService();
    const result = await service.findCarById('634852326b35b59438fbea2f');

    // Assert
    expect(result).to.be.deep.equal(carGetByIdMockOutput);
    sinon.restore();
  });
  it('Deveria atualizar um carro com SUCESSO', async function () {
    // Arrange    
    const carInput: ICar = carPostMockInput;
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carPutByIdMockOutput);

    // Act
    const service = new CarService();
    const result = await service
      .updateCarById('634852326b35b59438fbea2f', carInput);

    // Assert
    expect(result).to.be.deep.equal(carPutByIdMockOutput);
    sinon.restore();
  });
});