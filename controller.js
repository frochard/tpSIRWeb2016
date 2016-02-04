var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart= function(DnD) {


		//Test de la forme
		var butRect = document.getElementById('butRect'),butLine = document.getElementById('butLine'),
			spinnerWidth=document.getElementById('spinnerWidth'),colour=document.getElementById('colour');
		this.currLineWidth= spinnerWidth.innerHTML;
		this.currColour=colour.innerHTML;
		console.log(this.currColour+' '+this.currLineWidth);

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
			var rec = new Rectangle(DnD.xInitial, DnD.yInitial, DnD.xFinal-DnD.xInitial, DnD.yFinal-DnD.yInitial, this.currLineWidth, this.currColour);
			break;
			}
		case editingMode.line: {
			//Création de la ligne
				var line = new Line(DnD.xInitial, DnD.yInitial, DnD.xFinal-DnD.xInitial, DnD.yFinal-DnD.yInitial, this.currLineWidth, this.currColour);
				break;
			}
		}
	}.bind(this) ;

	this.onInteractionUpdate= function(DnD) {
		if(butRect.checked) {
			//Création du rectangle
			var rec = new Rectangle(DnD.xInitial, DnD.yInitial, DnD.xFinal-DnD.xInitial, DnD.yFinal-DnD.yInitial, this.currLineWidth, this.currColour);
		}else if(butLine.checked){
			//Création de la ligne
			var line = new Line(DnD.xInitial, DnD.yInitial, DnD.xFinal-DnD.xInitial, DnD.yFinal-DnD.yInitial, this.currLineWidth, this.currColour);
		}else{
			alert('La sélection de la forme est invalide');
			console.log('La sélection de la forme est invalide');
		}
	//	rec.paint(ctx);
/*		console.log("x initial : " + DnD.xInitial);
		console.log("y initial : " + DnD.yInitial);
		console.log("x final : " + DnD.xFinal);
		console.log("y final : " + DnD.yFinal);
*/
 }.bind(this) ;

	this.onInteractionEnd= function(DnD) {
		if(butRect.checked) {
			//Création du rectangle
			var rec = new Rectangle(DnD.xInitial, DnD.yInitial, DnD.xFinal-DnD.xInitial, DnD.yFinal-DnD.yInitial, this.currLineWidth, this.currColour);
			rec.paint(ctx);
		}else if(butLine.checked){
			//Création de la ligne
			var line = new Line(DnD.xInitial, DnD.yInitial, DnD.xFinal-DnD.xInitial, DnD.yFinal-DnD.yInitial, this.currLineWidth, this.currColour);
			line.paint(ctx);
		}else{
			alert('La sélection de la forme est invalide');
			console.log('La sélection de la forme est invalide');
		}
/*		console.log("x initial : " + DnD.xInitial);
		console.log("y initial : " + DnD.yInitial);
		console.log("x final : " + DnD.xFinal);
		console.log("y final : " + DnD.yFinal);*/

		//Ajout de la forme à la liste de sessins du canvas

	}.bind(this) ;
};