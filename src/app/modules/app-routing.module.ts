import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CultureComponent } from '../routes/culture/culture.component';
import { GalleryComponent } from '../routes/gallery/gallery.component';
import { GeographyComponent } from '../routes/geography/geography.component';
import { HistoricLocationsComponent } from '../routes/historic-locations/historic-locations.component';
import { HomeComponent } from '../routes/home/home.component';
import { TopTouristLocationsComponent } from '../routes/top-tourist-locations/top-tourist-locations.component';
import { WeatherComponent } from '../routes/weather/weather.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'top-tourist-locations', component: TopTouristLocationsComponent },
  { path: 'historic-locations', component: HistoricLocationsComponent },
  { path: 'geography', component: GeographyComponent },
  { path: 'culture', component: CultureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
