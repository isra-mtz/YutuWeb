import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AmbulanciaModel } from '../models/ambulancia.model';

@Injectable({
  providedIn: 'root'
})
export class AmbulanciasService {

  item : Observable<AmbulanciaModel>;

  constructor() { }

}
