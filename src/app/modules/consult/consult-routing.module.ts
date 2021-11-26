import { Routes, RouterModule } from '@angular/router';
import { ConsultComponent } from './page/consult/consult.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultComponent
  }
];

export const ConsultRoutes = RouterModule.forChild(routes);