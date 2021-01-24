'use strict';

class Vertex {
  constructor(value) {
    this.value = value;

  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}


class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    //.set(key, value) puts a key/value (node) into the Map
    //key is the vertex and the value is an array of everything connected to it
    //when you add a node for the first time the value is an empty array because it will eventually hold a list of all of the nodes that it is connected to
    this.adjacencyList.set(vertex, []);
  }

  addDirectedEdge(startVertex, endVertex, weight) {
    console.log(this.adjacencyList);
    if (this.adjacencyList.has(startVertex) || this.adjacencyList.has(endVertex) === false) {
      throw new Error('error: need a start or end vertex', console.log(startVertex, endVertex, weight));
    }

    //get startVertex from the Map (all of verticies)
    //push a new Edge that will connect the start to the end into the array along with the weight
    const adj = this.adjacencyList.get(startVertex);
    adj.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('error - invalid vertex', vertex);
    }
    console.log(this.adjacencyList);
    return this.adjacencyList.get(vertex);
  }

  bfs(startNode) {
    const queue = [];

    //a set is an object that will only store unique keys
    const visitedNodes = new Set();
    queue.push(startNode);
    visitedNodes.add(startNode);

    while (queue.length) {
      const currentNode = queue.shift();
      //get all the neighbors of the node that i took off the queue
      const neighbors = this.getNeighbors(currentNode);
      for (const neighbor of neighbors) {
        const neighborNode = neighbor.vertex;

        //if the set has the node that i'm looking for
        if (visitedNodes.has(neighborNode)) {
          //stop looking at this node and go to the next one
          continue;
        } else {
          //otherwise I haven't been there. I need to add it to the set
          visitedNodes.add(neighborNode);
        }
        //put it into the queue
        queue.push(neighborNode);
      }

    }
    //return the Set so I have a list of nodes of where I've been
    return visitedNodes;
  }

  dfs(startNode) {
    //add node to set
    const visitedNodes = new Set();

    const traverseNeighbors = (node) => {

      visitedNodes.add(node);
      //logic
      const neighbors = this.getNeighbors();
      for (const edge of neighbors) {
        if (!visitedNodes.has(edge.vertex)) {
          traverseNeighbors(edge.vertex);
        }
      }
    };
    traverseNeighbors(startNode);
    return visitedNodes;
  }

  pathTo(startNode, endNode) {
    const stack = [];
    const visitedNodes = new Set();
    const parentPath = new Map();

    stack.push(startNode);
    visitedNodes.add(startNode);

    while (stack.length) {
      const currentNode = stack.pop();

      if (currentNode === endNode) {
        return parentPath;
      }

      const neighbors = this.getNeighbors(currentNode);

      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;

        if (visitedNodes.has(neighborNode)) {
          continue;
        } else {
          visitedNodes.add(neighborNode);
        }

        stack.push(neighborNode);
        parentPath.set(neighborNode, currentNode);
      }
    }
  }
  size(vertex) {
    // if (!vertex) {
    //   console.error('no starting node');
    // }
    let tally = 0;
    const visitedNodes = new Set();

    const traverseNeighbors = (node) => {

      visitedNodes.add(node);
      //logic
      const neighbors = this.getNeighbors();
      for (const edge of neighbors) {
        if (!visitedNodes.has(edge.vertex)) {
          traverseNeighbors(edge.vertex);
          tally++;
        }
      }
    };
    traverseNeighbors(vertex);
    return tally;
  }
}

module.exports = { Vertex, Edge, Graph };
