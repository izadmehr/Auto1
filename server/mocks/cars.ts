import * as faker from 'faker';
import nanoid from 'nanoid';

import { colors } from './colors';
import { manufacturers } from './manufacturers';
import { ICar, IManufacturer } from '../types';
import { images } from './images';

export const cars: ICar[] = [];

for (let i = 0; i < 1000; i++) {
  const stockNumber = i;
  const manufacturer: IManufacturer = faker.random.arrayElement(manufacturers);
  const model = faker.random.arrayElement(manufacturer.models);
  const color: string = faker.random.arrayElement(colors);
  const mileageNumber = faker.random.number();
  const fuelType = faker.random.arrayElement(['Petrol', 'Diesel']);

  cars.push({
    uuid: nanoid(),
    stockNumber,
    manufacturerName: manufacturer.name,
    modelName: model.name,
    color,
    mileage: {
      number: mileageNumber,
      unit: 'km'
    },
    fuelType,
    pictureUrl: faker.random.arrayElement(images)
  });
}
