// Implémentation des fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
    ctx.beginPath();
    //Affectation couleur et epaisseur
    ctx.lineWidth=this.epaisseur;
    ctx.strokeStyle=this.couleur;
    ctx.rect(this.originX, this.originY, this.width, this.height);
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    ctx.beginPath();
    //Affectation couleur et epaisseur
    ctx.lineWidth=this.epaisseur;
    ctx.strokeStyle=this.couleur;
    ctx.moveTo(this.xA, this.yA);
    ctx.lineTo(this.xB, this.yB);
    ctx.stroke();
};

Circle.prototype.paint = function(ctx) {
    ctx.beginPath();
    //Affectation couleur et epaisseur
    ctx.lineWidth=this.epaisseur;
    ctx.strokeStyle=this.couleur;
    ctx.arc(this.xCenter,this.yCenter,this.radius,0,2*Math.PI,true);
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

Drawing.prototype.updateShapeList = function(form){
    //Récupération de l'élément html à alimenter
    var myShapeList = document.getElementById('shapeList');
    //Calcul de l'identifiant
    var i = myShapeList.childNodes.length;
    //Création de l'élément html à insérer
    var newForm = document.createElement('li');
    //Affectation de l'id de l'élément html inséré
    newForm.id    = 'form'+i;
    //Test du type de forme
    if(form instanceof Rectangle){
        //Affectation des attributs
        newForm.title = "rectangle";
        newForm.innerHTML=i+" rectangle";
    }else if (form instanceof Line){
        //Affectation des attributs
        newForm.title = "ligne";
        newForm.innerHTML=i+" ligne";
    }else if (form instanceof Circle){
    //Affectation des attributs
        newForm.title = "cercle";
        newForm.innerHTML=i+" cercle";
    }
    //Ajout de la forme dans une ligne de la liste
    myShapeList.appendChild(newForm);
    //Ajout du bouton
    var newButton = document.createElement('button');
    newButton.id = i;
    newButton.setAttribute('class','btn btn-default');
    newButton.setAttribute('type', 'button');
    newButton.setAttribute('onClick', 'drawing.removeShapeFromList(id)');
    newForm.appendChild(newButton);
    var newSpan= document.createElement('span')
    newSpan.setAttribute('class', 'glyphicon glyphicon-remove-sign');
    newButton.appendChild(newSpan);
};

Drawing.prototype.removeShapeFromList = function(index) {
    //Suppression de la forme dans la liste du dessin
    this.removeForm(index);
    //On reinitialise le canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //On recree la liste de dessins du canvas
    drawing.paint(ctx, canvas);
    //Mise à jour de la liste de formes du dessin
    //On suppprime toute la liste de formes
    var shapeList = document.getElementById('shapeList');
    while( shapeList.firstChild) {
        // La liste n'est pas une copie, elle sera donc réindexée à chaque appel
        shapeList.removeChild( shapeList.firstChild);
    }
    //on parcourt la liste de forme du dessin
    for(var i= 0, nb=drawing.forms.length;i<nb;i++){
        //On ajoute la forme à la liste
        drawing.updateShapeList(drawing.forms[i]);
    }
}