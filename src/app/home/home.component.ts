import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
<section>
  <form>
    <input type="text" placeholder="Filter by city">
    <button class="primary" type="button">Search</button>
  </form>
</section>
<section class="results">
<app-housing-location 
*ngFor="let housingLocation of housingLocationList"
[housingLocation]="housingLocation" />
  `,

  styleUrls: ['home.component.css'],
  imports: [HousingLocationComponent, CommonModule],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [
    {
        "id": 0,
        "name": "Acme Fresh Start Housing",
        "city": "Chicago",
        "state": "IL",
        "photo": "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        "availableUnits": 4,
        "wifi": true,
        "laundry": true
    },
    {
        "id": 1,
        "name": "A113 Transitional Housing",
        "city": "Santa Monica",
        "state": "CA",
        "photo": "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80",
        "availableUnits": 0,
        "wifi": false,
        "laundry": true
    },
    {
        "id": 2,
        "name": "Warm Beds Housing Support",
        "city": "Juneau",
        "state": "AK",
        "photo": "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        "availableUnits": 1,
        "wifi": false,
        "laundry": false
    },
    {
        "id": 3,
        "name": "Homesteady Housing",
        "city": "Chicago",
        "state": "IL",
        "photo": "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        "availableUnits": 1,
        "wifi": true,
        "laundry": false
    },
    {
        "id": 4,
        "name": "Happy Homes Group",
        "city": "Gary",
        "state": "IN",
        "photo": "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        "availableUnits": 1,
        "wifi": true,
        "laundry": false
    },
    {
        "id": 5,
        "name": "Hopeful Apartment Group",
        "city": "Oakland",
        "state": "CA",
        "photo": "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        "availableUnits": 2,
        "wifi": true,
        "laundry": true
    },
    {
        "id": 6,
        "name": "Seriously Safe Towns",
        "city": "Oakland",
        "state": "CA",
        "photo": "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        "availableUnits": 5,
        "wifi": true,
        "laundry": true
    },
    {
        "id": 7,
        "name": "Hopeful Housing Solutions",
        "city": "Oakland",
        "state": "CA",
        "photo": "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        "availableUnits": 2,
        "wifi": true,
        "laundry": true
    },
    {
        "id": 8,
        "name": "Seriously Safe Towns",
        "city": "Oakland",
        "state": "CA",
        "photo": "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        "availableUnits": 10,
        "wifi": false,
        "laundry": false
    },
    {
        "id": 9,
        "name": "Capital Safe Towns",
        "city": "Portland",
        "state": "OR",
        "photo": "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        "availableUnits": 6,
        "wifi": true,
        "laundry": true
    }
]

  constructor() {}
}
