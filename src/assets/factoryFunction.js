function newNodeJson(name, Instrument, lineName, key) {
  const nodeJson = {}
  nodeJson.name = name
  nodeJson.url = `@music/${Instrument}/${lineName}/${name}.wav`
  nodeJson.key = key
  return nodeJson
}

function newLine(Instrument, line, lineName) {
  // 赋值lineName
  const keys = line === 1 ? ['q', 'w', 'e', 'r', 't', 'y', 'u'] : (line === 2 ? ['a', 's', 'd', 'f', 'g', 'h', 'j'] : ['z', 'x', 'c', 'v', 'b', 'n', 'm'])
  const names = ['do', 're', 'mi', 'fa', 'so', 'la', 'ti']
  const nodeLine = {}
  for (let index = 0; index < names.length; index++) {
    nodeLine[names[index]] = newNodeJson(names[index], Instrument, lineName, keys[index])
  }
  return nodeLine
}

function newMusicalInstrumentsConfig(Instrument, severalLines) {
  let lineName = ''
  const musicalInstrumentsConfig = {}
  for(let index = 0; index < severalLines; index++) {
    lineName =  index === 1 ? 'FirstLine' : (index === 2 ? 'SecondLine' : 'TheThirdRow')
    musicalInstrumentsConfig[lineName] = newLine(Instrument, index, lineName)
  }
  return JSON.stringify(musicalInstrumentsConfig)
}

console.log(newMusicalInstrumentsConfig('风物之诗琴', 3))