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
import { AuthGuardService } from './providers/auth-guard.service';

const routes: Routes =[
    { path: 'ambulancias',       component: AmbulanciasComponent },
    { path: 'add-ambulancia',       component: AddAmbulanciaComponent },
    { path: 'list-ambulancias',       component: ListAmbulanciasComponent },
    { path: 'tracker-ambulancias',       component: TrackingAmbulanciasComponent },
    { path: 'medicos',       component: MedicosComponent },
    { path: 'add-medico',       component: AddMedicoComponent },
    { path: 'list-medicos',       component: ListMedicosComponent },
    { path: 'hospitales',       component: HospitalesComponent },
    { path: 'add-hospital',       component: AddHospitalComponent },
    { path: 'list-hospitales',       component: ListHospitalesComponent },
    { path: 'clinicas',       component: ClinicasComponent },
    { path: 'add-clinica',       component: AddClinicaComponent },
    { path: 'list-clinicas',       component: ListClinicasComponent },
    { path: 'farmacias',       component: FarmaciasComponent },
    { path: 'add-farmacia',       component: AddFarmaciaComponent },
    { path: 'list-farmacias',       component: ListFarmaciasComponent },
    { path: 'laboratorios',       component: LaboratoriosComponent },
    { path: 'add-laboratorio',       component: AddLaboratorioComponent },
    { path: 'list-laboratorios',       component: ListLaboratoriosComponent },
    { path: 'terapeutas',       component: TerapeutasComponent },
    { path: 'add-terapeuta',       component: AddTerapeutaComponent },
    { path: 'list-terapeutas',       component: ListTerapeutasComponent },
    { path: 'edit-ambulancia',       component: EditAmbulanciaComponent },
    { path: 'edit-medico',       component: EditMedicoComponent },
    { path: 'edit-hospital',       component: EditHospitalComponent },
    { path: 'edit-clinica',       component: EditClinicaComponent },
    { path: 'edit-farmacia',       component: EditFarmaciaComponent },
    { path: 'edit-laboratorio',       component: EditLaboratorioComponent },
    { path: 'edit-terapeuta',       component: EditTerapeutaComponent },
    { path: 'edit-suscripcion',       component: EditSuscripcionComponent },
    { path: 'edit-usuario',       component: EditUsuarioComponent },
    { path: 'edit-cobro',       component: EditCobroComponent },
    { path: 'edit-pago',       component: EditPagoComponent },
    { path: 'suscripciones',       component: SuscripcionesComponent },
    { path: 'add-suscripcion',       component: AddSuscripcionComponent },
    { path: 'list-suscripciones',       component: ListSuscripcionesComponent },
    { path: 'usuarios',       component: UsuariosComponent },
    { path: 'add-usuario',       component: AddUsuarioComponent },
    { path: 'list-usuarios',       component: ListUsuariosComponent },
    { path: 'cobros',       component: CobrosComponent },
    { path: 'add-cobro',       component: AddCobroComponent },
    { path: 'list-cobros',       component: ListCobrosComponent },
    { path: 'pagos',       component: PagosComponent },
    { path: 'add-pago',       component: AddPagoComponent },
    { path: 'list-pagos',       component: ListPagosComponent },
    // { path: 'ambulancias',       component: AmbulanciasComponent, canActivate: [AuthGuardService] },
    // { path: 'add-ambulancia',       component: AddAmbulanciaComponent, canActivate: [AuthGuardService] },
    // { path: 'list-ambulancias',       component: ListAmbulanciasComponent, canActivate: [AuthGuardService] },
    // { path: 'tracker-ambulancias',       component: TrackingAmbulanciasComponent, canActivate: [AuthGuardService] },
    // { path: 'medicos',       component: MedicosComponent, canActivate: [AuthGuardService] },
    // { path: 'add-medico',       component: AddMedicoComponent, canActivate: [AuthGuardService] },
    // { path: 'list-medicos',       component: ListMedicosComponent, canActivate: [AuthGuardService] },
    // { path: 'hospitales',       component: HospitalesComponent, canActivate: [AuthGuardService] },
    // { path: 'add-hospital',       component: AddHospitalComponent, canActivate: [AuthGuardService] },
    // { path: 'list-hospitales',       component: ListHospitalesComponent, canActivate: [AuthGuardService] },
    // { path: 'clinicas',       component: ClinicasComponent, canActivate: [AuthGuardService] },
    // { path: 'add-clinica',       component: AddClinicaComponent, canActivate: [AuthGuardService] },
    // { path: 'list-clinicas',       component: ListClinicasComponent, canActivate: [AuthGuardService] },
    // { path: 'farmacias',       component: FarmaciasComponent, canActivate: [AuthGuardService] },
    // { path: 'add-farmacia',       component: AddFarmaciaComponent, canActivate: [AuthGuardService] },
    // { path: 'list-farmacias',       component: ListFarmaciasComponent, canActivate: [AuthGuardService] },
    // { path: 'laboratorios',       component: LaboratoriosComponent, canActivate: [AuthGuardService] },
    // { path: 'add-laboratorio',       component: AddLaboratorioComponent, canActivate: [AuthGuardService] },
    // { path: 'list-laboratorios',       component: ListLaboratoriosComponent, canActivate: [AuthGuardService] },
    // { path: 'terapeutas',       component: TerapeutasComponent, canActivate: [AuthGuardService] },
    // { path: 'add-terapeuta',       component: AddTerapeutaComponent, canActivate: [AuthGuardService] },
    // { path: 'list-terapeutas',       component: ListTerapeutasComponent, canActivate: [AuthGuardService] },
    // { path: 'edit-ambulancia',       component: EditAmbulanciaComponent, canActivate: [AuthGuardService] },
    // { path: 'edit-medico',       component: EditMedicoComponent, canActivate: [AuthGuardService] },
    // { path: 'edit-hospital',       component: EditHospitalComponent, canActivate: [AuthGuardService] },
    // { path: 'edit-clinica',       component: EditClinicaComponent, canActivate: [AuthGuardService] },
    // { path: 'edit-farmacia',       component: EditFarmaciaComponent, canActivate: [AuthGuardService] },
    // { path: 'edit-laboratorio',       component: EditLaboratorioComponent, canActivate: [AuthGuardService] },
    // { path: 'edit-terapeuta',       component: EditTerapeutaComponent, canActivate: [AuthGuardService] },
    // { path: 'edit-suscripcion',       component: EditSuscripcionComponent, canActivate: [AuthGuardService] },
    // { path: 'edit-usuario',       component: EditUsuarioComponent, canActivate: [AuthGuardService] },
    // { path: 'edit-cobro',       component: EditCobroComponent, canActivate: [AuthGuardService] },
    // { path: 'edit-pago',       component: EditPagoComponent, canActivate: [AuthGuardService] },
    // { path: 'suscripciones',       component: SuscripcionesComponent, canActivate: [AuthGuardService] },
    // { path: 'add-suscripcion',       component: AddSuscripcionComponent, canActivate: [AuthGuardService] },
    // { path: 'list-suscripciones',       component: ListSuscripcionesComponent, canActivate: [AuthGuardService] },
    // { path: 'usuarios',       component: UsuariosComponent, canActivate: [AuthGuardService] },
    // { path: 'add-usuario',       component: AddUsuarioComponent, canActivate: [AuthGuardService] },
    // { path: 'list-usuarios',       component: ListUsuariosComponent, canActivate: [AuthGuardService] },
    // { path: 'cobros',       component: CobrosComponent, canActivate: [AuthGuardService] },
    // { path: 'add-cobro',       component: AddCobroComponent, canActivate: [AuthGuardService] },
    // { path: 'list-cobros',       component: ListCobrosComponent, canActivate: [AuthGuardService] },
    // { path: 'pagos',       component: PagosComponent, canActivate: [AuthGuardService] },
    // { path: 'add-pago',       component: AddPagoComponent, canActivate: [AuthGuardService] },
    // { path: 'list-pagos',       component: ListPagosComponent, canActivate: [AuthGuardService] },
    { path: '',             component: InicioComponent },
    { path: 'inicio',       component: InicioComponent },
    { path: 'home',         component: HomeComponent },
    { path: 'user-profile', component: ProfileComponent },
    { path: 'register',     component: SignupComponent },
    { path: 'landing',      component: LandingComponent },
    { path: 'login',        component: LoginComponent },
    { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
