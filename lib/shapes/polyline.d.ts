/// <reference types="@antv/util" />
import Shape = require('../core/shape');
declare class Polyline extends Shape {
    constructor(cfg: any);
    static ATTRS: {
        points: any;
        lineWidth: number;
        startArrow: boolean;
        endArrow: boolean;
        tCache: any;
    };
    _attrs: typeof Polyline.ATTRS & Shape['_attrs'];
    static superclass: Shape & {
        prototype: Shape;
        constructor: typeof Shape;
    };
    canStroke: true;
    type: 'polyline';
    tCache: null;
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
    _setTcache(): void;
    createPath(context: any): void;
    getStartTangent(): any[];
    getEndTangent(): any[];
    afterPath(context: any): void;
    getPoint(t: number): {
        x: number;
        y: number;
    };
}
export = Polyline;
