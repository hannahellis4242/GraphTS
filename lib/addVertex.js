"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createId_1 = __importDefault(require("./createId"));
const createVD = () => ({
    for: "vertex",
    identifier: (0, createId_1.default)(),
});
const addVertex = (vertex, graph, descriptorToUse) => {
    const descriptor = descriptorToUse || createVD();
    graph.vertices.set(descriptor, vertex);
    return descriptor;
};
exports.default = addVertex;
