import { Component, OnInit } from '@angular/core';
import { ParkingInvoiceMade } from '@app/data/schema/celdaVechiculo';
import { ParkingService } from '@app/data/service/parking.service';


@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css'],
})
export class ConsultComponent implements OnInit {

  parkingInvoiceMade : ParkingInvoiceMade[] = [];

  page:number = 1;
  pageSize :number = 4;
  collectionSize : number = 0;

  constructor(private parkingService: ParkingService) { 
    this.refreshCountries();
  }

  refreshCountries() {
    this.parkingInvoiceMade = this.parkingInvoiceMade
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  ngOnInit(): void {
    this.parkingService.getParkingInvoiceMade().subscribe((x) => {
      this.parkingInvoiceMade = x;
    });
    this.collectionSize = this.parkingInvoiceMade.length;
  }

}
