import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControlName } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-file-drop',
  templateUrl: './file-drop.component.html',
  styleUrls: ['./file-drop.component.scss'],
})
export class FileDropComponent {
  @Input() controlName: any;
  @Output() getImage = new EventEmitter();

  selectFile(event: any) {
    if (!event.target.files[0] || event.target.files[0].length === 0) {
      return;
    }

    let mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) === null) return;
    let reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event) => {
      this.getImage.emit(reader.result);
    };
  }
}
