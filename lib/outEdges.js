"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const outEdges = (v, g) => Array.from(g.edges.entries())
    .filter(([_, { source }]) => source === v)
    .map(([descriptor, _]) => descriptor);
exports.default = outEdges;
