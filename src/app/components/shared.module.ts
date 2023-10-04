import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileDropComponent } from './file-drop/file-drop.component';
import { FileUploadModule } from 'ng2-file-upload';
import { SelectComponent } from './select/select.component';
import { NgxSelectModule } from 'ngx-select-ex';

@NgModule({
  declarations: [FileDropComponent, SelectComponent],
  imports: [CommonModule, FileUploadModule, NgxSelectModule],
  exports: [FileDropComponent, SelectComponent],
})
export class SharedModule {}
