class Player{
  constructor(name, type){
    this.name = name;
    this.type = type;
  }
  introduce (name, type){
    console.log(`Hello I'm ${this.name} and I'm an ${this.type}`);
  }
}

class EntryFragger extends Player{
  constructor(name,type){
    super(name,type)
  }
  runInWithoutFlash(){
    console.log(`The ${this.type} has been killed.`)
  }
}

const player1 = new EntryFragger("Ege","Entry Fragger");

//PlayTime
player1.introduce();
player1.runInWithoutFlash();
