import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CommonService } from '../../services/common.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer-modal',
  templateUrl: './customer-modal.component.html',
  styleUrls: ['./customer-modal.component.scss'],
})
export class CustomerModalComponent implements OnInit, OnDestroy {
  constructor(private commonService: CommonService) {}

  result: any[] = [];
  customers: any[] = [];
  region: string[] = [];
  countries: string[] = [];
  customerFormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
    ]),
    region: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
  });
  subscription = new Subscription();
  @Input() isClosed = false;
  @Output() onSubmit: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
    this.getCountries();

    this.customerFormGroup.controls.region.valueChanges.subscribe((change) => {
      this.countries = [];
      if (change?.length) {
        Object.keys(this.result).forEach((data: any) => {
          if (this.result[data].region === change[0])
            this.countries.push(this.result[data].country);
        });
      }
    });
  }

  open() {
    this.getCountries();
  }

  private getCountries() {
    this.subscription = this.commonService.getCountriesData().subscribe(
      (resp: any) => {
        this.result = resp.data;
        Object.keys(resp.data).forEach((data) => {
          if (this.region.indexOf(resp.data[data].region) === -1)
            this.region.push(resp.data[data].region);
        });
      },
      (err) => {
        console.error('Unable to fetch counties. Err: ', err);
      }
    );
  }

  selectedOptions(items: any) {
    if (items.controlName) {
      this.customerFormGroup.get(items.controlName)?.setValue(items.value);
    }
  }

  onSubmitForm() {
    this.customers = localStorage.getItem('customers')
      ? JSON.parse(localStorage.getItem('customers') || '')
      : [];

    this.customers.push(this.customerFormGroup.value);

    localStorage.setItem('customers', JSON.stringify(this.customers));
    this.onSubmit.emit(true);
    this.resetForm();
  }

  ngOnDestroy() {
    this.resetForm();
  }

  close() {
    this.resetForm();
  }

  resetForm() {
    this.region = [];
    this.customerFormGroup.reset();
  }
}
