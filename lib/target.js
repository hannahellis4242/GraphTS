"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const target = (e, g) => {
    const found = g.edges.get(e);
    return found ? found.target : undefined;
};
exports.default = target;
