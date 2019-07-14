/// <reference types="@antv/util" />
import Shape = require('../core/shape');
declare class Ellipse extends Shape {
    constructor(cfg: any);
    static ATTRS: {
        x: number;
        y: number;
        rx: number;
        ry: number;
        lineWidth: number;
    };
    _attrs: typeof Ellipse.ATTRS & Shape['_attrs'];
    static superclass: Shape & {
        prototype: Shape;
        constructor: typeof Shape;
    };
    canFill: true;
    canStroke: true;
    type: 'ellipse';
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
export = Ellipse;
