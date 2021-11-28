import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cotacao } from 'src/app/shared/cotacao';
import { CadastrarCotacaoService } from 'src/app/shared/services/cadastrar-cotacao.service';

@Component({
  selector: 'app-cadastrar-cotacao',
  templateUrl: './cadastrar-cotacao.component.html',
  styleUrls: ['./cadastrar-cotacao.component.scss']
})
export class CadastrarCotacaoComponent implements OnInit {
  cotacao!: Cotacao;
  cadastroFlag !: boolean;
  array_cotacao!: Array<Cotacao>;
  aviso!: string;
  constructor(private cadastroService: CadastrarCotacaoService,  private roteador: Router ) {

    this.cotacao = new Cotacao();
    this.cadastroFlag = true;

    this.cadastroService.listar().subscribe(
      resposta => {this.array_cotacao = resposta;}
    );
   /* if (this.rotalAtual.snapshot.paramMap.has('id')) {
      this.cadastroFlag = false;
      const idParaEdicao = Number(this.rotalAtual.snapshot.paramMap.get('id'));
      // pegar do banco usuario id=idParaEdicao
      this.cadastroService.pesquisarPorId(idParaEdicao).subscribe(
        cadastroRetornado => this.cotacao = cadastroRetornado
      );
    }*/
  }

  ngOnInit(): void {
  }

  inserirCotacao(): void {
    this.cadastroService.listar().subscribe(
      resposta => {this.array_cotacao = resposta;}
    );

    for(let x of this.array_cotacao){
      if(x.url_moeda === this.cotacao.url_moeda){
        console.log('ENTROUAQ');
        this.cadastroFlag = false;
        break;
      }
    }
    if (!this.cotacao.id && this.cadastroFlag ==true ) {

      this.cadastroService.inserir(this.cotacao).subscribe(
        cotacaoInserido => {
          console.log(cotacaoInserido);

        }
      );
    }else{
      this.aviso = `${this.cotacao.url_moeda} já cadastrado!`
    this.cadastroFlag = true;
  }
  }

}
