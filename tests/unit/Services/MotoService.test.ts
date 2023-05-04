import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import Motorcycle from '../../../src/Domains/Motorcycle';
import { motorcycleMockInput, motorcycleMockOutput, 
  motorcycleGetMockOutput, motorcycleGetByIdMockOutput,
  motorcyclePutByIdMockOutput } from './mocks/motorcycleMock';

describe('Testando a service Motorcycle', function () {
  it('Deveria cadastrar uma moto com SUCESSO', async function () {
    // Arrange
    const motorcycleInput: IMotorcycle = motorcycleMockInput;
    const motorcycleOutput: Motorcycle = new Motorcycle(motorcycleMockOutput as IMotorcycle);
    sinon.stub(Model, 'create').resolves(motorcycleOutput);

    // Act
    const service = new MotorcycleService();
    const result = await service.createNewMotorcycle(motorcycleInput);

    // Assert
    expect(result).to.be.deep.equal(motorcycleOutput);
    sinon.restore();
  });
  it('Deveria listar as motos com SUCESSO', async function () {
    // Arrange    
    sinon.stub(Model, 'find').resolves(motorcycleGetMockOutput);

    // Act
    const service = new MotorcycleService();
    const result = await service.findMotorcycle();

    // Assert
    expect(result).to.be.deep.equal(motorcycleGetMockOutput);
    sinon.restore();
  });
  it('Deveria listar uma moto com SUCESSO', async function () {
    // Arrange    
    sinon.stub(Model, 'findById').resolves(motorcycleGetByIdMockOutput);

    // Act
    const service = new MotorcycleService();
    const result = await service.findMotorcycleById('634852326b35b59438fbea2f');

    // Assert
    expect(result).to.be.deep.equal(motorcycleGetByIdMockOutput);
    sinon.restore();
  });
  it('Deveria atualizar uma moto com SUCESSO', async function () {
    // Arrange    
    const motorcycleInput: IMotorcycle = motorcycleMockInput;
    sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcyclePutByIdMockOutput);

    // Act
    const service = new MotorcycleService();
    const result = await service
      .updateMotorcycleById('634852326b35b59438fbea2f', motorcycleInput);

    // Assert
    expect(result).to.be.deep.equal(motorcyclePutByIdMockOutput);
    sinon.restore();
  });
});