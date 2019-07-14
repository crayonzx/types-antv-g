/// <reference types="@antv/util" />
import Shape = require('../core/shape');
declare class Circle extends Shape {
    constructor(cfg: any);
    static ATTRS: {
        x: number;
        y: number;
        r: number;
        lineWidth: number;
    };
    _attrs: typeof Circle.ATTRS & Shape['_attrs'];
    static superclass: Shape & {
        prototype: Shape;
        constructor: typeof Shape;
    };
    canFill: true;
    canStroke: true;
    type: 'circle';
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
export = Circle;
