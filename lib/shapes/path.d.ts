/// <reference types="@antv/util" />
import Shape = require('../core/shape');
import PathSegment = require('./util/path-segment');
declare class Path extends Shape {
    constructor(cfg: any);
    static ATTRS: {
        path: Common.SVGPathOrStr;
        lineWidth: number;
        startArrow: boolean;
        endArrow: boolean;
    };
    _attrs: typeof Path.ATTRS & Shape['_attrs'];
    _cfg: Shape['_cfg'] & {
        segments: PathSegment[];
        totalLength: number;
        curve: Common.SVGPath;
    };
    static superclass: Shape & {
        prototype: Shape;
        constructor: typeof Shape;
    };
    canFill: true;
    canStroke: true;
    type: 'path';
    getDefaultAttrs(): {
        lineWidth: number;
        startArrow: boolean;
        endArrow: boolean;
    };
    _afterSetAttrPath(path: any): void;
    calculateBox(): {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
    };
    _setTcache(): void;
    getTotalLength(): number;
    _calculateCurve(): void;
    getStartTangent(): any;
    getEndTangent(): any;
    getPoint(t: number): Common.Point;
    createPath(context: any): void;
    afterPath(context: any): void;
}
export = Path;
import Common from '../common';
