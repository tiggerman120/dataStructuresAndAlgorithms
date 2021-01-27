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
    // if (this.adjacencyList.has(startVertex) || this.adjacencyList.has(endVertex) === false) {
    //   throw new Error('error: need a start or end vertex', console.log(startVertex, endVertex, weight));
    // }

    //get startVertex from the Map (all of verticies)
    //push a new Edge that will connect the start to the end into the array along with the weight
    const adj = this.adjacencyList.get(startVertex);
    adj.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex) {
    // if (!this.adjacencyList.has(vertex)) {
    //   throw new Error('error - invalid vertex', console.log(vertex));
    // }
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

  

  bfsWithoutMethods(startNode) {
    const queue = [];
    //a set is an object that will only store unique keys
    const visitedNodes = [];
    //queue.push(startNode);
    if (!queue[0]) {
      queue[queue.length] = startNode;
    } else {
      queue[queue.length + 1] = startNode;
    }
    console.log(queue);
    //visitedNodes.add(startNode);
    if (!visitedNodes[0]) {
      visitedNodes[visitedNodes.length] = startNode;
    } else visitedNodes[visitedNodes.length + 1] = startNode;
    console.log(visitedNodes);


    while (queue.length) {
      //const currentNode = queue.shift();
      let currentNode;
      for (let i = 0; i < queue.length; i++) {
        currentNode = queue[i];
        queue[0] = queue[1];
        --queue.length;
      }
      //capture the value of first item in the array
      //remove the value from the queue
      //move every other item the array one position forward with a loop

      //get all the neighbors of the node that i took off the queue
      const neighbors = this.getNeighbors(currentNode);
      for (const neighbor of neighbors) {
        const neighborNode = neighbor.vertex;

        //if the set has the node that i'm looking for
        //if (visitedNodes.has(neighborNode)) {
        for (let i = 0; i < visitedNodes.length; i++) {
          if (visitedNodes[i] === neighborNode) {
            console.log(`hitting if statement`);
            //stop looking at this node and go to the next one
            break;
          } else {
            console.log(`hitting else statement`);
            //otherwise I haven't been there. I need to add it to the set
            visitedNodes[visitedNodes.length] = neighborNode;
            //visitedNodes.add(neighborNode);
            
          }
        }
        //put it into the queue
        //queue.push(neighborNode);
        if (!queue[0]) {
          queue[queue.length] = neighborNode;
        } else {
          queue[queue.length + 1] = neighborNode;
        }
      }

    }
    //return the Set so I have a list of nodes of where I've been
    console.log(visitedNodes);
    return visitedNodes;
  }

  dfs(startNode) {
    //add node to set
    const visitedNodes = new Set();
    const traverseNeighbors = (node) => {
      visitedNodes.add(node);
      const neighbors = this.getNeighbors(node);
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
    console.log(parentPath);
    return parentPath;
  }
  size() {
    return this.adjacencyList.size;
  }
}

module.exports = { Vertex, Edge, Graph };
