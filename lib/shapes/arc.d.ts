/// <reference types="@antv/util" />
import Shape = require('../core/shape');
declare class Arc extends Shape {
    constructor(cfg: any);
    static ATTRS: {
        x: number;
        y: number;
        r: number;
        startAngle: number;
        endAngle: number;
        clockwise: boolean;
        lineWidth: number;
        startArrow: boolean;
        endArrow: boolean;
    };
    _attrs: typeof Arc.ATTRS & Shape['_attrs'];
    static superclass: Shape & {
        prototype: Shape;
        constructor: typeof Shape;
    };
    canStroke: true;
    type: 'arc';
    getDefaultAttrs(): {
        x: number;
        y: number;
        r: number;
        startAngle: number;
        endAngle: number;
        clockwise: boolean;
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
    getStartTangent(): any[];
    getEndTangent(): any[];
    createPath(context: any): void;
    afterPath(context: any): void;
}
export = Arc;
