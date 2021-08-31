import { Component, OnInit, EventEmitter  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private forBuilder: FormBuilder) {
   }

  ngOnInit(): void {

    this.formulario = new FormGroup({ 
      nome: new FormControl("", [Validators.required, Validators.minLength(8)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      userName: new FormControl("", [Validators.required, Validators.maxLength(5)]),
      senha: new FormControl("", Validators.required)
    });

    /*this.formulario = new this.forBuilder.group({
      nome: [null],
      email: [null]
    });*/
  }

  onSubmit(){
    console.log(this.formulario)
    this.formulario.reset();
  }

  verificaValidTouched(campo: any){
   return !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched && this.formulario.get(campo)?.value != "";
  }
  verificaValueTouched(campo: any){
    return this.formulario.get(campo)?.touched && this.formulario.get(campo)?.value == "";
   }

  aplicaCssErro(campo: any){
    return{
      "is-invalid": this.verificaValidTouched(campo) || this.verificaValueTouched(campo)
    }
  }

}
