export class Broodje  {
    constructor(public naam: string, public prijs: number) { }

  }



export class BestelLijn  {
    constructor(public broodje: Broodje, public aantal: number) {  }
  }

  export class Bestelling  {
    constructor(public bestellijn: BestelLijn) {  }

    voegLijnToe(){
        
    }
  }

  
  export let broodjes: Broodje[] = new Array<Broodje>();
  broodjes.push(new Broodje("ham", 15));
  broodjes.push(new Broodje("tonijn", 13));
  broodjes.push(new Broodje("curry", 25));
  broodjes.push(new Broodje("kaas", 15));