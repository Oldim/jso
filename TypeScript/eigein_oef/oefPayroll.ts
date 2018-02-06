abstract class Werknemer {
    constructor(public voornaam: string, public naam: string, public ssn: number, public soort:string) { }
    abstract get weeksalaris(): number;
}

class UurWerknemer extends Werknemer {
    constructor(voornaam: string, naam: string, ssn: number, public aantalUren: number, public overUren: number, public bedragPerUur: number) {
        super(voornaam, naam, ssn, "Uur Werknemer");
    }
    get weeksalaris(): number {
        return ( this.aantalUren + (this.overUren * 1.5) ) * this.bedragPerUur;
    }
}

class VasteWerknemer extends Werknemer {
    constructor(voornaam: string, naam: string, ssn: number,  public weekLoon: number) {
        super(voornaam, naam, ssn,"Vaste Werknemer");
    }
    get weeksalaris(): number {
        return this.weekLoon;
    }
}

class VerkopersP extends Werknemer {
    constructor(voornaam: string, naam: string, ssn: number,  public percent: number, public weekVerkoop:number) {
        super(voornaam, naam, ssn, "Verkoper met Percent");
    }
    get weeksalaris(): number {
        return (this.percent/100)*this.weekVerkoop;
    }
}

class VerkopersVP extends Werknemer {
    constructor(voornaam: string, naam: string, ssn: number,public weekLoon: number,  public percent: number, public weekVerkoop:number) {
        super(voornaam, naam, ssn, "verkoper met Vaste en Percent");
    }
    get weeksalaris(): number {
        return this.weekLoon+(this.percent/100)*this.weekVerkoop;
    }
}

let werknemers: Werknemer[] = new Array<Werknemer>();
werknemers.push(new VasteWerknemer("VWvoornaam","VWnaam", 451212410, 1500));
werknemers.push(new UurWerknemer("UWvoornaam","UWnaam", 351212410, 30,0, 13));
werknemers.push(new VerkopersP("Vvoornaam","Vnaam", 251212410,13,180));
werknemers.push(new VerkopersVP("VPvoornaam","VPnaam", 151212410,1500,13,180));
for(let werknemer of werknemers){
    if(werknemer instanceof VerkopersVP){
        werknemer.weekLoon*=1.10;
    }
    console.log(" %s ", werknemer.soort);
    console.log("\tvoornaam: %s\tnaam: %s\tssn: %s", werknemer.voornaam, 
    werknemer.naam, werknemer.ssn);
    console.log("weeksalaris: %s",werknemer.weeksalaris);
    console.log("");
    
}



