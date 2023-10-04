import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerModalComponent } from './customer-modal.component';
import { NgxSelectModule } from 'ngx-select-ex';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  declarations: [CustomerModalComponent],
  imports: [CommonModule, NgxSelectModule, ReactiveFormsModule, SharedModule],
  exports: [CustomerModalComponent],
})
export class CustomerModalModule {}
