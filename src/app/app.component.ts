import { Component, OnInit } from '@angular/core';
import data from '../assets/sample-data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    localStorage.setItem('pinData', JSON.stringify(data.pin));
    localStorage.setItem('customers', JSON.stringify(data.customers));
  }
}
