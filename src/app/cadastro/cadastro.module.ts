import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CadastroComponent } from "./cadastro.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StepsModule } from "primeng/steps";
import { CandidatoService } from "../services/candidato.service";
import { CadastroRoutingModule } from "./cadastro-routing.module";
import { PrimeiroPassoComponent } from "./primeiro-passo/primeiro-passo.component";
import { SegundoPassoComponent } from "./segundo-passo/segundo-passo.component";
import { TerceiroPassoComponent } from "./terceiro-passo/terceiro-passo.component";
import { GeneralInputModule } from "../components/general-input/general-input.module";
import { CalendarModule } from "primeng/calendar";
import { QuartoPassoComponent } from './quarto-passo/quarto-passo.component';
import { MostrarDadosCandidatosModule } from '../components/mostrar-dados-candidatos/mostrar-dados-candidatos.module';
import { QuintoPassoComponent } from './quinto-passo/quinto-passo/quinto-passo.component';

@NgModule({
  declarations: [
    CadastroComponent,
    PrimeiroPassoComponent,
    SegundoPassoComponent,
    TerceiroPassoComponent,
    QuartoPassoComponent,
    QuintoPassoComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StepsModule,
    GeneralInputModule,
    CalendarModule,
    MostrarDadosCandidatosModule
  ],
  providers: [CandidatoService]
})
export class CadastroModule {}
