import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import Motorcycle from '../../../src/Domains/Motorcycle';
import { motorcycleMockInput, motorcycleMockOutput } from './mocks/motorcycleMock';

describe('Deveria cadastrar uma moto', function () {
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
  });
});