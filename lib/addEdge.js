"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createId_1 = __importDefault(require("./createId"));
const createED = () => ({
    for: "edge",
    identifier: (0, createId_1.default)(),
});
const addEdge = (source, target, data, graph, descriptorToUse) => {
    const descriptor = descriptorToUse || createED();
    graph.edges.set(descriptor, { source, target, data });
    return descriptor;
};
exports.default = addEdge;
