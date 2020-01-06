import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { HomeComponent } from './routes/home/home.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { SiteNavComponent } from './components/site-nav/site-nav.component';
import { WeatherComponent } from './routes/weather/weather.component';
import { GalleryComponent } from './routes/gallery/gallery.component';
import { TopTouristLocationsComponent } from './routes/top-tourist-locations/top-tourist-locations.component';
import { HistoricLocationsComponent } from './routes/historic-locations/historic-locations.component';
import { GeographyComponent } from './routes/geography/geography.component';
import { CultureComponent } from './routes/culture/culture.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SiteHeaderComponent,
    SiteNavComponent,
    WeatherComponent,
    GalleryComponent,
    TopTouristLocationsComponent,
    HistoricLocationsComponent,
    GeographyComponent,
    CultureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
