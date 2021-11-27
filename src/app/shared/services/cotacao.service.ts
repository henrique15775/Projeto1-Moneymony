import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cotacao } from '../cotacao';

@Injectable({
  providedIn: 'root'
})
export class CotacaoService {
  cotacoes_moedas = 'https://economia.awesomeapi.com.br/json/last/';

  constructor(private httpClient: HttpClient) {
  }
  cotaces=  this.httpClient.get<any>(`http://localhost:3000/`);
  listar(): Array<any>{
    let cotacoes_aray = new Array<any>(this.cotaces);
    for(let x of cotacoes_aray ){
    cotacoes_aray.push(this.httpClient.get<any>(`${this.cotacoes_moedas}/${x.nick_moeda}`));
    }
    return cotacoes_aray;
  }
  }
/*
  inserir(cotacao: Cotacao): Observable<Cotacao> {
    return this.httpClient.post<any>(this.cotacoes_moedas, cotacao);
  }*/


