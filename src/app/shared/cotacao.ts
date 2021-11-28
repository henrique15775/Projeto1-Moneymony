import { DecimalPipe } from "@angular/common";

export class Cotacao{
  id!:number;
  url_moeda!: string;
 
  ask!: number;
bid!: number;
code!: string;
codein!: string;
create_date!: string;
high!: number;
low!: number;
name!: string;
pctChange!: number;
timestamp!: number;
varBid!: number;
}


/*
ask: "0.1783"
bid: "0.1782"
code: "BRL"
codein: "USD"
create_date: "2021-11-26 18:30:00"
high: "0.1796"
low: "0.1768"
name: "Real Brasileiro/Dólar Americano"
pctChange: "-0.76"
timestamp: "1637962200"
varBid: "-0.0014"
*/