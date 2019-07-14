/// <reference types="@antv/util" />
import Shape = require('../core/shape');
declare class Polygon extends Shape {
    constructor(cfg: any);
    static ATTRS: {
        points: [number, number][];
        lineWidth: number;
    };
    _attrs: typeof Polygon.ATTRS & Shape['_attrs'];
    static superclass: Shape & {
        prototype: Shape;
        constructor: typeof Shape;
    };
    canFill: true;
    canStroke: true;
    type: 'polygon';
    getDefaultAttrs(): {
        lineWidth: number;
    };
    calculateBox(): {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
    };
    createPath(context: any): void;
}
export = Polygon;
