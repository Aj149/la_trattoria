import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaskDirective } from './directives/mask.directive';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AmbientesComponent } from './ambientes/ambientes/ambientes/ambientes.component';
import { RouterModule } from '@angular/router';
import { Ambiente1Module} from './ambientes/ambiente1/ambiente1.module';
import { Ambiente2Module } from './ambientes/ambiente2/ambiente2.module';
import { Ambiente3Module } from './ambientes/ambiente3/ambiente3.module';
import { DeleteComponent } from './auth/delete/delete.component';
import { UpdateComponent } from './auth/update/update.component';
import { FormularioPagoComponent } from './auth/formulario-pago/formulario-pago.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { Authservice } from './auth/auth.service';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { RegistroComponent } from './auth/registro/registro.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AmbientesComponent,
    NavbarComponent,
    FooterComponent,
    DeleteComponent,
    UpdateComponent,
    FormularioPagoComponent,
    MaskDirective,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ambiente1Module,
    Ambiente2Module,
    Ambiente3Module,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    AppComponent,
    LoginComponent,
    AmbientesComponent,
    NavbarComponent,
    FooterComponent,
    RouterModule,
    FormularioPagoComponent
  ],
  providers: [
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


