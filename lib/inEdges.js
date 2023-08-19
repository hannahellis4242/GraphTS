"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inEdges = (v, g) => Array.from(g.edges.entries())
    .filter(([_, { target }]) => target === v)
    .map(([descriptor, _]) => descriptor);
exports.default = inEdges;
