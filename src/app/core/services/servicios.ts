import {IServicio} from '../interfaces/servicios';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ServiciosService {
  servicios: IServicio[];

  $servicios: BehaviorSubject<IServicio[]>;

  constructor() {
    const serviciosInStorage = localStorage.getItem('servicios') ? JSON.parse(localStorage.getItem('servicios')) : null;
    this.servicios = serviciosInStorage ? serviciosInStorage : [];
    this.$servicios = new BehaviorSubject<IServicio[]>(this.servicios);

    this.$servicios.subscribe((servicios) => {
      localStorage.setItem('servicios', JSON.stringify(servicios));
    });
  }

  getAll(): Observable<IServicio[]> {
    return this.$servicios;
  }

  save(servicio: IServicio) {
    ('codigo' in servicio && servicio.codigo != null) ? this.edit(servicio) : this.add(servicio);
  }

  delete(codigo: number) {
    this.servicios = this.servicios.filter((s) => s.codigo !== codigo);
    this.updateServicios();
  }

  private add(servicio: IServicio) {
    servicio.codigo = this.servicios.length + 1;
    this.servicios.push(servicio);
    this.updateServicios();
  }

  private edit(servicio: IServicio) {
    const servicioIndex = this.servicios.findIndex((s) => servicio.codigo === s.codigo);
    this.servicios[servicioIndex] = servicio;
    this.updateServicios();
  }

  private updateServicios() {
    this.$servicios.next(this.servicios);
  }
}
