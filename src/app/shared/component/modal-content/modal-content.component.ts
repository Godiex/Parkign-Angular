import { Component, Input, OnInit } from '@angular/core';
import { ParkingInvoiceDetail } from '@app/data/schema/celdaVechiculo';
import { BehaviourSubjectParking } from '@app/data/service/behaviour.subject.parking';
import { ParkingService } from '@app/data/service/parking.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css'],
})
export class ModalContentComponent implements OnInit {

  @Input() id: number;
  fechaActual: number;
  parkingInvoiceDetail: ParkingInvoiceDetail;

  constructor(
    public activeModal: NgbActiveModal,
    private parkingService: ParkingService,
    private behaviourSubjectParking: BehaviourSubjectParking
  ) {}

  ngOnInit(): void {
    this.fechaActual = Date.now();
    this.parkingService.getParkingDetail(this.id).subscribe((x) => {
      this.parkingInvoiceDetail = x;
    });
  }

  changeStateCell(): void {
    this.parkingService.patch(this.id).subscribe(() => {
      this.behaviourSubjectParking.updateState(this.id);
      alert('Vehiculo sacado del parqueadero con exito');
      this.activeModal.close();
    });
  }
}
