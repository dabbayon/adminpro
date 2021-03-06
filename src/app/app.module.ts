import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Rutas
import { APP_ROUTES } from './app.routes';
// Modulos
import { PagesModule } from "./pages/pages.module";
//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from "./register/register.component";

//temporal
import { FormsModule } from '@angular/forms';

//  import { ChartsModule } from 'ng2-charts';
//servicios
import { ServiceModule } from './services/service.module';
 

@NgModule({
  declarations: [

    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ServiceModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
