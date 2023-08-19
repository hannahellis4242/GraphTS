"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inEdges_1 = __importDefault(require("./inEdges"));
("./outEdges");
const inDegree = (v, g) => (0, inEdges_1.default)(v, g).length;
exports.default = inDegree;
