import { Component, Input, OnInit } from '@angular/core';
import { CellVehicleDto } from '@app/data/schema/celdaVechiculo';
import { CellsVehicleOperationService } from '@app/data/service/cells-vehicle-operation.service';
import { ParkingService } from '@app/data/service/parking.service';

@Component({
  selector: 'app-grid-parking',
  templateUrl: './grid-parking.component.html',
  styleUrls: ['./grid-parking.component.css'],
  providers:[CellsVehicleOperationService]
})
export class GridParkingComponent implements OnInit {

  @Input() celdasVehiculos : CellVehicleDto[] = [];

  cellVehicles : CellVehicleDto[];

  constructor(private parkingService: ParkingService) { }

  ngOnChanges(): void {
    this.cellVehicles = this.celdasVehiculos;
  }

  ngOnInit(): void {
    this.parkingService.get().subscribe((x) => {
      this.cellVehicles = x;
    });
  }

}
