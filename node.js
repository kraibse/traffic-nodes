class Node {
    color = color('white');
    connections = [];

    constructor(x, y, id=-1) {
        this.x = x;
        this.y = y;
        this.id = id;
        this.size = Math.random() * 10 + 4;
        this.connect(Math.floor(random() * gm.nodes.length));
    }

    connect(nodeID) {
        if (this.connections.indexOf(nodeID) > -1) {
            return;
        }
        this.connections.push(nodeID);
    }

    draw() {
        fill(this.color);
        stroke(this.color);
        ellipse(this.x, this.y, this.size, this.size);  // static round node

        fill(255);
        this.connections.forEach(e => {
            let node = gm.nodes[e];
            line(node.x, node.y, this.x, this.y);
        });
    }

    update() {
        // this.color = color(255);
        let inRange = false;
        let distance = Math.sqrt((this.x - mouseX) ** 2 + (this.y - mouseY) ** 2);
        if (distance <= this.size + 6) {
            this.color = color("red");
        }
    }
}