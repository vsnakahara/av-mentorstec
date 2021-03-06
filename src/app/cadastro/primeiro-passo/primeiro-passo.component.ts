import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Candidato } from "../../models/candidato";
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { CandidatoService } from "../../services/candidato.service";
import { DadosPrivados } from "../../models/dadosPrivados";

@Component({
  selector: "app-primeiro-passo",
  templateUrl: "./primeiro-passo.component.html",
  styleUrls: ["./primeiro-passo.component.scss"]
})
export class PrimeiroPassoComponent implements OnInit {
  candidatoForm: FormGroup;
  @Input() candidato: Candidato;
  @Output() candidatoCriado = new EventEmitter<Candidato>();

  constructor(
    private fb: FormBuilder,
    private candidatoService: CandidatoService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.candidatoForm = this.fb.group({
      nome: ["", Validators.required],
      cpf: ["", [Validators.required, Validators.maxLength(14)]],
      rg: ["", Validators.required],
      nomeDaMae: ["", Validators.required],
      nomeDoPai: ["", Validators.required],
      sexo: ["", Validators.required],
      orgaoExpedidor: ["", Validators.required],
      dataDeEmissao: ["", Validators.required],
      dataDeNascimento: ["", [Validators.required, this.validateAge]],
      nis: "",
      estadoExpedidor: "",
      nomeSocial: "",
      tituloDeEleitor: ""
    });
  }

  validateAge(control: AbstractControl) {
    const dataDeHoje = new Date();
    const anoAtual = dataDeHoje.getFullYear();

    if (control.value) {
      const anoDeNascimento = control.value.getFullYear();
      const idade = anoAtual - anoDeNascimento;
      if (idade < 18) {
        return { idadeInvalida: true };
      }
      return null;
    }
    return null;
  }

  submit() {
    const dados: DadosPrivados = this.candidatoForm.getRawValue();
    this.candidato.dadosPrivados = dados;
    if (!this.candidato.id) {
      this.cadastrarDadosCandidato(this.candidato);
    }
  }

  cadastrarDadosCandidato(candidato: Candidato) {
    this.candidatoService
      .salvarDadosPrivadosCandidato(candidato)
      .subscribe(response => {
        const novoCandidato = response;
        this.candidatoCriado.emit(novoCandidato);
      });
  }
}
