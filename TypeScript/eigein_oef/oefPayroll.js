class Werknemer {
    constructor(voornaam, naam, ssn, soort) {
        this.voornaam = voornaam;
        this.naam = naam;
        this.ssn = ssn;
        this.soort = soort;
    }
}
class UurWerknemer extends Werknemer {
    constructor(voornaam, naam, ssn, aantalUren, overUren, bedragPerUur) {
        super(voornaam, naam, ssn, "Uur Werknemer");
        this.aantalUren = aantalUren;
        this.overUren = overUren;
        this.bedragPerUur = bedragPerUur;
    }
    get weeksalaris() {
        return (this.aantalUren + (this.overUren * 1.5)) * this.bedragPerUur;
    }
}
class VasteWerknemer extends Werknemer {
    constructor(voornaam, naam, ssn, weekLoon) {
        super(voornaam, naam, ssn, "Vaste Werknemer");
        this.weekLoon = weekLoon;
    }
    get weeksalaris() {
        return this.weekLoon;
    }
}
class VerkopersP extends Werknemer {
    constructor(voornaam, naam, ssn, percent, weekVerkoop) {
        super(voornaam, naam, ssn, "Verkoper met Percent");
        this.percent = percent;
        this.weekVerkoop = weekVerkoop;
    }
    get weeksalaris() {
        return (this.percent / 100) * this.weekVerkoop;
    }
}
class VerkopersVP extends Werknemer {
    constructor(voornaam, naam, ssn, weekLoon, percent, weekVerkoop) {
        super(voornaam, naam, ssn, "verkoper met Vaste en Percent");
        this.weekLoon = weekLoon;
        this.percent = percent;
        this.weekVerkoop = weekVerkoop;
    }
    get weeksalaris() {
        return this.weekLoon + (this.percent / 100) * this.weekVerkoop;
    }
}
let werknemers = new Array();
werknemers.push(new VasteWerknemer("VWvoornaam", "VWnaam", 451212410, 1500));
werknemers.push(new UurWerknemer("UWvoornaam", "UWnaam", 351212410, 30, 0, 13));
werknemers.push(new VerkopersP("Vvoornaam", "Vnaam", 251212410, 13, 180));
werknemers.push(new VerkopersVP("VPvoornaam", "VPnaam", 151212410, 1500, 13, 180));
for (let werknemer of werknemers) {
    if (werknemer instanceof VerkopersVP) {
        werknemer.weekLoon *= 1.10;
    }
    console.log(" %s ", werknemer.soort);
    console.log("\tvoornaam: %s\tnaam: %s\tssn: %s", werknemer.voornaam, werknemer.naam, werknemer.ssn);
    console.log("weeksalaris: %s", werknemer.weeksalaris);
    console.log("");
}
