import { Component, OnInit, EventEmitter  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TabelaService } from './../../tabela.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(private forBuilder: FormBuilder, private service: TabelaService) {
   }

  ngOnInit(): void {

    this.formulario = this.forBuilder.group({
      nome: ["", [Validators.required, Validators.minLength(8)]],
      email: ["", [Validators.required, Validators.email]],
      userName: ["", [Validators.required, Validators.maxLength(5)]],
      senha: ["", Validators.required]
    });
  }
  

  onSubmit(){
    
    if (this.formulario.valid) {
      console.log(this.formulario)
      this.service.create(this.formulario.value).subscribe(
        success => console.log('sucesso'),
        error => console.log(error),
      );
    //  this.formulario.reset();
    } else {
      Object.keys(this.formulario.controls).forEach(campo => {
        const controle = this.formulario.get(campo);
        controle.markAsTouched();
      });

    }
  }

  verificaValidTouched(campo: any) {
   return !this.formulario.get(campo).valid && this.formulario.get(campo).touched && this.formulario.get(campo)?.value != "";
  }
  verificaValueTouched(campo: any){
    return this.formulario.get(campo).touched && this.formulario.get(campo).value == "";
   }
   

  aplicaCssErro(campo: any){
    return{
      "is-invalid": this.verificaValidTouched(campo) || this.verificaValueTouched(campo)
    }
  }

}
