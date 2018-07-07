import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import {MatButtonModule, MatGridListModule, MatIconModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    LayoutModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: []
})
export class SharedModule { }
