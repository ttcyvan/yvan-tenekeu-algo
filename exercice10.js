class Allcarte {
    constructor(couleur, numero, type) {
        this.couleur = couleur;
        this.numero = numero;
        this.type = type;
    }
}

let carte = new Allcarte("rouge", 2, "pic");
console.log(carte);