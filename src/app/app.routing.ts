import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
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
import { AuthGuard } from './guards/auth.guard';

const routes: Routes =[
    { path: 'ambulancias',       component: AmbulanciasComponent, canActivate: [ AuthGuard ] },
    { path: 'add-ambulancia',       component: AddAmbulanciaComponent, canActivate: [ AuthGuard ] },
    { path: 'list-ambulancias',       component: ListAmbulanciasComponent, canActivate: [ AuthGuard ] },
    { path: 'tracker-ambulancias',       component: TrackingAmbulanciasComponent, canActivate: [ AuthGuard ] },
    { path: 'medicos',       component: MedicosComponent, canActivate: [ AuthGuard ] },
    { path: 'add-medico',       component: AddMedicoComponent, canActivate: [ AuthGuard ] },
    { path: 'list-medicos',       component: ListMedicosComponent, canActivate: [ AuthGuard ] },
    { path: 'hospitales',       component: HospitalesComponent, canActivate: [ AuthGuard ] },
    { path: 'add-hospital',       component: AddHospitalComponent, canActivate: [ AuthGuard ] },
    { path: 'list-hospitales',       component: ListHospitalesComponent, canActivate: [ AuthGuard ] },
    { path: 'clinicas',       component: ClinicasComponent, canActivate: [ AuthGuard ] },
    { path: 'add-clinica',       component: AddClinicaComponent, canActivate: [ AuthGuard ] },
    { path: 'list-clinicas',       component: ListClinicasComponent, canActivate: [ AuthGuard ] },
    { path: 'farmacias',       component: FarmaciasComponent, canActivate: [ AuthGuard ] },
    { path: 'add-farmacia',       component: AddFarmaciaComponent, canActivate: [ AuthGuard ] },
    { path: 'list-farmacias',       component: ListFarmaciasComponent, canActivate: [ AuthGuard ] },
    { path: 'laboratorios',       component: LaboratoriosComponent, canActivate: [ AuthGuard ] },
    { path: 'add-laboratorio',       component: AddLaboratorioComponent, canActivate: [ AuthGuard ] },
    { path: 'list-laboratorios',       component: ListLaboratoriosComponent, canActivate: [ AuthGuard ] },
    { path: 'terapeutas',       component: TerapeutasComponent, canActivate: [ AuthGuard ] },
    { path: 'add-terapeuta',       component: AddTerapeutaComponent, canActivate: [ AuthGuard ] },
    { path: 'list-terapeutas',       component: ListTerapeutasComponent, canActivate: [ AuthGuard ] },
    { path: 'edit-ambulancia',       component: EditAmbulanciaComponent, canActivate: [ AuthGuard ] },
    { path: 'edit-medico',       component: EditMedicoComponent, canActivate: [ AuthGuard ] },
    { path: 'edit-hospital',       component: EditHospitalComponent, canActivate: [ AuthGuard ] },
    { path: 'edit-clinica',       component: EditClinicaComponent, canActivate: [ AuthGuard ] },
    { path: 'edit-farmacia',       component: EditFarmaciaComponent, canActivate: [ AuthGuard ] },
    { path: 'edit-laboratorio',       component: EditLaboratorioComponent, canActivate: [ AuthGuard ] },
    { path: 'edit-terapeuta',       component: EditTerapeutaComponent, canActivate: [ AuthGuard ] },
    { path: 'edit-suscripcion',       component: EditSuscripcionComponent, canActivate: [ AuthGuard ] },
    { path: 'edit-usuario',       component: EditUsuarioComponent, canActivate: [ AuthGuard ] },
    { path: 'edit-cobro',       component: EditCobroComponent, canActivate: [ AuthGuard ] },
    { path: 'edit-pago',       component: EditPagoComponent, canActivate: [ AuthGuard ] },
    { path: 'suscripciones',       component: SuscripcionesComponent, canActivate: [ AuthGuard ] },
    { path: 'add-suscripcion',       component: AddSuscripcionComponent, canActivate: [ AuthGuard ] },
    { path: 'list-suscripciones',       component: ListSuscripcionesComponent, canActivate: [ AuthGuard ] },
    { path: 'usuarios',       component: UsuariosComponent, canActivate: [ AuthGuard ] },
    { path: 'add-usuario',       component: AddUsuarioComponent, canActivate: [ AuthGuard ] },
    { path: 'list-usuarios',       component: ListUsuariosComponent, canActivate: [ AuthGuard ] },
    { path: 'cobros',       component: CobrosComponent, canActivate: [ AuthGuard ] },
    { path: 'add-cobro',       component: AddCobroComponent, canActivate: [ AuthGuard ] },
    { path: 'list-cobros',       component: ListCobrosComponent, canActivate: [ AuthGuard ] },
    { path: 'pagos',       component: PagosComponent, canActivate: [ AuthGuard ] },
    { path: 'add-pago',       component: AddPagoComponent, canActivate: [ AuthGuard ] },
    { path: 'list-pagos',       component: ListPagosComponent, canActivate: [ AuthGuard ] },
    { path: '',             component: InicioComponent },
    { path: 'inicio',       component: InicioComponent },
    // { path: 'home',         component: HomeComponent },
    { path: 'user-profile', component: ProfileComponent, canActivate: [ AuthGuard ] },
    { path: 'register',     component: SignupComponent },
    { path: 'landing',      component: LandingComponent },
    { path: 'login',        component: LoginComponent },
    { path: 'dashboard',    component: DashboardComponent, canActivate: [ AuthGuard ] },
    { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      onSameUrlNavigation: 'reload',
    })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
