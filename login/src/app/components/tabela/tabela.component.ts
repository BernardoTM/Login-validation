import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TabelaService } from './../../tabela.service';
import { catchError, delay } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {


  tabela$: Observable<any>;
  error$ = new Subject<boolean>();

  constructor(private service: TabelaService) { }

  ngOnInit(): void {
    //this.service.list().subscribe(dados => this.tabela = dados);

    this.tabela$ = this.service.list() 
    .pipe(
      delay(2000),
      catchError(error => {
        console.error(error);
        this.error$.next(true);
        return of();
      })
    );
  }

}
