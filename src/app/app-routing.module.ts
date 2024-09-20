import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
const routes: Routes = [
  {path:'food',component:HomeComponent},
  {path:'search/:searchTerm',component:HomeComponent},
  {path:'tag/:tag',component:HomeComponent},
  //localhost:4200/tag/drink 
  {path:'FoodPage/:id',component:FoodPageComponent},
  {path:'cart-page',component:CartPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
