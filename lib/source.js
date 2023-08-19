"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const source = (e, g) => {
    const found = g.edges.get(e);
    return found ? found.source : undefined;
};
exports.default = source;
