var w = document.documentElement.clientWidth;
var h = w;
// var h = document.documentElement.clientHeight;

var gm;

function setup() {
    gm = new GridManager(w, h);
    gm.setup();
    gm.subdivide();
}
  
function draw() {
    background(0, 100);
    gm.drawGrid();

    fill(255);
    text("Mouse Radius: " + gm.getMouseRadius(), 0, w);
    text("Nodes: " + gm.nodes.length, 0, w - 16);

    gm.onMouseHover();
    
    gm.nodes.forEach((n, i) => {
        n.update();
        n.draw();
    });
}