import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-pins-modal',
  templateUrl: './pins-modal.component.html',
  styleUrls: ['./pins-modal.component.scss'],
})
export class PinsModalComponent implements OnInit {
  customers: any = [];
  pinData: any = [];
  pinsFormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(2)]),
    image: new FormControl('', Validators.required),
    collaborators: new FormControl('', Validators.required),
    privacy: new FormControl('', Validators.required),
  });
  uploader: FileUploader | undefined;
  hasBaseDropZoneOver = false;

  @Input() isClosed = false;
  @Output() onSubmit: EventEmitter<boolean> = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  open() {
    this.getCustomers();
  }

  getCustomers() {
    this.customers = [];
    this.customers = localStorage.getItem('customers')
      ? JSON.parse(localStorage.getItem('customers') || '')
      : [];
  }

  onSubmitForm() {
    this.pinData = localStorage.getItem('pinData')
      ? JSON.parse(localStorage.getItem('pinData') || '')
      : [];

    this.pinData.push(this.pinsFormGroup.value);
    localStorage.setItem('pinData', JSON.stringify(this.pinData));
    this.onSubmit.emit(true);
    this.reset();
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  close() {
    this.reset();
  }

  reset() {
    this.customers = [];
    this.pinsFormGroup.reset();
  }

  image(file?: any) {
    this.pinsFormGroup.controls.image.setValue(file);
  }

  selectedOptions(items: any) {
    if (items.controlName) {
      this.pinsFormGroup.get(items.controlName)?.setValue(items.value);
    }
  }
}
