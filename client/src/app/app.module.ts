import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { BathroomComponent } from './pages/bathroom/bathroom.component';
import { FurnitureComponent } from './pages/furniture/furniture.component';
import { KitchenComponent } from './pages/kitchen/kitchen.component';
import { LightingComponent } from './pages/lighting/lighting.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { OffersComponent } from './components/offers/offers.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    NavbarComponent,
    CartComponent,
    HomeComponent,
    BathroomComponent,
    FurnitureComponent,
    KitchenComponent,
    LightingComponent,
    CollectionsComponent,
    OffersComponent,
    ProductCardComponent,
    ProductPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
