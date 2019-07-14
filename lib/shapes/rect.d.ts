/// <reference types="@antv/util" />
import Shape = require('../core/shape');
declare class Rect extends Shape {
    constructor(cfg: any);
    static ATTRS: {
        x: number;
        y: number;
        width: number;
        height: number;
        radius: number;
        lineWidth: number;
    };
    _attrs: typeof Rect.ATTRS & Shape['_attrs'];
    static superclass: Shape & {
        prototype: Shape;
        constructor: typeof Shape;
    };
    canFill: true;
    canStroke: true;
    type: 'rect';
    getDefaultAttrs(): {
        lineWidth: number;
        radius: number;
    };
    calculateBox(): {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
    };
    createPath(context: any): void;
}
export = Rect;
