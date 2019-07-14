/// <reference types="@antv/util" />
import Shape = require('../core/shape');
declare class Fan extends Shape {
    constructor(cfg: any);
    static ATTRS: {
        x: number;
        y: number;
        rs: number;
        re: number;
        startAngle: number;
        endAngle: number;
        clockwise: boolean;
        lineWidth: number;
    };
    _attrs: typeof Fan.ATTRS & Shape['_attrs'];
    static superclass: Shape & {
        prototype: Shape;
        constructor: typeof Shape;
    };
    canFill: true;
    canStroke: true;
    type: 'fan';
    getDefaultAttrs(): {
        clockwise: boolean;
        lineWidth: number;
        rs: number;
        re: number;
    };
    calculateBox(): {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
    };
    createPath(context: any): void;
}
export = Fan;
