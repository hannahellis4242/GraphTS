"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inEdges = (v, g) => g.directed
    ? Array.from(g.edges.entries())
        .filter(([_, { target }]) => target === v)
        .map(([descriptor, _]) => descriptor)
    : Array.from(g.edges.entries())
        .filter(([_, { source, target }]) => source === v || target === v)
        .map(([descriptor, _]) => descriptor);
exports.default = inEdges;
