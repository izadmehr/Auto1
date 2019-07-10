export interface ICar {
    stockNumber: number,
    manufacturerName: string,
    modelName: string,
    color: string,
    mileage: {
        number: number,
        unit: string
    },
    fuelType: string,
    pictureUrl: string
}

export interface IManufacturer {
    name: string;
    models: Array<{
        name: string;
        uuid: string
    }>;
    uuid: string;
}