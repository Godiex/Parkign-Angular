import { Routes, RouterModule } from '@angular/router';
import { ParkingComponent } from './page/parking/parking.component';

const routes: Routes = [
  {
    path: 'parkingLot',
    component: ParkingComponent
  }
];

export const ParkingRoutes = RouterModule.forChild(routes);
