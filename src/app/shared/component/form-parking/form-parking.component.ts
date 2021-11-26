import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CellVehicleDto, VehicleDto } from '@app/data/schema/celdaVechiculo';
import { ParkingService } from '@app/data/service/parking.service';
import { ToastService } from '@app/shared/services/toast.service';

@Component({
  selector: 'app-form-parking',
  templateUrl: './form-parking.component.html',
  styleUrls: ['./form-parking.component.css']
})
export class FormParkingComponent implements OnInit {

  @Output() newItemEvent  = new EventEmitter<CellVehicleDto[]>();
  submitted = false;
  registerParkingForm: FormGroup;
  cellVehicle: VehicleDto;


  constructor(
    private parkingService: ParkingService,
    public toastService: ToastService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    
    this.registerParkingForm = this.formBuilder.group({
      plaque: ['', Validators.required],
      cylinders: [0, Validators.required],
      type: ['', Validators.required]
    });
    
  }

  get f() {
    return this.registerParkingForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerParkingForm.invalid) {
      return;
    }
    this.add();
  }

  add() {
    this.cellVehicle = this.registerParkingForm.value;
    this.parkingService.post(this.cellVehicle).subscribe(
      (data) => {
        this.parkingService.get().subscribe((x) => {
          this.actualizarCeldas(x);
          alert('Vehiculo ingresado con exito');
        });
      }, (error) =>{console.error(error)}
    );
    this.onReset();
  }

  actualizarCeldas(celdas:CellVehicleDto[]){
    this.newItemEvent.emit(celdas);
  }

  onReset() {
    this.submitted = false;
    this.registerParkingForm.reset();
  }

  cambiarEstadoCeldas(id:number){
    this.parkingService.patch(id).subscribe(
      () => {
        this.parkingService.get().subscribe((x) => {
          this.actualizarCeldas(x);
        });
      }
    );
  }

}
