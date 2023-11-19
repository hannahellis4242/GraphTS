"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const outEdges_1 = __importDefault(require("./outEdges"));
const source_1 = __importDefault(require("./source"));
const target_1 = __importDefault(require("./target"));
const getVerices = (v, g) => g.directed
    ? (0, outEdges_1.default)(v, g)
        .map((edge) => (0, target_1.default)(edge, g))
        .map((vertex) => vertex)
    : (0, outEdges_1.default)(v, g)
        .flatMap((edge) => [(0, source_1.default)(edge, g), (0, target_1.default)(edge, g)])
        .filter((vertex) => vertex !== v)
        .map((vertex) => vertex);
const adjacentVertices = (v, g) => getVerices(v, g).reduce((unique, vertex) => unique.includes(vertex) ? unique : [...unique, vertex], []);
exports.default = adjacentVertices;
