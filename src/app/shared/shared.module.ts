import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule,
  MatToolbarModule
} from '@angular/material';
import { FormularioServicioComponent } from './components/formulario-servicio/formulario-servicio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  exports: [
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    FormularioServicioComponent, ServiciosComponent
  ],
  declarations: [FormularioServicioComponent, ServiciosComponent]
})
export class SharedModule { }
