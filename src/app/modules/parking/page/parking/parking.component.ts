import { Component, OnInit } from '@angular/core';
import { CellVehicleDto } from '@app/data/schema/celdaVechiculo';
import { BehaviourSubjectParking } from '@app/data/service/behaviour.subject.parking';
import { ParkingService } from '@app/data/service/parking.service';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {

  cellVehicles : CellVehicleDto[] = [];

  constructor(private parkingService: ParkingService,
     private behaviourSubjectParking: BehaviourSubjectParking) { 

  }

  ngOnInit(): void {
    this.getCells();
    this.behaviourSubjectParking.stateParking.subscribe((id)=>{
      this.changeStateCell(id);
    });
    
  }

  private changeStateCell(id: number) {
    if (id != 0) {
      let index = this.cellVehicles.findIndex(c => c.id === id);
      this.cellVehicles[index].busy = false;
      let a = this.cellVehicles;
    }
    this.getCells();
  }

  private getCells(): void {
    this.parkingService.get().subscribe((x) => {
      this.cellVehicles = x;
    });
  }

  updateCells(respuesta:CellVehicleDto[]): void {
    this.cellVehicles = respuesta;
   }

}
