
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
    this.xInitial = 0;
    this.yInitial= 0;
    this.xFinal= 0;
    this.yFinal= 0;
    this.boutonPressee=false;

	// Developper les 3 fonctions gérant les événements
    this.maFctGérantLaPression= function(evt) {
      this.xInitial=getMousePosition(canvas,evt).x;
      this.yInitial=getMousePosition(canvas,evt).y;
      this.boutonPressee=true;
      console.log("x initial : " + this.xInitial);
      console.log("y initial : " + this.yInitial);
    }.bind(this) ;

    this.maFctGérantLeDéplacement=function(evt) {
      if(this.boutonPressee==true){
        this.xFinal=getMousePosition(canvas,evt).x;
        this.yFinal=getMousePosition(canvas,evt).y;
        console.log("x final : " + this.xFinal);
        console.log("y final : " + this.yFinal);
      }
    }.bind(this);

    this.maFctGérantLeRelâchement+function(evt) {
      if(this.boutonPressee==true){
        this.boutonPressee=false;
        console.log("x final : " + this.xFinal);
        console.log("y final : " + this.yFinal);
      }
    }.bind(this) ;


  // Associer les fonctions précédentes aux évènements du canvas.
  var Canvas = document.getElementById("myCanvas");
  canvas.addEventListener('mousedown', this.maFctGérantLaPression, false);
  canvas.addEventListener('mousemove', this.maFctGérantLeDéplacement, false);
  canvas.addEventListener('mouseup', this.maFctGérantLeRelâchement, false);

};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};

