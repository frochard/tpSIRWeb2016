
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
    //Affectation couleur et epaisseur
    ctx.lineWidth=this.epaisseur;
    ctx.strokeStyle=this.couleur;

    console.log("ctx", JSON.stringify(this));
    console.log(this.originX, this.originY, this.originX+this.width, this.originY+this.height);
    ctx.rect(this.originX, this.originY, this.originX+this.width, this.originY+this.height);
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    console.log("ctx", JSON.stringify(this));
    console.log(this.originX, this.originY, this.originX+this.width, this.originY+this.height);

    ctx.beginPath();
    ctx.moveTo(this.xA, this.yA);
    ctx.lineTo(this.xB, this.yB);
    //Affectation couleur et epaisseur
    ctx.lineWidth=this.epaisseur;
    ctx.strokeStyle=this.couleur;
    ctx.stroke();
};


Drawing.prototype.paint = function(ctx) {
    console.log(this.forms);
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.forms.forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

