import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultComponent } from './page/consult/consult.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ConsultComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    
  ]
})
export class ConsultModule { }
