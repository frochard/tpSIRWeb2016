var editingMode = { rect: 0, line: 1, circle: 2 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape=null;
	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	new DnD(canvas, this);
	// Implémentation des 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart= function(DnD) {
		//Test de la forme
		var butRect = document.getElementById('butRect'),butLine = document.getElementById('butLine'),
			spinnerWidth=document.getElementById('spinnerWidth'),colour=document.getElementById('colour');
		this.currLineWidth= spinnerWidth.value;
		this.currColour=colour.value;
		//Test de la forme sélectionnée
		if(butRect.checked) {
			this.currEditingMode=editingMode.rect;
		}else if(butLine.checked){
			this.currEditingMode=editingMode.line;
		}else if(butCircle.checked){
			this.currEditingMode=editingMode.circle;
		}else{
			console.log('La sélection de la forme est invalide');
		}
		//Création de la forme sélectionnée
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
			case editingMode.circle: {
				//Calacul du rayon
				var rayon = Math.sqrt(Math.pow(DnD.xFinal-DnD.xInitial,2)+Math.pow(DnD.yFinal-DnD.yInitial,2))
				//Création de la ligne
				this.currentShape = new Circle(DnD.xInitial,DnD.yInitial,rayon,this.currLineWidth,this.currColour);
				break;
			}
			default:
				console.log("la forme sélectionnée n'existe pas.");
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
		}else if(butCircle.checked){
			//Calacul du rayon
			var rayon = Math.sqrt(Math.pow(DnD.xFinal-DnD.xInitial,2)+Math.pow(DnD.yFinal-DnD.yInitial,2))
			//Création de la ligne
			this.currentShape = new Circle(DnD.xInitial,DnD.yInitial,rayon,this.currLineWidth,this.currColour);
		}else{
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
		}else if(butLine.checked){
			//Création de la ligne
			this.currentShape = new Line(DnD.xInitial, DnD.yInitial, DnD.xFinal, DnD.yFinal, this.currLineWidth, this.currColour);
		}else if(butCircle.checked){
			//Calacul du rayon
			var rayon = Math.sqrt(Math.pow(DnD.xFinal-DnD.xInitial,2)+Math.pow(DnD.yFinal-DnD.yInitial,2))
			//Création de la ligne
			this.currentShape = new Circle(DnD.xInitial,DnD.yInitial,rayon,this.currLineWidth,this.currColour);
		}else{
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
		//Réinitialisation de la forme courante
		this.currentShape=null;
	}.bind(this);
}