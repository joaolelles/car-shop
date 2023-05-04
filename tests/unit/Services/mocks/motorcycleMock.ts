import IMotorcycle from '../../../../src/Interfaces/IMotorcycle';

const modelHornet = 'Honda Cb 600f Hornet';

export const motorcycleMockInput = {
  model: modelHornet,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
} as IMotorcycle;

export const motorcycleMockOutput = {
  id: '6348513f34c397abcad040b2',
  model: modelHornet,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

export const motorcycleGetMockOutput = [
  {
    id: '634852326b35b59438fbea2f',
    model: modelHornet,
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Honda Cbr 1000rr',
    year: 2011,
    color: 'Orange',
    status: true,
    buyValue: 59.900,
    category: 'Street',
    engineCapacity: 1000,
  },
];

export const motorcycleGetByIdMockOutput = {
  id: '634852326b35b59438fbea2f',
  model: modelHornet,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};