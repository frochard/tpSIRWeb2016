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


		//Création du rectangle
		var rec = new Rectangle(DnD.xInitial, DnD.yInitial, DnD.xFinal-DnD.xInitial, DnD.yFinal-DnD.yInitial, this.currLineWidth, this.currColour);
	//	rec.paint(ctx);

		//Ajout de la forme au tableau de dessins

	}.bind(this) ;

	this.onInteractionUpdate= function(DnD) {
		//Modif du rectangle
		var rec = new Rectangle(DnD.xInitial, DnD.yInitial, DnD.xFinal-DnD.xInitial, DnD.yFinal-DnD.yInitial, this.currLineWidth, this.currColour);
	//	rec.paint(ctx);
/*		console.log("x initial : " + DnD.xInitial);
		console.log("y initial : " + DnD.yInitial);
		console.log("x final : " + DnD.xFinal);
		console.log("y final : " + DnD.yFinal);
*/
 }.bind(this) ;

	this.onInteractionEnd= function(DnD) {
		var rec = new Rectangle(DnD.xInitial, DnD.yInitial, (DnD.xFinal-DnD.xInitial), (DnD.yFinal-DnD.yInitial), this.currLineWidth, this.currColour);
		rec.paint(ctx);
		console.log("x initial : " + DnD.xInitial);
		console.log("y initial : " + DnD.yInitial);
		console.log("x final : " + DnD.xFinal);
		console.log("y final : " + DnD.yFinal);

	}.bind(this) ;
};
