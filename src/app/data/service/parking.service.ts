import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HandleHttpErrorService } from '@app/core/@base/handle-http-error.service';
import { CellVehicle, CellVehicleDto, ParkingInvoiceDetail, ParkingInvoiceMade, VehicleDto } from '../schema/celdaVechiculo';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '@env';
import { ObserveOnSubscriber } from 'rxjs/internal/operators/observeOn';

@Injectable({
  providedIn: 'root',
})
export class ParkingService {
  baseUrl: string;
  constructor(
    private http: HttpClient,
    private handleErrorService: HandleHttpErrorService
  ) {}

  get(): Observable<CellVehicleDto[]> {
    return this.http
      .get<CellVehicleDto[]>(environment.API_URL + 'api/CellVehicle')
      .pipe(
        tap((_) =>
          this.handleErrorService.handleError<CellVehicleDto[]>(
            'Consulta vehiculos',
            null
          )
        )
      );
  }

  getParkingDetail(id:number): Observable<ParkingInvoiceDetail> {
    return this.http
      .get<ParkingInvoiceDetail>(environment.API_URL + `api/CellVehicle/PakingDetail${id}`)
      .pipe(
        tap((_) =>
          this.handleErrorService.handleError<CellVehicle[]>(
            'Consulta detalles',
            null
          )
        )
      );
  }

  getParkingInvoiceMade(): Observable<ParkingInvoiceMade[]> {
    return this.http
      .get<ParkingInvoiceMade[]>(environment.API_URL + `api/CellVehicle/ParkingInvoiceMade`)
      .pipe(
        tap((_) =>
          this.handleErrorService.handleError<CellVehicle[]>(
            'Consulta detalles',
            null
          )
        )
      );
  }

  post(vehicleDto: VehicleDto):Observable<any> {
    return this.http
      .post<any>(environment.API_URL + 'api/CellVehicle', vehicleDto)
      .pipe(
        tap((_) => this.handleErrorService.log('datos enviados')),
        catchError(
          this.handleErrorService.handleError<any>(
            'Registrar vehiculo',
            null
          )
        )
      );
  }

  patch(id:number):Observable<any>{
      return this.http
      .patch<any>(environment.API_URL + `api/CellVehicle/${id}`,null)
      .pipe(
        tap((_) => this.handleErrorService.log('datos enviados')),
        catchError(
          this.handleErrorService.handleError<VehicleDto>(
            'Actualizar vehiculo',
            null
          )
        )
      );
  }
}
