/// <reference types="@antv/util" />
import Shape = require('../core/shape');
declare class Dom extends Shape {
    constructor(cfg: any);
    static superclass: Shape & {
        prototype: Shape;
        constructor: typeof Shape;
    };
    canFill: true;
    canStroke: true;
    type: 'dom';
    calculateBox(): {
        minX: number;
        minY: number;
        maxX: any;
        maxY: any;
    };
}
export = Dom;
