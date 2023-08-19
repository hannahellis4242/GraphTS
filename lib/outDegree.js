"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const outEdges_1 = __importDefault(require("./outEdges"));
const outDegree = (v, g) => (0, outEdges_1.default)(v, g).length;
exports.default = outDegree;
