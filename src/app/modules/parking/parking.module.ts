import { NgModule } from '@angular/core';
import { FormParkingComponent } from '@app/shared/component/form-parking/form-parking.component';
import { GridItemComponent } from '@app/shared/component/grid-item/grid-item.component';
import { GridParkingComponent } from '@app/shared/component/grid-parking/grid-parking.component';
import { SharedModule } from '@shared/shared.module';
import { ParkingComponent } from './page/parking/parking.component';
import { ParkingRoutes } from './parking-routing.module';

@NgModule({
  declarations: [
    ParkingComponent,
    GridParkingComponent,
    GridItemComponent,
    FormParkingComponent,
  ],
  imports: [ParkingRoutes, SharedModule],
})
export class ParkingModule {}
