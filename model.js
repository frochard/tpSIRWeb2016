
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !


//Classe Drawing
function Drawing() {
    //Déclarer un array
    this.forms = new Array();
};


//Classe Form
function Form(epaisseur, couleur) {
    this.couleur=couleur;
    this.epaisseur=epaisseur;
};


//Classe Rectangle
function Rectangle(originX, originY, width, height, epaisseur, couleur) {
    Form.call(this, couleur, epaisseur);
    this.originX=originX;
    this.originY=originY;
    this.width=width;
    this.height=height;
};
Rectangle.prototype = new Form();


//Classe Line
function Line(xA, yA, xB, yB, epaisseur, couleur) {
    Form.call(this, couleur, epaisseur);
    this.xA=xA;
    this.yA=yA;
    this.xB=xB;
    this.yB=yB;
};
Rectangle.prototype = new Form();

