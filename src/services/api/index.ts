// a library to wrap and simplify api calls
import apisauce, { ApiResponse } from 'apisauce';

import { CarType } from '../../stores/cars';
import { createServer, teardownServer } from '../../../server';

export interface ApiType {
  getCars: (
    page: number,
    sort: string,
    manufacturer: string,
    color: string
  ) => Promise<ApiResponse<CarType[]>>;
  getColors: () => Promise<ApiResponse<string[]>>;
  getManufacturers: () => Promise<ApiResponse<string[]>>;
}
const create = (baseURL: string = ''): ApiType => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 30000
  });

  api.addRequestTransform((): void => createServer());
  api.addResponseTransform((): void => teardownServer());

  const getCars = (
    page = 1,
    sort = '',
    manufacturer = '',
    color = ''
  ): Promise<ApiResponse<CarType[]>> =>
    api.get(
      `/api/cars?page=${page}&sort=${sort}&manufacturer=${manufacturer}&color=${color}`
    );

  const getColors = (): Promise<ApiResponse<string[]>> =>
    api.get('/api/colors');
  const getManufacturers = (): Promise<ApiResponse<string[]>> =>
    api.get('/api/manufacturers');

  return {
    getCars,
    getColors,
    getManufacturers
  };
};

export default {
  create
};
