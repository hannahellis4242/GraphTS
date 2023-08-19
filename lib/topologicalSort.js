"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inDegree_1 = __importDefault(require("./inDegree"));
const removeVertex_1 = __importDefault(require("./removeVertex"));
const vertices_1 = __importDefault(require("./vertices"));
const topologicalSort = (g) => {
    const graphVertices = (0, vertices_1.default)(g);
    if (graphVertices.length === 0) {
        return [];
    }
    const next = graphVertices.find((vertex) => (0, inDegree_1.default)(vertex, g) === 0);
    if (!next) {
        throw new Error("Graph contains a cycle");
    }
    const nextGraph = (0, removeVertex_1.default)(next, g);
    return [next].concat(topologicalSort(nextGraph));
};
exports.default = topologicalSort;
