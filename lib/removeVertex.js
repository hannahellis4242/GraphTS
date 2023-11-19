"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addVertex_1 = __importDefault(require("./addVertex"));
const addEdge_1 = __importDefault(require("./addEdge"));
const createGraph_1 = __importDefault(require("./createGraph"));
const removeVertex = (v, g) => {
    const ng = (0, createGraph_1.default)(g.data, g.directed);
    Array.from(g.vertices.entries())
        .filter(([descriptor, _]) => descriptor !== v)
        .forEach(([descriptor, data]) => (0, addVertex_1.default)(data, ng, descriptor));
    Array.from(g.edges.entries())
        .filter(([_, { source }]) => source !== v)
        .filter(([_, { target }]) => target !== v)
        .forEach(([descriptor, { source, target, data }]) => (0, addEdge_1.default)(source, target, data, ng, descriptor));
    return ng;
};
exports.default = removeVertex;
