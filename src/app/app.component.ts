import {Component, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {TIPO_SERVICIOS} from './const';
import {IServicio} from './core/interfaces/servicios';
import {ServiciosService} from './core/services/servicios';
import {FormularioServicioComponent} from './shared/components/formulario-servicio/formulario-servicio.component';

@Component({
  selector: 'lf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tipoServicios = TIPO_SERVICIOS;
  serviciosFiltered: IServicio[];
  serviciosAll: IServicio[];
  tipoServicioSelected: number;

  @ViewChild(FormularioServicioComponent) formularioServicioComponent: FormularioServicioComponent;

  constructor(private servicioService: ServiciosService) {

  }

  ngOnInit() {
    this.servicioService.$servicios.subscribe((servicios) => {
      this.serviciosAll = servicios;
      this.filter(this.tipoServicioSelected);
    });
  }

  setServicioToForm(servicio: IServicio) {
    this.formularioServicioComponent.servicio = servicio;
  }

  filter(tipo_servicio?: number) {
    if (tipo_servicio) {
      this.tipoServicioSelected = tipo_servicio;
      this.serviciosFiltered = this.serviciosAll.filter((s) => s.tipo_servicio === tipo_servicio);
    } else {
      this.tipoServicioSelected = null;
      this.serviciosFiltered = this.serviciosAll;
    }
    // this.formularioServicioComponent.resetForm();
  }
}
