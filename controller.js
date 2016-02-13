var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape=null;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart= function(DnD) {
		//Test de la forme
		var butRect = document.getElementById('butRect'),butLine = document.getElementById('butLine'),
			spinnerWidth=document.getElementById('spinnerWidth'),colour=document.getElementById('colour');
		this.currLineWidth= spinnerWidth.value;
		this.currColour=colour.value;

		var editingMode = { rect: 0, line: 1 };
		if(butRect.checked) {
			this.currEditingMode=editingMode.rect;
		}else if(butLine.checked){
			this.currEditingMode=editingMode.line;
		}else{
			console.log('La sélection de la forme est invalide');
			console.log('Line = '+butLine.checked+butLine.innerHTML);
			console.log('Rect = '+butRect.checked+butRect.innerHTML);
		}

		switch(this.currEditingMode){
		case editingMode.rect: {
			//Création du rectangle
			var largeur = DnD.xFinal-DnD.xInitial;
			var hauteur = DnD.yFinal-DnD.yInitial;
			this.currentShape = new Rectangle(DnD.xInitial, DnD.yInitial, largeur, hauteur, this.currLineWidth, this.currColour);
			break;
			}
		case editingMode.line: {
			//Création de la ligne
			this.currentShape = new Line(DnD.xInitial, DnD.yInitial, DnD.xFinal, DnD.yFinal, this.currLineWidth, this.currColour);
				break;
			}
		}
	}.bind(this) ;

	this.onInteractionUpdate= function(DnD) {
		if(butRect.checked) {
			//Création du rectangle
			var largeur = DnD.xFinal-DnD.xInitial;
			var hauteur = DnD.yFinal-DnD.yInitial;
			this.currentShape = new Rectangle(DnD.xInitial, DnD.yInitial, largeur, hauteur, this.currLineWidth, this.currColour);
		}else if(butLine.checked){
			//Création de la ligne
			this.currentShape = new Line(DnD.xInitial, DnD.yInitial, DnD.xFinal, DnD.yFinal, this.currLineWidth, this.currColour);
		}else{
			alert('La sélection de la forme est invalide');
			console.log('La sélection de la forme est invalide');
		}
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawing.paint(ctx);
		this.currentShape.paint(ctx);
 	}.bind(this) ;

	this.onInteractionEnd= function(DnD) {
		if(butRect.checked) {
			//Création du rectangle
			var largeur = DnD.xFinal-DnD.xInitial;
			var hauteur = DnD.yFinal-DnD.yInitial;
			this.currentShape = new Rectangle(DnD.xInitial, DnD.yInitial, largeur, hauteur, this.currLineWidth, this.currColour);
		//	rec.paint(ctx);
		}else if(butLine.checked){
			//Création de la ligne
			this.currentShape = new Line(DnD.xInitial, DnD.yInitial, DnD.xFinal, DnD.yFinal, this.currLineWidth, this.currColour);
		//	line.paint(ctx);
		}else{
			alert('La sélection de la forme est invalide');
			console.log('La sélection de la forme est invalide');
		}
		//On reinitialise le canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		//Ajout de la forme à la liste de dessins du canvas
		drawing.addForm(this.currentShape);
		//On recree la liste de dessins du canvas
		drawing.paint(ctx, canvas);
        //Mise à jour de la liste de formes du dessin
        drawing.updateShapeList(this.currentShape);
	}.bind(this);
}