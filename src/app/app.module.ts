import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

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
import { AmbulanciasComponent } from './ambulancias/ambulancias.component';
import { AddAmbulanciaComponent } from './ambulancias/add-ambulancia/add-ambulancia.component';
import { ListAmbulanciasComponent } from './ambulancias/list-ambulancias/list-ambulancias.component';
import { TrackingAmbulanciasComponent } from './ambulancias/tracking-ambulancias/tracking-ambulancias.component';
import { MedicosComponent } from './medicos/medicos.component';
import { AddMedicoComponent } from './medicos/add-medico/add-medico.component';
import { ListMedicosComponent } from './medicos/list-medicos/list-medicos.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { AddHospitalComponent } from './hospitales/add-hospital/add-hospital.component';
import { ListHospitalesComponent } from './hospitales/list-hospitales/list-hospitales.component';
import { ClinicasComponent } from './clinicas/clinicas.component';
import { AddClinicaComponent } from './clinicas/add-clinica/add-clinica.component';
import { ListClinicasComponent } from './clinicas/list-clinicas/list-clinicas.component';
import { FarmaciasComponent } from './farmacias/farmacias.component';
import { AddFarmaciaComponent } from './farmacias/add-farmacia/add-farmacia.component';
import { ListFarmaciasComponent } from './farmacias/list-farmacias/list-farmacias.component';
import { LaboratoriosComponent } from './laboratorios/laboratorios.component';
import { AddLaboratorioComponent } from './laboratorios/add-laboratorio/add-laboratorio.component';
import { ListLaboratoriosComponent } from './laboratorios/list-laboratorios/list-laboratorios.component';
import { TerapeutasComponent } from './terapeutas/terapeutas.component';
import { AddTerapeutaComponent } from './terapeutas/add-terapeuta/add-terapeuta.component';
import { ListTerapeutasComponent } from './terapeutas/list-terapeutas/list-terapeutas.component';
import { EditAmbulanciaComponent } from './ambulancias/edit-ambulancia/edit-ambulancia.component';
import { EditMedicoComponent } from './medicos/edit-medico/edit-medico.component';
import { EditHospitalComponent } from './hospitales/edit-hospital/edit-hospital.component';
import { EditClinicaComponent } from './clinicas/edit-clinica/edit-clinica.component';
import { EditFarmaciaComponent } from './farmacias/edit-farmacia/edit-farmacia.component';
import { EditLaboratorioComponent } from './laboratorios/edit-laboratorio/edit-laboratorio.component';
import { EditTerapeutaComponent } from './terapeutas/edit-terapeuta/edit-terapeuta.component';
import { EditSuscripcionComponent } from './suscripciones/edit-suscripcion/edit-suscripcion.component';
import { EditUsuarioComponent } from './usuarios/edit-usuario/edit-usuario.component';
import { EditCobroComponent } from './cobros/edit-cobro/edit-cobro.component';
import { EditPagoComponent } from './pagos/edit-pago/edit-pago.component';
import { SuscripcionesComponent } from './suscripciones/suscripciones.component';
import { AddSuscripcionComponent } from './suscripciones/add-suscripcion/add-suscripcion.component';
import { ListSuscripcionesComponent } from './suscripciones/list-suscripciones/list-suscripciones.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AddUsuarioComponent } from './usuarios/add-usuario/add-usuario.component';
import { ListUsuariosComponent } from './usuarios/list-usuarios/list-usuarios.component';
import { CobrosComponent } from './cobros/cobros.component';
import { AddCobroComponent } from './cobros/add-cobro/add-cobro.component';
import { ListCobrosComponent } from './cobros/list-cobros/list-cobros.component';
import { PagosComponent } from './pagos/pagos.component';
import { AddPagoComponent } from './pagos/add-pago/add-pago.component';
import { ListPagosComponent } from './pagos/list-pagos/list-pagos.component';

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
    ListPagosComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
