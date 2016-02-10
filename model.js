// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

//Classe Drawing
function Drawing() {
    //Déclarer un array
    this.forms = new Array();
    //Méthode pour l'ajout dune forme dans le tableau
    this.addForm = function(form) {
        this.forms.push(form);
    };
};

//Classe Form
function Form(epaisseur, couleur) {
    this.epaisseur=epaisseur;
    this.couleur=couleur;
};

//Classe Rectangle
function Rectangle(originX, originY, width, height, epaisseur, couleur) {
    Form.call(this, epaisseur, couleur);
    this.originX=originX;
    this.originY=originY;
    this.width=width;
    this.height=height;
};
Rectangle.prototype = new Form();

//Classe Line
function Line(xA, yA, xB, yB, epaisseur, couleur) {
    Form.call(this, epaisseur, couleur);
    this.xA=xA;
    this.yA=yA;
    this.xB=xB;
    this.yB=yB;
};
Rectangle.prototype = new Form();
