'use strict';

const { Vertex, Edge, Graph } = require('./graph');

describe('graphs', () => {
  it('can successfully add a node', () => {
    let node = new Vertex(5);
    expect(node.value).toBe(5);
  });

  it('can successfully add an edge to the graph', () => {
    let node = new Vertex(5);
    let edge = new Edge(node, 9);
    expect(edge.vertex.value).toBe(5);
  });
  it('returns the size of the graph', () => {
    let graph = new Graph();
    let node1 = new Vertex(5);
    let node2 = new Vertex(6);
    let node3 = new Vertex(7);
    let node4 = new Vertex(8);
    graph.addVertex(node1);
    graph.addVertex(node2);
    graph.addVertex(node3);
    graph.addVertex(node4);
    graph.addDirectedEdge(node1, node2, 1);
    console.log(graph.adjacencyList);
    expect(graph.size()).toEqual(graph.adjacencyList.size);
  });

  it('successfully gets all neighbors of a node', () => {
    let graph = new Graph();
    let vertex1 = new Vertex(1);
    let vertex2 = new Vertex(2);
    let vertex3 = new Vertex(3);
    graph.addVertex(vertex1);
    graph.addVertex(vertex2);
    graph.addDirectedEdge(vertex1, vertex2, 1);
    let neighbors = graph.getNeighbors(vertex1);
    expect(graph.getNeighbors(vertex1)).toEqual(neighbors);
  });

  it('a collection of all nodes can be returned from the graph', () => {
    let graph = new Graph();
    let vertex1 = new Vertex(1);
    let vertex2 = new Vertex(2);
    let vertex3 = new Vertex(3);
    let set = new Set();
    graph.addVertex(vertex1);
    graph.addVertex(vertex2);
    graph.addVertex(vertex3);
    set.add(vertex1);
    set.add(vertex2);
    set.add(vertex3);
    console.log(set);
    graph.addDirectedEdge(vertex1, vertex2, 1);
    graph.addDirectedEdge(vertex2, vertex3, 2);
    let results = graph.dfs(vertex1);
    console.log(results);
    expect(graph.dfs(vertex1)).toEqual(set);
  });

  it('an empty graph returns null', () => {
    let graph = new Graph();
    expect(graph.adjacencyList).toHaveReturnedWith(null);
  });

  it('properly returns the path to a node', () => {
    let graph = new Graph();
    let vertex1 = new Vertex(1);
    let vertex2 = new Vertex(2);
    let vertex3 = new Vertex(3);
    let set = new Set();
    graph.addVertex(vertex1);
    graph.addVertex(vertex2);
    graph.addVertex(vertex3);
    set.add(vertex1);
    set.add(vertex2);
    set.add(vertex3);
    graph.addDirectedEdge(vertex1, vertex2, 1);
    graph.addDirectedEdge(vertex2, vertex3, 2);
    expect(graph.pathTo(vertex1, vertex3)).toEqual(7);
  });
});
