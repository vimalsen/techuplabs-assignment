import { Component, OnInit } from '@angular/core';

declare var window: any;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  customerModal: any;
  pinsModal: any;
  pinsData: any[] = [];

  ngOnInit(): void {
    this.getPinData();

    this.customerModal = new window.bootstrap.Modal(
      document.getElementById('addCustomersModal')
    );
    this.pinsModal = new window.bootstrap.Modal(
      document.getElementById('addPinsModal')
    );
  }

  showAddCustomerModal() {
    this.customerModal.show();
  }

  showAddPinModal() {
    this.pinsModal.show();
  }

  closeModal() {
    this.customerModal.hide();
    this.pinsModal.hide();
    this.pinsData = [];
    this.getPinData();
  }

  getPinData() {
    this.pinsData = localStorage.getItem('pinData')
      ? JSON.parse(localStorage.getItem('pinData') || '')
      : [];
  }
}
