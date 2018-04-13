import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { T5cervezaComponent } from './t5cerveza/t5cerveza.component';
import { T5vasoVinoComponent } from './t5vaso-vino/t5vaso-vino.component';
import { T6piscolaComponent } from './t6piscola/t6piscola.component';
import {TragosEquivalentesComponent} from './tragos-equivalentes/tragos-equivalentes.component'
import { LaminaBajoRiesgo2TragosOcasionComponent } from '../laminas/lamina-bajo-riesgo2-tragos-ocasion/lamina-bajo-riesgo2-tragos-ocasion.component';
import { LaminaRiesgoModerado4TragosOcasionComponent } from '../laminas/lamina-riesgo-moderado4-tragos-ocasion/lamina-riesgo-moderado4-tragos-ocasion.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    T5cervezaComponent,
    T5vasoVinoComponent,
    T6piscolaComponent,
    TragosEquivalentesComponent,
    LaminaBajoRiesgo2TragosOcasionComponent,
    LaminaRiesgoModerado4TragosOcasionComponent
  ],
  declarations: [
      T5cervezaComponent,
      T5vasoVinoComponent,
      T6piscolaComponent,
      TragosEquivalentesComponent,
      LaminaBajoRiesgo2TragosOcasionComponent,
      LaminaRiesgoModerado4TragosOcasionComponent
  ]
})
export class LaminasModule { }
