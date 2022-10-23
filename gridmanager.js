class GridManager {
    GRID_SIZE = 8;
    grid = [];
    nodes = [];

    constructor() {
        this.w = w;
        this.h = h;
        this.posx = 0;
        this.posy = 0;
        this.gridResolution = w / this.GRID_SIZE;

        createCanvas(w, h);

        this.slider_mouseRadius = createSlider(4, 16, 2);
        this.slider_mouseRadius.position(0, 0);
    }
    
    drawGrid() {
        stroke(100);
        for (let i = 1; i < this.gridResolution; i++) {
            line(0, i * this.gridResolution, document.documentElement.clientWidth, i * this.gridResolution);
            line(i * this.gridResolution, 0, i * this.gridResolution, document.documentElement.clientHeight);
        }
    }

    getMouseRadius() {
        return this.slider_mouseRadius.value();
    }
    
    highlight() {
        this.posx = Math.floor(mouseX / this.gridResolution);
        this.posy = Math.floor(mouseY / this.gridResolution);
        
        fill(color(200, 122, 84));
        rect(this.posx * this.gridResolution, this.posy * this.gridResolution, this.gridResolution, this.gridResolution);
    }
    
    isOOB(x, y) {   // is Out Of Bounds (OOB)
        let tile = this.grid[this.posx + x][this.posy + y];
        if (tile == undefined || tile.length == 0) {
            return true;
        }
        
        if (this.posx == 0 && x == -1) {
            return true;
        }
        if (this.posy == 0 && y == -1) {
            return true;
        }
        if (this.posx == this.GRID_SIZE - 1 && x == 1) {
            return true;
        }
        if (this.posy == this.GRID_SIZE - 1 && y == 1) {
            return true;
        }
        

        return false;
    }

    onMouseHover() {

    }
    
    setup() {
        // Resets nodes and sets up grid
        this.nodes = [];
        for (let i=0; i<20; i++) {
            let x = Math.floor(Math.random() * w);
            let y = Math.floor(Math.random() * h);
            
            this.nodes.push(new Node(x, y, i));
        }
    }

    subdivide() {
        this.grid = [];
        let counter = 0;

        for (let i = 0; i < this.GRID_SIZE; i++) {
            let row = [];
            for (let j = 0; j < this.GRID_SIZE; j++) {
                counter++;
                row.push([]);
            }
            this.grid.push(row);
        }

        this.nodes.forEach((e, i) => {
            let x1 = Math.floor(e.x / this.gridResolution);
            let y1 = Math.floor(e.y / this.gridResolution);
            this.grid[y1][x1].push(i);
        });
    }

    toGrid(x=mouseX, y=mouseY) {
        x = Math.floor(x / this.gridResolution);
        y = Math.floor(y / this.gridResolution);

        return [x, y];
    }


    // align(type="grid") {
    //     if (type === "grid") {
    //         let gridSize = Math.floor(Math.sqrt(nodes.length));
    //         let spacing = 32;

    //         for (let y = 0; y > gridSize + 1; y++) {
    //             for (let x = 0; x < gridSize; x++) {
    //                 let index = y * gridSize + x;

    //                 let node = nodes[index];
    //                 node.x = spacing * x + spacing;
    //                 node.y = spacing * y + spacing;

    //                 console.log(node.x, node.y);
    //             }
    //         }
    //     }
    // }
}