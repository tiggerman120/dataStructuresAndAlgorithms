'use strict';

const { Vertex, Edge, Graph } = require('./graph');
const getEdge = require('./getEdge');

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
    graph.addDirectedEdge(vertex1, vertex2, 1);
    graph.addDirectedEdge(vertex2, vertex3, 2);
    let results = graph.dfs(vertex1);
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

  it(' does a bfs with no methods', () => {
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
    expect(graph.bfsWithoutMethods(vertex1)).toEqual(7);
  });

  it('returns true and the total cost of a flight from point a to point b', () => {
    let graph = new Graph();
    let array = ['pandora', 'arendelle'];
    let vertex1 = new Vertex('pandora');
    let vertex2 = new Vertex('arendelle');
    let vertex3 = new Vertex('monstropolis');
    graph.addVertex(vertex1);
    graph.addVertex(vertex2);
    graph.addVertex(vertex3);
    graph.addDirectedEdge(vertex1, vertex2, 150);
    graph.addDirectedEdge(vertex2, vertex3, 42);
    expect(getEdge(graph, array)).toEqual(7);
  });
});
