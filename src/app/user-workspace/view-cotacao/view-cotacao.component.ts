import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import { Cotacao } from '../../shared/cotacao';
import { Observable } from 'rxjs';
import { Cotacao } from 'src/app/shared/cotacao';
import { CotacaoService } from 'src/app/shared/services/cotacao.service';

@Component({
  selector: 'app-view-cotacao',
  templateUrl: './view-cotacao.component.html',
  styleUrls: ['./view-cotacao.component.scss']
})

export class ViewCotacaoComponent implements OnInit {

  cotacoesMoney!: Array<Cotacao>;
  ola!:any;
  constructor(private httpClient: HttpClient) {

   }
  ngOnInit() {

  }

  get_moeda(){
    this.httpClient.get<any>('https://economia.awesomeapi.com.br/json/last/BRL-USD').subscribe(
      response=>{
        this.ola = response;
        console.log(response.BRLUSD)
      }
    )
  }

  cadastrar_moeda(): void{

  }

}
