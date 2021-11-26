import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultComponent } from './modules/consult/page/consult/consult.component';
import { ParkingComponent } from './modules/parking/page/parking/parking.component';
const routes: Routes = [
  {
    path: 'parkingLot',
    component: ParkingComponent,
    loadChildren: () =>
      import('@modules/parking/parking.module').then(m => m.ParkingModule)
  },
  {
    path: 'consult',
    component: ConsultComponent,
    loadChildren: () =>
      import('@modules/consult/consult.module').then(m => m.ConsultModule)
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: 'parkingLot', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
