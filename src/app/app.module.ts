import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// Routes
import { APP_ROUTING } from "../app.routes";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./containers/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CargaComponent } from "./containers/carga/carga.component";
import { LoginComponent } from "./containers/login/login.component";
import { MostrarDatosComponent } from "./containers/mostrar-datos/mostrar-datos.component";
import { ResultadoPadreComponent } from "./containers/resultado-padre/resultado-padre.component";
import { ResultadosComponent } from "./containers/resultados/resultados.component";
import { A01Component } from "./containers/a01/a01.component";
import { A02Component } from "./containers/a02/a02.component";
import { A03Component } from "./containers/a03/a03.component";
import { A04Component } from "./containers/a04/a04.component";
import { A05Component } from "./containers/a05/a05.component";
import { A06Component } from "./containers/a06/a06.component";
import { A07Component } from "./containers/a07/a07.component";
import { A08Component } from "./containers/a08/a08.component";
import { A09Component } from "./containers/a09/a09.component";
import { A10Component } from "./containers/a10/a10.component";
import { A11Component } from "./containers/a11/a11.component";
import { A12Component } from "./containers/a12/a12.component";
import { A13Component } from "./containers/a13/a13.component";
import { A14Component } from "./containers/a14/a14.component";
import { A15Component } from "./containers/a15/a15.component";
import { A16Component } from "./containers/a16/a16.component";
import { A17Component } from "./containers/a17/a17.component";
import { A18Component } from "./containers/a18/a18.component";
import { A19Component } from "./containers/a19/a19.component";
import { A20Component } from "./containers/a20/a20.component";
import { A21Component } from "./containers/a21/a21.component";
import { A22Component } from "./containers/a22/a22.component";
import { A23Component } from "./containers/a23/a23.component";
import { ForgotPasswordComponent } from "./containers/forgot-password/forgot-password.component";
import { ContainerComponent } from "./components/container/container.component";
import {FormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { ImportarComponent } from "./containers/importar/importar.component";
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    CargaComponent,
    LoginComponent,
    MostrarDatosComponent,
    ResultadoPadreComponent,
    ResultadosComponent,
    A01Component,
    A02Component,
    A03Component,
    A04Component,
    A05Component,
    A06Component,
    A07Component,
    A08Component,
    A09Component,
    A10Component,
    A11Component,
    A12Component,
    A13Component,
    A14Component,
    A15Component,
    A16Component,
    A17Component,
    A18Component,
    A19Component,
    A20Component,
    A21Component,
    A22Component,
    A23Component,
    ForgotPasswordComponent,
    ContainerComponent,
    ImportarComponent
  ],
  imports: [
    BrowserModule, APP_ROUTING, FormsModule, HttpClientModule, ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
