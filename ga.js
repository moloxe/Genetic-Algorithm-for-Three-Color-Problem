function Parejas(n) {
  par = {}
  Aleatorio = []
  for (let i = 0; i < n / 2; i++)
    Aleatorio.push(i % Math.round(n / 2))
  Aleatorio = shuffle(Aleatorio)
  for (let i = 0; i < n / 2; i++) {
    par[i] = Aleatorio[i]
    par[Aleatorio[i]] = i
  }
  return par
}

function MejorIndividuo(Individuos) {
  for (let i of Individuos) {
    if (MejorPtj < Idoneidad(i)) {
      Mejor = i
      MejorPtj = Idoneidad(i)
    }
  }
  return Mejor
}

function Inicializacion(n, nIndividuos) {
  let Individuos = []
  for (let _ = 0; _ < nIndividuos; _++) {
    Individuos.push([])
    for (let i = 0; i < n; i++)
      Individuos[_].push(Math.ceil(random(3)))
  }
  return Individuos
}

function Idoneidad(_colors) {
  let x = 0
  for (let e of edges) {
    if (_colors[e[0]] != _colors[e[1]]) {
      x++
    }
  }
  return x
}

function Seleccion(Individuos) {
  let par = Parejas(Individuos.length)
  for (let k in par) {
    let v = par[k]
    if (Idoneidad(Individuos[k]) > Idoneidad(Individuos[v])) {
      Individuos[v] = Individuos[k]
    }
  }
  return Individuos
}

function Cruce(Individuos) {
  let par = Parejas(Individuos.length)
  let item = 0
  for (let k in par) {
    let v = par[k]
    if (item % 2 == 0) {
      let Punto = Math.ceil(random(n))
      let Hijo1 = []
      let Hijo2 = []
      let Padre1 = Individuos[k]
      let Padre2 = Individuos[v]
      for (let x = 0; x < Punto; x++) {
        Hijo1.push(Padre1[x])
        Hijo2.push(Padre2[x])
      }
      for (let x = Punto; x < n; x++) {
        Hijo1.push(Padre2[x])
        Hijo2.push(Padre1[x])
      }
      Individuos[k] = Hijo1
      Individuos[v] = Hijo2
    }
    item++
  }
  return Individuos
}

function Mutacion(Individuos) {
  for (let i = 0; i < Individuos.length; i++) {
    if (random(1) > 0.5) {
      Individuos[i][Math.ceil(random(n))] = Math.ceil(random(3))
    }
  }
  return Individuos
}

