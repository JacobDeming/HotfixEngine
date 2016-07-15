export class Environment {
  rain: boolean;
  fog: boolean;
  lightning: boolean;
  sunshine: boolean;
  hail: boolean;
  wind: boolean;

  constructor(rain:boolean,fog:boolean,lightning:boolean,sunshine:boolean,hail:boolean,wind:boolean){
    this.rain = rain;
    this.fog = fog;
    this.lightning = lightning;
    this.sunshine = sunshine;
    this.wind = wind;
  }
}