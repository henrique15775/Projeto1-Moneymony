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
  cadastroFlag = true;
  constructor(private cadastroService: CadastrarCotacaoService,  private roteador: Router ) {

    this.cotacao = new Cotacao();
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
    if (!this.cotacao.id) {
      console.log('aqui');
      this.cadastroService.inserir(this.cotacao).subscribe(
        cotacaoInserido => {
          console.log(cotacaoInserido);
          this.roteador.navigate(['viewcotacao']);
        }
      );
    }
  }

}
