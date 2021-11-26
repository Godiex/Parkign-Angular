import { Injectable } from '@angular/core';
import { CellVehicle, VehicleDto } from '../schema/celdaVechiculo';
import { ParkingService } from './parking.service';

@Injectable({
  providedIn: 'root'
})
export class CellsVehicleOperationService {

  constructor() { }

  cellsVehicle : CellVehicle[] = [];

  consultarCeldas(celdas: CellVehicle[]){
    this.cellsVehicle = celdas;

  }

  obtenerCeldas(){
    return this.cellsVehicle;
  }


  

  
}
