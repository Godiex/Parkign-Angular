import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ControlMessagesComponent } from './component/control-messages/control-messages.component';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { ModalContentComponent } from './component/modal-content/modal-content.component';
import { ToastContainerComponent } from './component/toast-container/toast-container.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule
  ],
  declarations: [ControlMessagesComponent, SpinnerComponent, ModalContentComponent, ToastContainerComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    ControlMessagesComponent,
    SpinnerComponent,
  ]
})
export class SharedModule {
  constructor() {
  }
}
