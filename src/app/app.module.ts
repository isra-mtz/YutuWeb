import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { AmbulanciasComponent } from './components/ambulancias/ambulancias.component';
import { AddAmbulanciaComponent } from './components/ambulancias/add-ambulancia/add-ambulancia.component';
import { ListAmbulanciasComponent } from './components/ambulancias/list-ambulancias/list-ambulancias.component';
import { TrackingAmbulanciasComponent } from './components/ambulancias/tracking-ambulancias/tracking-ambulancias.component';
import { MedicosComponent } from './components/medicos/medicos.component';
import { AddMedicoComponent } from './components/medicos/add-medico/add-medico.component';
import { ListMedicosComponent } from './components/medicos/list-medicos/list-medicos.component';
import { HospitalesComponent } from './components/hospitales/hospitales.component';
import { AddHospitalComponent } from './components/hospitales/add-hospital/add-hospital.component';
import { ListHospitalesComponent } from './components/hospitales/list-hospitales/list-hospitales.component';
import { ClinicasComponent } from './components/clinicas/clinicas.component';
import { AddClinicaComponent } from './components/clinicas/add-clinica/add-clinica.component';
import { ListClinicasComponent } from './components/clinicas/list-clinicas/list-clinicas.component';
import { FarmaciasComponent } from './components/farmacias/farmacias.component';
import { AddFarmaciaComponent } from './components/farmacias/add-farmacia/add-farmacia.component';
import { ListFarmaciasComponent } from './components/farmacias/list-farmacias/list-farmacias.component';
import { LaboratoriosComponent } from './components/laboratorios/laboratorios.component';
import { AddLaboratorioComponent } from './components/laboratorios/add-laboratorio/add-laboratorio.component';
import { ListLaboratoriosComponent } from './components/laboratorios/list-laboratorios/list-laboratorios.component';
import { TerapeutasComponent } from './components/terapeutas/terapeutas.component';
import { AddTerapeutaComponent } from './components/terapeutas/add-terapeuta/add-terapeuta.component';
import { ListTerapeutasComponent } from './components/terapeutas/list-terapeutas/list-terapeutas.component';
import { EditAmbulanciaComponent } from './components/ambulancias/edit-ambulancia/edit-ambulancia.component';
import { EditMedicoComponent } from './components/medicos/edit-medico/edit-medico.component';
import { EditHospitalComponent } from './components/hospitales/edit-hospital/edit-hospital.component';
import { EditClinicaComponent } from './components/clinicas/edit-clinica/edit-clinica.component';
import { EditFarmaciaComponent } from './components/farmacias/edit-farmacia/edit-farmacia.component';
import { EditLaboratorioComponent } from './components/laboratorios/edit-laboratorio/edit-laboratorio.component';
import { EditTerapeutaComponent } from './components/terapeutas/edit-terapeuta/edit-terapeuta.component';
import { EditSuscripcionComponent } from './components/suscripciones/edit-suscripcion/edit-suscripcion.component';
import { EditUsuarioComponent } from './components/usuarios/edit-usuario/edit-usuario.component';
import { EditCobroComponent } from './components/cobros/edit-cobro/edit-cobro.component';
import { EditPagoComponent } from './components/pagos/edit-pago/edit-pago.component';
import { SuscripcionesComponent } from './components/suscripciones/suscripciones.component';
import { AddSuscripcionComponent } from './components/suscripciones/add-suscripcion/add-suscripcion.component';
import { ListSuscripcionesComponent } from './components/suscripciones/list-suscripciones/list-suscripciones.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AddUsuarioComponent } from './components/usuarios/add-usuario/add-usuario.component';
import { ListUsuariosComponent } from './components/usuarios/list-usuarios/list-usuarios.component';
import { CobrosComponent } from './components/cobros/cobros.component';
import { AddCobroComponent } from './components/cobros/add-cobro/add-cobro.component';
import { ListCobrosComponent } from './components/cobros/list-cobros/list-cobros.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { AddPagoComponent } from './components/pagos/add-pago/add-pago.component';
import { ListPagosComponent } from './components/pagos/list-pagos/list-pagos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashnavComponent } from './shared/dashnav/dashnav.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    InicioComponent,
    AmbulanciasComponent,
    AddAmbulanciaComponent,
    ListAmbulanciasComponent,
    TrackingAmbulanciasComponent,
    MedicosComponent,
    AddMedicoComponent,
    ListMedicosComponent,
    HospitalesComponent,
    AddHospitalComponent,
    ListHospitalesComponent,
    ClinicasComponent,
    AddClinicaComponent,
    ListClinicasComponent,
    FarmaciasComponent,
    AddFarmaciaComponent,
    ListFarmaciasComponent,
    LaboratoriosComponent,
    AddLaboratorioComponent,
    ListLaboratoriosComponent,
    TerapeutasComponent,
    AddTerapeutaComponent,
    ListTerapeutasComponent,
    EditAmbulanciaComponent,
    EditMedicoComponent,
    EditHospitalComponent,
    EditClinicaComponent,
    EditFarmaciaComponent,
    EditLaboratorioComponent,
    EditTerapeutaComponent,
    EditSuscripcionComponent,
    EditUsuarioComponent,
    EditCobroComponent,
    EditPagoComponent,
    SuscripcionesComponent,
    AddSuscripcionComponent,
    ListSuscripcionesComponent,
    UsuariosComponent,
    AddUsuarioComponent,
    ListUsuariosComponent,
    CobrosComponent,
    AddCobroComponent,
    ListCobrosComponent,
    PagosComponent,
    AddPagoComponent,
    ListPagosComponent,
    DashboardComponent,
    DashnavComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
