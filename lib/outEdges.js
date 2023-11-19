"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inEdges_1 = __importDefault(require("./inEdges"));
const outEdges = (v, g) => g.directed
    ? Array.from(g.edges.entries())
        .filter(([_, { source }]) => source === v)
        .map(([descriptor, _]) => descriptor)
    : (0, inEdges_1.default)(v, g);
exports.default = outEdges;
