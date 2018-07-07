import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IServicio, ITipoServicio} from '../../../core/interfaces/servicios';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServiciosService} from '../../../core/services/servicios';

@Component({
  selector: 'formulario-servicio',
  templateUrl: './formulario-servicio.component.html',
  styleUrls: ['./formulario-servicio.component.scss']
})
export class FormularioServicioComponent implements OnInit {
  @Output() update = new EventEmitter();

  _tipoServicio: ITipoServicio;

  get tipoServicio() {
    return this._tipoServicio;
  }

  @Input() set tipoServicio(tipoServicio) {
    this._tipoServicio = tipoServicio;
    console.log(this.tipoServicio);
    this.enableOrDisableForm();
  }

  _servicio: IServicio;
  get servicio(): IServicio {
    return this._servicio;
  }

  @Input() set servicio(servicio) {
    this._servicio = servicio;
    this.servicioForm.reset(this._servicio);
  }

  servicioForm: FormGroup;

  constructor(private fb: FormBuilder, private servicioService: ServiciosService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.servicioForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      tipo_servicio: [this.tipoServicio ? this.tipoServicio : null],
      codigo: [null]
    });
    this.enableOrDisableForm();
  }

  saveServicio() {
    if (this.servicioForm.valid) {
      this.servicioService.save(this.servicioForm.getRawValue());
      this.resetForm();
    }
  }

  resetForm() {
    if (this.servicioForm) {
      this.servicioForm.reset({codigo: null, tipo_servicio: this.tipoServicio ? this.tipoServicio : null});
      console.log(this.servicioForm.getRawValue());
    }
  }

  private enableOrDisableForm() {
    if (this.servicioForm) {
      !this._tipoServicio ? this.servicioForm.disable() : this.servicioForm.enable();
      this.resetForm();
    }
  }

}
