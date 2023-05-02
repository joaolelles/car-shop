import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';
import { carMockInput, carMockOutput } from './mocks/carMock';

describe('Deveria cadastrar um carro', function () {
  it('Deveria cadastrar um carro com SUCESSO', async function () {
    // Arrange
    const carInput: ICar = carMockInput;
    const carOutput: Car = new Car(carMockOutput);
    sinon.stub(Model, 'create').resolves(carOutput);

    // Act
    const service = new CarService();
    const result = await service.createNewCar(carInput);

    // Assert
    expect(result).to.be.deep.equal(carOutput);
  });
  it('Deveria lançar uma exceção quando a key é inválida', async function () {
    // Arrange
    // Act
    // Assert
  });
});