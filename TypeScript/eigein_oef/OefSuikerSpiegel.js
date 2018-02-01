var SuikerSpiegel = /** @class */ (function () {
    function SuikerSpiegel(dag, maand, jaar) {
        this.datum = new Date(jaar, maand, dag);
        this.bloedsuikerwaarden = new Array();
    }
    ;
    SuikerSpiegel.prototype.noteer = function (metingNr, waarde) {
        this.bloedsuikerwaarden[metingNr] = waarde;
    };
    return SuikerSpiegel;
}());
// class AantalHypos{
//     static AantalHypos: number = 0;  // static => gemeenschappelijk voor alle instanties
//     constructor(public bronRekening: Bankrekening, 
//         public doelRekening: Bankrekening, public bedrag: number){
//     }
//     noteer(): void {
//         this.bronRekening.haalAf(this.bedrag);
//         this.doelRekening.stort(this.bedrag);
//         Overschrijving.aantalUitgevoerd++;
//     }
// }
// isHypo(){
// };
var diabet = new SuikerSpiegel(20, 11, 2017);
console.log(diabet);
// diabet.noteer();
// console.log(diabet.noteer());
// let bericht: string = willekeurigBericht();
// console.log(bericht);
