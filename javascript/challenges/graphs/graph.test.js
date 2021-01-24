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
  it('returns a collection of all nodes in the graph', () => {
    let graph = new Graph();
    let node1 = new Vertex(5);
    let node2 = new Vertex(6);
    let node3 = new Vertex(7);
    graph.addVertex(node1);
    graph.addVertex(node2);
    graph.addVertex(node3);
    graph.addDirectedEdge(node1, node2, 1);
    expect(graph.size()).toEqual(2);
  });

  it('successfully gets all neighbors of a node', () => {
    let graph = new Graph();
    let vertex1 = new Vertex(1);
    let vertex2 = new Vertex(2);
    let vertex3 = new Vertex(3);
    graph.addVertex(vertex1);
    graph.addVertex(vertex2);
    graph.addDirectedEdge(vertex1, vertex2, 1);
    
    expect(graph.getNeighbors(vertex1)).toEqual(7);

  });
});
