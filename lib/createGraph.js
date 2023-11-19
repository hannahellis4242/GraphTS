"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DirectedGraph_1 = __importDefault(require("./DirectedGraph"));
const UndirectedGraph_1 = __importDefault(require("./UndirectedGraph"));
const createGraph = (data, directed) => {
    return directed
        ? new DirectedGraph_1.default(data)
        : new UndirectedGraph_1.default(data);
};
exports.default = createGraph;
