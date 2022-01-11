import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './feature/flight-search/flight-search.component';
import { SharedModule } from '../shared/shared.module';
import { FlightCardComponent } from './ui/flight-card/flight-card.component';
import { FlightBookingRoutingModule } from './flight-booking-routing.module';
import { PassengerSearchComponent } from './feature/passenger-search/passenger-search.component';
import { FlightEditComponent } from './feature/flight-edit/flight-edit.component';


@NgModule({
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    PassengerSearchComponent,
    FlightEditComponent
  ],
  imports: [
    CommonModule,
    FlightBookingRoutingModule,
    SharedModule
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }
