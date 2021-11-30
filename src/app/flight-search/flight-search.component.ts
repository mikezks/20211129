import { Component, OnInit } from '@angular/core';
import { Flight } from '../entities/flight';
import { DefaultFlightService } from './default-flight.service';
import { FlightService } from './flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  /* providers: [
    { provide: FlightService, useClass: DefaultFlightService }
  ] */
})
export class FlightSearchComponent implements OnInit {
  from: string = 'Hamburg';
  to: string = 'Graz';
  flights: Flight[] = [];
  selectedFlight: Flight | undefined;

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
  }

  changeName(): void {
    this.flightService.name = 'New state set';
  }

  search(): void {
    this.flightService.find(this.from, this.to)
      .subscribe({
        next: flights => this.flights = flights,
        error: err => console.error('Flights loading error', err)
      });
  }

  select(flight: Flight): void {
    this.selectedFlight = flight;
  }
}
