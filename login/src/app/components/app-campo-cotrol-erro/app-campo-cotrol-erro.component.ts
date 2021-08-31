import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-campo-cotrol-erro',
  templateUrl: './app-campo-cotrol-erro.component.html',
  styleUrls: ['./app-campo-cotrol-erro.component.scss']
})
export class AppCampoCotrolErroComponent implements OnInit {

  @Input() mostrarErro: boolean | undefined;

  @Input() msgErro: string | undefined;

  @Input() mostrarErro2: boolean | undefined;

  @Input() msgErro2: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
