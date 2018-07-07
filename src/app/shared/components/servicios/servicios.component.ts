import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IServicio, ITipoServicio} from '../../../core/interfaces/servicios';
import {ServiciosService} from '../../../core/services/servicios';

@Component({
  selector: 'servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit, OnChanges {

  _servicios: IServicio[];

  get servicios() {
    return this._servicios;
  }

  @Input() set servicios(servicios) {
    this._servicios = servicios;
  }

  @Output() updateServicio: EventEmitter<IServicio> = new EventEmitter();

  constructor(private servicioService: ServiciosService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  delete(codigo: number) {
    this.servicioService.delete(codigo);
  }

  edit(servicio: IServicio) {
    this.updateServicio.emit(servicio);
  }
}
