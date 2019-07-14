/// <reference types="@antv/util" />
import Shape = require('../core/shape');
declare class Line extends Shape {
    constructor(cfg: any);
    static ATTRS: {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        lineWidth: number;
        startArrow: boolean;
        endArrow: boolean;
    };
    _attrs: typeof Line.ATTRS & Shape['_attrs'];
    static superclass: Shape & {
        prototype: Shape;
        constructor: typeof Shape;
    };
    canStroke: true;
    type: 'line';
    getDefaultAttrs(): {
        lineWidth: number;
        startArrow: boolean;
        endArrow: boolean;
    };
    calculateBox(): {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
    };
    createPath(context: any): void;
    afterPath(context: any): void;
    getPoint(t: any): {
        x: number;
        y: number;
    };
}
export = Line;
