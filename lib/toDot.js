"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UndirectedGraph_1 = __importDefault(require("./UndirectedGraph"));
const edges_1 = __importDefault(require("./edges"));
const source_1 = __importDefault(require("./source"));
const target_1 = __importDefault(require("./target"));
const vertices_1 = __importDefault(require("./vertices"));
const toDot = (graph, writer) => {
    const graphType = graph instanceof UndirectedGraph_1.default ? "graph" : "digraph";
    const symbol = graph instanceof UndirectedGraph_1.default ? "--" : "->";
    let vertexCounter = 1;
    const vertexToLabelMap = new Map();
    let output = graphType + " name {\n";
    output += writer.writeGraph() + "\n";
    (0, vertices_1.default)(graph).forEach((vertex) => {
        const label = vertexCounter++;
        vertexToLabelMap.set(vertex, label);
        output += `${label} ${writer.writeVertex(vertex)};\n`;
    });
    (0, edges_1.default)(graph).forEach((edge) => {
        const s = (0, source_1.default)(edge, graph);
        const t = (0, target_1.default)(edge, graph);
        if (!s || !t) {
            return;
        }
        const sourceLabel = vertexToLabelMap.get(s);
        const targetLabel = vertexToLabelMap.get(t);
        if (!sourceLabel || !sourceLabel) {
            return;
        }
        output += `${sourceLabel} ${symbol} ${targetLabel} ${writer.writeEdge(edge)};\n`;
    });
    output += "}";
    return output;
};
exports.default = toDot;
