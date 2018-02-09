export class HogerLager {
    public txtNumber: number;
    public teRaden: number;
    public aantalBeurten: number =0;
    public geraden: boolean;

    constructor() {
        this.teRaden = this.maakWilGetal();
    };

    maakWilGetal(): number {
        return Math.floor((Math.random() * 100) + 1);
    }

    controleGetal(invoerGetal) {
            this.aantalBeurten++;
            console.log(this.teRaden);
            switch (true) {
                case this.teRaden > invoerGetal:
                    return "Random getal is hoger";                  
                case this.teRaden < invoerGetal:
                    return "Random getal is lager";
                default: this.geraden= true; return "juist";
            }
    }

    reset(): void {
        // if (this.txtNumber.valid) {
        //     console.log("Form Submitted!");
        //     this.txtNumber.reset();
        //   }
        
        this.geraden =false;
        this.aantalBeurten =0;
        this.teRaden = this.maakWilGetal();
    }

}

