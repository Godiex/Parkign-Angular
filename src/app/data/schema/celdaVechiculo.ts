

  export interface CellVehicle {
    id: number;
    number: number;
    busy: boolean;
    type: string;
  }

  export interface CellVehicleDto {
    id: number;
    number: number;
    busy: boolean;
    type: string;
    plaque: string;
  }
  
  export interface CellDto {
    id: number;
    number: number;
    busy: boolean;
    type: string;
  }
  
  export interface VehicleDto {

    plaque: string;
    cylinders: number;
    type: number;
  }

  export interface ParkingInvoiceDetail {
    surchangeValue: number;
    subtotal:number;
    totalValue:number;
    entryDate:Date;
    vehicleDto:VehicleDto
  }
  
  export interface ParkingInvoiceMade {
    totalValue:number;
    plaque:string;
    type:string;
    entryDate: Date;
    deapertureDate: Date;
  }
  