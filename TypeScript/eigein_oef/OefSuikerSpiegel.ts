
class SuikerSpiegel {
    private static readonly aantalMetingen: number = 4;
   private static readonly hypo=60;
   private static readonly hyper= 250;
    private bloedsuikerwaarden: Array<number>;
    datum: Date;
    constructor(dag: number, maand: number, jaar: number) {
        this.datum =new Date(jaar, maand-1, dag); // in JavaScript maand begint vanaf 0
        this.bloedsuikerwaarden = new Array<number>(SuikerSpiegel.aantalMetingen);
    };
    toString(): string{
        let result: string;
        let datum = this.datum.toLocaleDateString("nl-BE");
        result = "bloedsuikerwaarden op " + datum + " is "+ this.waardenToString();
    };
    private waardenToString(): string{
        let result: string= "";
        for(let i:number=0; i<SuikerSpiegel.aantalMetingen;i++){

        }
    }


    noteer(metingNr: number, waarde: number) :void {
        if(metingNr>=0 && metingNr < SuikerSpiegel.aantalMetingen){
            this.bloedsuikerwaarden[metingNr]= waarde;
        }         
    };
    isHypo(index: number): boolean{
        let result: boolean= false;
        if(this.bloedsuikerwaarden[index]<SuikerSpiegel.hypo){
            result = true;
        }
        return result;
    };
    isHyper(index: number): boolean{
        let result: boolean= false;
        if(this.bloedsuikerwaarden[index]<SuikerSpiegel.hyper){
            result = true;
        }
        return result;
    };
    get aantalHypos():number{
        let aantal: number=0;
        for(let i:number=0;i<SuikerSpiegel.aantalMetingen; i++){
            if(this.isHypo(i)){
                aantal++;
            }
        }
        return aantal;
    };
    get aantalHyper():number{
        let aantal: number=0;
        for(let i:number=0;i<SuikerSpiegel.aantalMetingen; i++){
            if(this.isHyper(i)){
                aantal++;
            }
        }
        return aantal;
    };
}





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

let diabet: SuikerSpiegel = new SuikerSpiegel(20,11,2017);
console.log(diabet);
// diabet.noteer();

// console.log(diabet.noteer());
// let bericht: string = willekeurigBericht();
// console.log(bericht);
