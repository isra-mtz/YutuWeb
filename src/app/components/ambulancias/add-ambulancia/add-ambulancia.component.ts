import { Component, OnInit } from '@angular/core';
import { AmbulanciaModel } from '../../../models/ambulancia.model';
import { AmbulanciasService } from '../../../services/ambulancias.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-add-ambulancia',
  templateUrl: './add-ambulancia.component.html',
  styleUrls: ['./add-ambulancia.component.css']
})
export class AddAmbulanciaComponent implements OnInit {

  public ambulancia: AmbulanciaModel = {
    tipo: '',
    matricula: '',
    capacidad: '',
    marca: '',
    modelo: '',
    equipamiento: '',
    horario_servicio: '',
    conductor: '',
    numero_de_licencia: '',
    celular_de_contacto: '',
    responsable: '',
    lat: 17.0644053,
    lng: -96.723095,
  };
  tipos = [
    { nombre: "Ambulancia de emergencia"  },
    { nombre: "Ambulancia de equipos básicos"  },
    { nombre: "Ambulancia de equipos avanzados"  },
    { nombre: "Ambulancia asistencial o de soporte vital básico"  },
    { nombre: "Ambulancia sanitarizada"  },
    { nombre: "Ambulancia medicalizada / UVI-Móvil o de soporte vital avanzado"  },
    { nombre: "Ambulancia para el transporte de pacientes"  },
    { nombre: "Ambulancia de caridad"  },
    { nombre: "Unidad de respuesta"  }
  ];
  nuevo: boolean = false;
  id: string;

  constructor(
    private _ambulanciasService: AmbulanciasService,
    private router: Router,
    private _authService: AuthService,
  ) {

  }

  ngOnInit() {
  }

  insertar() {
    this.ambulancia.tipo = this.ambulancia.tipo;
    this.ambulancia.matricula = this.ambulancia.matricula;
    this.ambulancia.capacidad = this.ambulancia.capacidad;
    this.ambulancia.marca = this.ambulancia.marca;
    this.ambulancia.modelo = this.ambulancia.modelo;
    this.ambulancia.equipamiento = this.ambulancia.equipamiento;
    this.ambulancia.horario_servicio = this.ambulancia.horario_servicio;
    this.ambulancia.conductor = this.ambulancia.conductor;
    this.ambulancia.numero_de_licencia = this.ambulancia.numero_de_licencia;
    this.ambulancia.celular_de_contacto = this.ambulancia.celular_de_contacto;
    this.ambulancia.responsable = this.ambulancia.responsable;
    this.ambulancia.uid = this._authService.usuario.uid;
    this.ambulancia.lat = this.ambulancia.lat;
    this.ambulancia.lng = this.ambulancia.lng;
    // this._ambulanciasService.addItem( this.ambulancia )
        // .then( () => this.router.navigate(['tabla-ambulancias']) )
        // .catch( (err) => console.log('Error al almacenar Ambulancia en la DB: ', err ) );
  }

}
