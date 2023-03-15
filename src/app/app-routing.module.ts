import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddcategoriesComponent } from './addcategories/addcategories.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';


const routes: Routes = [{path : "addcategories" ,component: AddcategoriesComponent },
{path : "categories",component : CategoriesComponent},
{path : "login", component : UserComponent},
{path : "products",component : ProductsComponent},
{path :"register",component:RegisterComponent},
{path:"home",component:HomeComponent},
{path:"forgotpassword",component:ForgotpasswordComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }