export class Hero  {
    constructor(public id: number, public naam: string, public bl: boolean) { }

  }



  export let heroes: Hero[] = new Array<Hero>();
  heroes.push(new Hero(1,"Mega Mindy", true));
  heroes.push(new Hero(2,"Tonno", false));
  heroes.push(new Hero(3,"Spong Bob", true));
  heroes.push(new Hero(4,"Petrik", false));
