
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
        return result;
    };
    

    private waardenToString(): string {
		let result: string = "";
		for (let i: number = 0; i < SuikerSpiegel.aantalMetingen; i++) {
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
};


let diabet: SuikerSpiegel = new SuikerSpiegel(20,11,2017);
console.log(diabet);


// hoofdprog
let spiegel1: SuikerSpiegel = new SuikerSpiegel(23, 10, 2014);
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
for (let i: number = 0; i < 4; i++) {
	let isHypo: boolean = spiegel1.isHypo(i);
	let isHyper: boolean = spiegel1.isHyper(i);
	console.log(i + (isHypo ? " hypo" : isHyper ? " hyper" : " ok"));
}
console.log("aantal hypos: %s", spiegel1.aantalHypos);
console.log("aantal hypers: %s", spiegel1.aantalHyper);