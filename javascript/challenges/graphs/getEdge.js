'use strict';



function getEdge(graph, array) {
  let arr = [];
  if (!graph || !array) {
    console.log(`graph ${graph} array ${array}`);
    throw new Error('you need a graph or an array');
  }

  for (let neighbor of graph.adjacencyList) {
    console.log('single neighbor', neighbor);
    let neighbors = graph.getNeighbors(neighbor[0]);
    arr[arr.length] = neighbor;
    console.log('neighbors', neighbors);
    console.log(arr);
    if (arr[0] === neighbor[0]) {
      
    }
  }


  console.log(graph, array);

  return false;
}

module.exports = getEdge;
