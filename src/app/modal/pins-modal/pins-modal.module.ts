import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinsModalComponent } from './pins-modal.component';
import { NgxSelectModule } from 'ngx-select-ex';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  declarations: [PinsModalComponent],
  imports: [
    CommonModule,
    NgxSelectModule,
    ReactiveFormsModule,
    FileUploadModule,
    FormsModule,
    SharedModule,
  ],
  exports: [PinsModalComponent],
})
export class PinsModalModule {}
