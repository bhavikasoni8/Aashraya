import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { KitchenComponent } from './pages/kitchen/kitchen.component';
import { BathroomComponent } from './pages/bathroom/bathroom.component';
import { FurnitureComponent } from './pages/furniture/furniture.component';
import { LightingComponent } from './pages/lighting/lighting.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'kitchen', component: KitchenComponent },
  { path: 'bathroom', component: BathroomComponent },
  { path: 'furniture', component: FurnitureComponent },
  { path: 'lighting', component: LightingComponent },
  { path: 'product-page', component: ProductPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
