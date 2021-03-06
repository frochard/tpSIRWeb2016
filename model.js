//Classe Drawing
function Drawing() {
    //Déclarer un array
    this.forms = new Array();
    //Méthode pour l'ajout dune forme dans le tableau
    this.addForm = function(form) {
        this.forms.push(form);
    };
    this.removeForm = function(index) {
        this.forms.splice(index,1);
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

//Classe Line
function Line(xA, yA, xB, yB, epaisseur, couleur) {
    Form.call(this, epaisseur, couleur);
    this.xA=xA;
    this.yA=yA;
    this.xB=xB;
    this.yB=yB;
};

//Classe Circle
function Circle(xCenter, yCenter, radius, epaisseur, couleur) {
    Form.call(this, epaisseur, couleur);
   this.xCenter=xCenter;;
    this.yCenter=yCenter;
    this.radius=radius;
};