import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './sharpage/navbar/navbar.component';
import { FooterComponent } from './sharpage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { Menu1Component } from './pages/menu1/menu1.component';
import { Menu2Component } from './pages/menu2/menu2.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MontrepageComponent } from './pages/montrepage/montrepage.component';
import { MontrepageeComponent } from './pages/montrepagee/montrepagee.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';


 
const routes: Routes=[
  {path:"",component:HomeComponent},
  {path:"montrefemme",component:Menu1Component},
  {path:"montrehomme",component:Menu2Component},
  {path:"contact",component:ContactComponent},
  {path:"food/:id",component:MontrepageComponent},
  {path:"montre/:id",component:MontrepageeComponent},
 
  {path:"page/:id",component:HomePageComponent}
  

]
@NgModule({
  declarations: [
    AppComponent,
  
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    Menu1Component,
    Menu2Component,
    ContactComponent,
    MontrepageComponent,
    HomePageComponent,
 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
