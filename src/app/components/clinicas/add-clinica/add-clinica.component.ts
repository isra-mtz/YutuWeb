import { Component, OnInit } from '@angular/core';
import { ClinicaModel } from '../../../models/clinica.model';
import { ESTADOS } from '../../../models/estados';
import { MarcadorModel } from '../../../models/marcador.model';

@Component({
  selector: 'app-add-clinica',
  templateUrl: './add-clinica.component.html',
  styleUrls: ['./add-clinica.component.css']
})
export class AddClinicaComponent implements OnInit {

  lat: number = 19.433983;
  lng: number = -99.135728;
  zoom: number = 16;

  marcadorSel: any = null;
  marcadorStatus: boolean = false;
  draggable: string = '1';
  marcador: MarcadorModel;

  public clinica: ClinicaModel = {
    clave : '',
    nombre : '',
    razon_social : '',
    numero_de_consultorios: 0,
    numero_de_quirofanos: 0,
    telefono_fijo: '',
    email: '',
    calle : '',
    numero_exterior : '',
    numero_interior : '',
    colonia : '',
    delegacion_o_municipio : '',
    codigo_postal : '',
    ciudad : '',
    estado : '',
    mapTitle: '',
    mapComment: '',
    mapLat: 0,
    mapLng: 0,
  };

  nuevo: boolean = false;
  id: string;

  estados = ESTADOS;

  constructor() { }

  ngOnInit() {
  }

}
