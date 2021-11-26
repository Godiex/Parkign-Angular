import { Component, Input, OnInit } from '@angular/core';
import { CellVehicleDto } from '@app/data/schema/celdaVechiculo';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.css']
})
export class GridItemComponent implements OnInit {

  @Input() item : CellVehicleDto;


  constructor(private modalService: NgbModal) { }

  open(): void {
    if(this.item.busy){
      const modalRef = this.modalService.open(ModalContentComponent);
      modalRef.componentInstance.id = this.item.id;
    }
  }
  
  ngOnInit(): void {
   
  }

}
