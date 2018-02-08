export class Broodje  {
    constructor(public naam: string, public prijs: number) { }

  }

export class BestelLijn  {
    constructor(public broodje: Broodje, public aantal: number) {  }
  }

  export class Bestelling  {
    constructor(public bestellijnen: BestelLijn[], private prijs, public aantal: number) {  }

    voegLijnToe(lijn: BestelLijn):void{
       
    }
    totaalprijs():number{
        return this.aantal * this.prijs;
    }
  }

  export let broodjes: Broodje[] = new Array<Broodje>();
  broodjes.push(new Broodje("ham", 3.5));
  broodjes.push(new Broodje("tonijn", 2.3));
  broodjes.push(new Broodje("curry", 2.5));
  broodjes.push(new Broodje("kaas", 3.5));


