/// <reference types="@antv/util" />
import Common from '../common';
import Shape = require('../core/shape');
declare class Marker extends Shape {
    constructor(cfg: any);
    static Symbols: {
        [x in Marker.Symbols]: Marker.SymbolPathFunc;
    };
    static ATTRS: {
        path: any;
        lineWidth: number;
        x: number;
        y: number;
        r: number;
        radius: number;
        symbol: Marker.SymbolsAttr;
    };
    _attrs: typeof Marker.ATTRS & Shape['_attrs'];
    static superclass: Shape & {
        prototype: Shape;
        constructor: typeof Shape;
    };
    type: 'marker';
    canFill: true;
    canStroke: true;
    getDefaultAttrs(): {
        x: number;
        y: number;
        lineWidth: number;
    };
    calculateBox(): {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
    };
    _getPath(): Common.SVGPath;
    createPath(context: any): void;
}
export = Marker;
declare namespace Marker {
    type Symbols = 'circle' | 'square' | 'diamond' | 'triangle' | 'triangle-down';
    type SymbolPathFunc = (x: number, y: number, r: number) => Common.SVGPath;
    type SymbolsAttr = Symbols | SymbolPathFunc;
}
