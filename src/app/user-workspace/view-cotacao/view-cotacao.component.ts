import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import { Cotacao } from '../../shared/cotacao';
import { Observable } from 'rxjs';
import { Cotacao } from 'src/app/shared/cotacao';
//import { CotacaoService } from '../shared/services/cotacao.service';
import { isDefined } from '@angular/compiler/src/util';
import { CadastrarCotacaoService } from 'src/app/shared/services/cadastrar-cotacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-cotacao',
  templateUrl: './view-cotacao.component.html',
  styleUrls: ['./view-cotacao.component.scss']
})

export class ViewCotacaoComponent implements OnInit {

  cotacoesMoney!: Array<Cotacao>;
  ola!:Array<any>
  constructor(private httpClient: HttpClient, private cadastroService: CadastrarCotacaoService,  private roteador: Router ) {

  this.ola = new Array<any>();
  this.cotacoesMoney = new Array<Cotacao>();
   }
  ngOnInit() {
   this.cadastroService.listar().subscribe(
     cotacoes => {this.cotacoesMoney = cotacoes;}
   );

  }

  get_moeda(): void{
    this.ola= new Array<any>();
    console.log(this.cotacoesMoney);
    for(let x of this.cotacoesMoney){
    console.log(x.url_moeda);
    this.httpClient.get<any>(`https://economia.awesomeapi.com.br/json/last/${x.url_moeda}`).subscribe(
      response=>{

        let separe = x.url_moeda.split('-');
        console.log(separe);
        let str = separe[0].concat("",separe[1]);
        console.log(str);
        this.ola.push(response[str]);
        console.log(response[str]);

    }
    )
  }
  }
  }

