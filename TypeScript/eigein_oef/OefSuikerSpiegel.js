class SuikerSpiegel {
    constructor(dag, maand, jaar) {
        this.datum = new Date(jaar, maand - 1, dag); // in JavaScript maand begint vanaf 0
        this.bloedsuikerwaarden = new Array(SuikerSpiegel.aantalMetingen);
    }
    ;
    toString() {
        let result;
        let datum = this.datum.toLocaleDateString("nl-BE");
        result = "bloedsuikerwaarden op " + datum + " is " + this.waardenToString();
        return result;
    }
    ;
    waardenToString() {
        let result = "";
        for (let i = 0; i < SuikerSpiegel.aantalMetingen; i++) {
            result += this.bloedsuikerwaarden[i];
            if (this.isHypo(i)) {
                result += " HYPO";
            }
            if (this.isHyper(i)) {
                result += " HYPER";
            }
            result += "\n";
        }
        return result;
    }
    noteer(metingNr, waarde) {
        if (metingNr >= 0 && metingNr < SuikerSpiegel.aantalMetingen) {
            this.bloedsuikerwaarden[metingNr] = waarde;
        }
    }
    ;
    isHypo(index) {
        let result = false;
        if (this.bloedsuikerwaarden[index] < SuikerSpiegel.hypo) {
            result = true;
        }
        return result;
    }
    ;
    isHyper(index) {
        let result = false;
        if (this.bloedsuikerwaarden[index] < SuikerSpiegel.hyper) {
            result = true;
        }
        return result;
    }
    ;
    get aantalHypos() {
        let aantal = 0;
        for (let i = 0; i < SuikerSpiegel.aantalMetingen; i++) {
            if (this.isHypo(i)) {
                aantal++;
            }
        }
        return aantal;
    }
    ;
    get aantalHyper() {
        let aantal = 0;
        for (let i = 0; i < SuikerSpiegel.aantalMetingen; i++) {
            if (this.isHyper(i)) {
                aantal++;
            }
        }
        return aantal;
    }
    ;
}
SuikerSpiegel.aantalMetingen = 4;
SuikerSpiegel.hypo = 60;
SuikerSpiegel.hyper = 250;
;
let diabet = new SuikerSpiegel(20, 11, 2017);
console.log(diabet);
// hoofdprog
let spiegel1 = new SuikerSpiegel(23, 10, 2014);
console.log("NA CREATIE");
console.log(spiegel1.toString());
console.log("aantal hypos: %s", spiegel1.aantalHypos);
console.log("aantal hypers: %s", spiegel1.aantalHyper);
spiegel1.noteer(0, 100);
spiegel1.noteer(1, 120);
spiegel1.noteer(2, 55);
spiegel1.noteer(3, 255);
spiegel1.noteer(4, 75);
spiegel1.noteer(-1, 66);
console.log("Na Noteer");
console.log(spiegel1.toString());
for (let i = 0; i < 4; i++) {
    let isHypo = spiegel1.isHypo(i);
    let isHyper = spiegel1.isHyper(i);
    console.log(i + (isHypo ? " hypo" : isHyper ? " hyper" : " ok"));
}
console.log("aantal hypos: %s", spiegel1.aantalHypos);
console.log("aantal hypers: %s", spiegel1.aantalHyper);
