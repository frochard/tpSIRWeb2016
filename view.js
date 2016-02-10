// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
    /*  console.log("ctx", JSON.stringify(this));
     console.log(this.originX, this.originY, this.width, this.height);*/
    //Affectation couleur et epaisseur
    ctx.lineWidth=this.epaisseur;
    ctx.strokeStyle=this.couleur;
    ctx.rect(this.originX, this.originY, this.width, this.height);
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
 /*   console.log("ctx", JSON.stringify(this));
    console.log(this.originX, this.originY, this.width, this.height);*/
    ctx.beginPath();
    //Affectation couleur et epaisseur
    ctx.lineWidth=this.epaisseur;
    ctx.strokeStyle=this.couleur;
    ctx.moveTo(this.xA, this.yA);
    ctx.lineTo(this.xB, this.yB);
    ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.forms.forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

Drawing.prototype.updateShapeList = function(pencil){
    var newForm = document.createElement('li');
    newForm.id    = pencil.currEditingMode;
    newForm.title = pencil.currEditingMode;
    newForm.innerHTML=pencil.currEditingMode;
    document.getElementById('shapeList').appendChild(newForm);
};
