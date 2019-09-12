var Individuos, Mejor = [], MejorPtj = 0
var n = nodes.length

function setup() {
  createCanvas(640, 480);

  Individuos = Inicializacion(n, nIndividuos)
  Mejor = MejorIndividuo(Individuos)
  frameRate(gps)
}

function draw() {

  background(color(255, 253, 250));

  fill(0)
  textSize(16)
  textAlign(CENTER, CENTER)
  text("Generación " + frameCount + ".", width / 2, height / 8)
  
  Individuos = Seleccion(Individuos)
  Individuos = Cruce(Individuos)
  let nuevosIndividuos = Mutacion(Individuos)
  Mejor = MejorIndividuo(nuevosIndividuos)
  Individuos = Reemplazo(Individuos, nuevosIndividuos)
  
  translate(width / 2, height / 2)
  
  let cont = 0
  for (let e of edges) {
    let node1 = nodes[e[0]]
    let node2 = nodes[e[1]]

    if (Mejor[e[0]] == Mejor[e[1]]) {
      strokeWeight(2)
      stroke(color(255, 0, 0))
    }
    else {
      strokeWeight(1.3)
      stroke(0)
      cont++
    }
    
    line(node1.x, node1.y, node2.x, node2.y)
  }
  if(cont==edges.length) noLoop()

  for (let i = 0; i < n; i++) {

    let node = nodes[i]
    if (Mejor[i] == 1) fill(color(255, 0, 0))
    if (Mejor[i] == 2) fill(color(0, 255, 0))
    if (Mejor[i] == 3) fill(color(0, 0, 255))

    noStroke()
    ellipse(node.x, node.y, 15, 15)
  }
}