'use strict';

function dfs(startNode) {
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

module.exports = dfs;
