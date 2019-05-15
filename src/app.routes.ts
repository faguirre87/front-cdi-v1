import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./app/containers/home/home.component";
import { CargaComponent } from "./app/containers/carga/carga.component";
import { LoginComponent } from "./app/containers/login/login.component";
import { MostrarDatosComponent } from "./app/containers/mostrar-datos/mostrar-datos.component";
import { ResultadoPadreComponent } from "./app/containers/resultado-padre/resultado-padre.component";
import { ResultadosComponent } from "./app/containers/resultados/resultados.component";
import { ForgotPasswordComponent } from "./app/containers/forgot-password/forgot-password.component";
import { ImportarComponent } from "./app/containers/importar/importar.component";
import { A01Component } from "./app/containers/a01/a01.component";
import { A02Component } from "./app/containers/a02/a02.component";
import { A03Component } from "./app/containers/a03/a03.component";
import { A04Component } from "./app/containers/a04/a04.component";
import { A05Component } from "./app/containers/a05/a05.component";
import { A06Component } from "./app/containers/a06/a06.component";
import { A07Component } from "./app/containers/a07/a07.component";
import { A08Component } from "./app/containers/a08/a08.component";
import { A09Component } from "./app/containers/a09/a09.component";
import { A10Component } from "./app/containers/a10/a10.component";
import { A11Component } from "./app/containers/a11/a11.component";
import { A12Component } from "./app/containers/a12/a12.component";
import { A13Component } from "./app/containers/a13/a13.component";
import { A14Component } from "./app/containers/a14/a14.component";
import { A15Component } from "./app/containers/a15/a15.component";
import { A16Component } from "./app/containers/a16/a16.component";
import { A17Component } from "./app/containers/a17/a17.component";
import { A18Component } from "./app/containers/a18/a18.component";
import { A19Component } from "./app/containers/a19/a19.component";
import { A20Component } from "./app/containers/a20/a20.component";
import { A21Component } from "./app/containers/a21/a21.component";
import { A22Component } from "./app/containers/a22/a22.component";
import { A23Component } from "./app/containers/a23/a23.component";

const APP_ROUTES: Routes = [
  { path: "", component: LoginComponent },
  { path: "carga", component: CargaComponent },
  { path: "home", component: HomeComponent },
  { path: "mostrar-datos", component: MostrarDatosComponent},
  { path: "resultado-padre", component: ResultadoPadreComponent },
  { path: "resultados", component: ResultadosComponent },
  { path: "forgot-password", component: ForgotPasswordComponent },
  { path: "importar", component: ImportarComponent },
  { path: "a01", component: A01Component },
  { path: "a02", component: A02Component },
  { path: "a03", component: A03Component },
  { path: "a04", component: A04Component },
  { path: "a05", component: A05Component },
  { path: "a06", component: A06Component },
  { path: "a07", component: A07Component },
  { path: "a08", component: A08Component },
  { path: "a09", component: A09Component },
  { path: "a10", component: A10Component },
  { path: "a11", component: A11Component },
  { path: "a12", component: A12Component },
  { path: "a13", component: A13Component },
  { path: "a14", component: A14Component },
  { path: "a15", component: A15Component },
  { path: "a16", component: A16Component },
  { path: "a17", component: A17Component },
  { path: "a18", component: A18Component },
  { path: "a19", component: A19Component },
  { path: "a20", component: A20Component },
  { path: "a21", component: A21Component },
  { path: "a22", component: A22Component },
  { path: "a23", component: A23Component },
  { path: "**", pathMatch: "full", redirectTo: "" }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
