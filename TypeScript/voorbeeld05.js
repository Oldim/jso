/* readonly prop */
var Cirkel = /** @class */ (function () {
    function Cirkel(straal) {
        this.straal = straal;
    }
    Cirkel.prototype.oppervlakte = function () {
        //this.straal += 1;  // compileerfout
        return Math.PI * this.straal * this.straal;
    };
    return Cirkel;
}());
var cirkel = new Cirkel(10);
console.log(cirkel.oppervlakte());
